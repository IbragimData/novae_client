"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeAdvantageData } from "@/data/home-data";
import s from "./HomeAdvantage.module.scss";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

export function HomeAdvantage() {
  const homeAdvantageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (homeAdvantageRef.current) {
      const title = homeAdvantageRef.current.querySelector(`.${s.HomeAdvantage__title}`);
      const items = homeAdvantageRef.current.querySelectorAll(`.${s.HomeAdvantage__item}`);

      // Анимация для заголовка
      if (title) {
        gsap.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.6, // Уменьшено для мобильных
          ease: "power2.out",
          scrollTrigger: {
            trigger: homeAdvantageRef.current,
            start: "top 85%", // Чуть ниже для мобильных
          },
        });
      }

      // Анимация для каждого элемента
      items.forEach((item, index) => {
        const isOdd = (index + 1) % 2 !== 0; // Нечётные: id 1, 3
        const animationClass = isOdd ? s.animateLeft : s.animateRight;

        // Запускаем CSS-анимацию при скролле
        ScrollTrigger.create({
          trigger: item,
          start: "top 85%", // Чуть ниже для мобильных
          onEnter: () => {
            item.classList.add(animationClass);
          },
        });
      });
    }
  }, []);

  return (
    <div className={s.HomeAdvantage} ref={homeAdvantageRef}>
      <h2 className={s.HomeAdvantage__title}>ПРЕИМУЩЕСТВО</h2>
      <div className={s.HomeAdvantage__info}>
        {homeAdvantageData.map((i) => (
          <div
            className={classNames(s.HomeAdvantage__item, {
              [s.HomeAdvantage__item_bottom]: i.id === 4,
            })}
            key={i.id}
          >
            <h3 className={s.HomeAdvantage__subtitle}>{i.title}</h3>
            <p className={s.HomeAdvantage__text}>{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}