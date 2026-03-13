import { NextResponse } from "next/server";

import { getServiceSupabase } from "@/lib/supabase/server";

type ProfileRequest = {
  phoneNumber?: string;
  businessName?: string;
  storefrontSlug?: string;
};

export async function POST(request: Request) {
  const supabase = getServiceSupabase();

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured" },
      { status: 503 },
    );
  }

  const authorization = request.headers.get("authorization");
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ error: "Missing auth token" }, { status: 401 });
  }

  const { data: authData, error: authError } = await supabase.auth.getUser(token);

  if (authError || !authData.user) {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }

  const body = (await request.json()) as ProfileRequest;

  if (!body.phoneNumber || !body.businessName || !body.storefrontSlug) {
    return NextResponse.json(
      { error: "phoneNumber, businessName, and storefrontSlug are required" },
      { status: 400 },
    );
  }

  const sellerPayload = {
    auth_user_id: authData.user.id,
    phone_number: body.phoneNumber,
    business_name: body.businessName,
    storefront_slug: body.storefrontSlug,
    whatsapp_number: body.phoneNumber,
  };

  const { data: existingByPhone } = await supabase
    .from("sellers")
    .select("id")
    .eq("phone_number", body.phoneNumber)
    .single();

  const query = existingByPhone
    ? supabase.from("sellers").update(sellerPayload).eq("id", existingByPhone.id)
    : supabase.from("sellers").insert(sellerPayload);

  const { error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    storefrontUrl: `/store/${body.storefrontSlug}`,
  });
}
