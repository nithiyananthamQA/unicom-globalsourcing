import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Loads the <video> only after the element scrolls into view, and pauses it
 * when it scrolls back out — keeps initial Lighthouse LCP small and avoids
 * burning bandwidth on offscreen autoplay.
 */
export function LazyVideo({ src, poster, className = "", ariaLabel }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShouldLoad(true);
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { rootMargin: "200px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            shouldLoad ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
