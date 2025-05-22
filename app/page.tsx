"use client"
import { HomeTitle } from "@/models/Home/HomeTitle/HomeTitle";
import s from "./page.module.css";
import { HomeAbout, HomeAdvantage, HomeBanner, HomeBannerBottom, HomeBlockBottom, HomeTitleList } from "@/models";
import { useIntersectionObserver } from "@/hooks";

export default function Home() {
  useIntersectionObserver()
  return (
    <div>
      <HomeTitle />
      <HomeTitleList />
      <HomeBanner />
      <HomeAbout />
      <HomeBannerBottom />
      <HomeAdvantage />
      <HomeBlockBottom />
    </div>
  );
}
