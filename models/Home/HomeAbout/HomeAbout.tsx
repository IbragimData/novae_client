'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeAboutData } from "@/data/home-data";
import s from "./HomeAbout.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function HomeAbout() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", // можно заменить на "restart none none none" для повторной анимации
        },
      });

      timeline.from(`.${s.HomeAbout}__subtitle`, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      timeline.from(
        `.${s.HomeAbout}__text`,
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={s.HomeAbout} ref={aboutRef}>
      <h2 className={s.HomeAbout__subtitle}>О СТУДИИ</h2>
      <div className={s.HomeAbout__info}>
        {homeAboutData.map((i) => (
          <p className={s.HomeAbout__text} key={i.id}>
            {i.title}
          </p>
        ))}
      </div>
    </div>
  );
}