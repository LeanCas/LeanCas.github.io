"use client";

import dynamic from "next/dynamic";

// The hero composition is decorative (aria-hidden) and animates in on mount,
// so it is rendered client-side only to keep the initial HTML and hydration light.
const HeroVisual = dynamic(() => import("./HeroVisual").then((m) => m.HeroVisual), {
  ssr: false,
  loading: () => <div className="h-[450px] w-full sm:h-[540px] lg:h-[560px]" aria-hidden="true" />,
});

export function HeroVisualLazy() {
  return <HeroVisual />;
}
