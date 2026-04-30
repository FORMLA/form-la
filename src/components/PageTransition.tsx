/*
 * FORM Page Transition — Quiet Luxury
 * Cinematic full-page fade transition between routes.
 * Slow, smooth, intentional — luxury pacing.
 */
import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current) {
      prevLocation.current = location;
      setTransitioning(true);

      // Fade out, then swap content and fade in
      const fadeOutTimer = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo({ top: 0, behavior: "instant" });

        // Small delay before fade-in to ensure DOM update
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitioning(false);
          });
        });
      }, 400);

      return () => clearTimeout(fadeOutTimer);
    } else {
      setDisplayChildren(children);
    }
  }, [location, children]);

  return (
    <div
      className="transition-opacity ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      style={{
        opacity: transitioning ? 0 : 1,
        transitionDuration: transitioning ? "400ms" : "600ms",
      }}
    >
      {displayChildren}
    </div>
  );
}
