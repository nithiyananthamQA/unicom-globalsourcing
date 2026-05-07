import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders a transparent placeholder until the element is near the viewport,
 * then swaps in the real src. Uses native `loading="lazy"` plus an
 * IntersectionObserver fallback for browsers that don't honour it strictly
 * for animated GIFs.
 */
export function LazyImage({ src, alt, className = "" }: LazyImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "300px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={
        visible
          ? src
          : "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
      }
      data-src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
