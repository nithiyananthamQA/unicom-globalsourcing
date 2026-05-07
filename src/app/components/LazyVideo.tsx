interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Renders the video immediately on mount. The <link rel="preload"> hint
 * in index.html starts the byte-fetch in parallel with the JS bundle,
 * so by the time React mounts the buffer is already filling — no
 * scroll-trigger delay.
 */
export function LazyVideo({ src, poster, className = "", ariaLabel }: LazyVideoProps) {
  return (
    <div className={`relative ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={ariaLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
