import { AboutBanner, AboutBannerBottom, AboutBlockBottom, AboutMission, WhoAbout } from "@/models";

export default function Page() {
    return (
        <div>
            <WhoAbout />
            <AboutBanner />
            <AboutMission />
            <AboutBannerBottom />
            <AboutBlockBottom />
        </div>
    );
}