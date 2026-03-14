"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SocialIcon } from "@/components/social-icon";
import { socialLinks } from "@/lib/app-data";

export function SiteFooter() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-[#6b6358] sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-[#0f2b11]">
            Emeza
          </p>
          <p className="mt-3 max-w-xl leading-7">
            {copy.footer.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f3f2ef] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b5e20] transition hover:bg-[#e7efe4]"
              >
                <SocialIcon kind={social.icon} className="h-4 w-4" />
                {social.handle}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/terms" className="hover:text-[#1b5e20]">
            {copy.footer.terms}
          </Link>
          <Link href="/privacy" className="hover:text-[#1b5e20]">
            {copy.footer.privacy}
          </Link>
          <Link href="/contact" className="hover:text-[#1b5e20]">
            {copy.footer.contact}
          </Link>
          <Link href="/how-it-works" className="hover:text-[#1b5e20]">
            {copy.footer.howItWorks}
          </Link>
        </div>
      </div>
    </footer>
  );
}
