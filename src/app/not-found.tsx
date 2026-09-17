import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-svh flex-col overflow-hidden bg-paper">
      <div className="hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div className="container-x relative flex h-16 items-center md:h-[72px]">
        <Link href="/" aria-label="HOTY. home">
          <Logo className="w-[92px]" />
        </Link>
      </div>
      <div className="container-x relative flex flex-1 flex-col justify-center py-20">
        <p className="eyebrow text-green-ink">Error 404</p>
        <h1 className="display mt-6 text-[clamp(3rem,9vw,8rem)]">
          This page
          <br />
          <span className="text-carbon/55">doesn&apos;t exist</span>
          <span className="text-green">.</span>
        </h1>
        <div className="mt-10">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
