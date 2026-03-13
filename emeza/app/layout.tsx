import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emeza | Gura udatinya",
  description:
    "MoMo-powered escrow for Rwanda's social commerce market. Buy without fear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
