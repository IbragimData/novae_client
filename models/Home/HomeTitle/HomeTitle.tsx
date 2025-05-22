import s from "./HomeTitle.module.scss"
export function HomeTitle() {
    return (
        <div className={s.HomePage}>
            <img className={s.HomePage__image} src="/image/svg/starHomePage.svg" alt="" />
            <h1 className={s.HomePage__title}>I.NOVAE STUDIO</h1>
            <div className={s.HomePage__content}>
                <p className={s.HomePage__text}>I.NOVAE STUDIO — веб-студия дизайна, разработки и продвижения сайтов.s</p>
                <div className={s.HomePage__box}>
                    <p className={s.HomePage__text_end}>Исследуем рынок, отрисовываем дизайн и создаем сайты с конверсией до 40%</p>
                </div>
            </div>
        </div>
    );
}