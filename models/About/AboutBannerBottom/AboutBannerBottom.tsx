import s from "./AboutBannerBottom.module.scss"
export function AboutBannerBottom() {
    return (
        <div className={s.AboutBannerBottom}>
            <div className={s.AboutBannerBottom__content}>
                <p className={s.AboutBannerBottom__text}>Для тех, кто ценит простоту и глубину минимализма, для тех, кто ищет в веб-дизайне не только эстетику, но и смысл</p>
                <p className={s.AboutBannerBottom__text}>Гармония между клиентом и его уникальным стилем в мире, где всё быстро меняется. Мы создаём сайты, которые остаются актуальными, отражают индивидуальность клиента и воплощают его идеи через современный дизайн и функциональность.</p>
            </div>
            <div className={s.AboutBannerBottom__banner}>
                <img className={s.AboutBannerBottom__image} src="/image/svg/aboutBannerBottom.svg" alt="" />
                <h2 className={s.AboutBannerBottom__title}>I.NOVAE </h2>
            </div>
        </div>
    );
}