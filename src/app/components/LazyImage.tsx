interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Loads the GIF/image as soon as the element mounts (page load),
 * instead of waiting for it to scroll into view. Browser cache + the
 * <link rel="preload"> hints in index.html mean the bytes are already
 * in flight by the time React renders, so paint is near-instant.
 */
export function LazyImage({ src, alt, className = "" }: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      className={className}
    />
  );
}
