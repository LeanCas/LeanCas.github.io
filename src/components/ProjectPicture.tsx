import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  base: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * AVIF + WebP responsive picture for a static export (no image server).
 * next/image renders the <img> fallback with intrinsic sizing to avoid CLS.
 */
export function ProjectPicture({ base, alt, sizes, className, priority }: Props) {
  return (
    <picture>
      <source type="image/avif" srcSet={`${base}-800.avif 800w, ${base}-1600.avif 1600w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`} sizes={sizes} />
      <Image
        src={`${base}-1600.webp`}
        alt={alt}
        width={1600}
        height={1000}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", className)}
      />
    </picture>
  );
}
