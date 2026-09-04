import NextImage, { ImageProps as NextImageProps } from "next/image";

export interface HeritageImageProps extends Omit<NextImageProps, "alt"> {
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  rounded?: boolean;
}

const aspectClasses = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

export function HeritageImage({
  alt,
  aspectRatio = "16/9",
  rounded = true,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  src,
  ...props
}: HeritageImageProps) {
  const isLocalAsset = typeof src === "string" && src.startsWith("/");

  return (
    <div
      className={[
        "relative w-full overflow-hidden bg-arcade-navy",
        aspectClasses[aspectRatio],
        rounded ? "rounded-xl" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <NextImage
        alt={alt}
        src={src}
        fill
        sizes={sizes}
        unoptimized={isLocalAsset}
        className="object-cover"
        {...props}
      />
    </div>
  );
}
