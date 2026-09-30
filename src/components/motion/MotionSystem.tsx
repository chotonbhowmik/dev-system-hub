import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionSystem() {
  const location = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = progressRef.current;

    if (reduceMotion) {
      gsap.set(".animate-fade-in-up", { opacity: 1, y: 0, animation: "none" });
      if (progress) gsap.set(progress, { scaleX: 0 });
      return;
    }

    const context = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>("main .animate-fade-in-up");
      revealItems.forEach((item) => {
        gsap.set(item, { opacity: 0, y: 24, animation: "none" });
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.fromTo(
        "main",
        { opacity: 0.72 },
        { opacity: 1, duration: 0.45, ease: "power2.out" },
      );

      if (progress) {
        gsap.set(progress, { transformOrigin: "left center", scaleX: 0 });
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "max",
            scrub: 0.15,
          },
        });
      }
    });

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, [location.pathname]);

  return (
    <div
      ref={progressRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-primary motion-reduce:hidden"
      aria-hidden="true"
    />
  );
}