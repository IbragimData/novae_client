import s from "./HomeBannerBottom.module.scss"
export function HomeBannerBottom() {
    return (
        <div className={s.HomeBannerBottom}>
            <img className={s.HomeBannerBottom__image} src="/image/svg/homeBannerBottom.svg" alt="" />
            <h2 className={s.HomeBannerBottom__title}>I.NOVAE </h2>
            <p className={s.HomeBannerBottom__text}>Мы подходим к каждому проекту с вниманием: продумываем структуру, дизайн и удобство. Делаем сайты, которые приносят результат и вызывают доверие.
                <br />
                Оставьте заявку — обсудим ваш проект и найдём лучшее решение.</p>
        </div>
    );
}