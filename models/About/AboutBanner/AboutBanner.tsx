import s from "./AboutBanner.module.scss"
export function AboutBanner() {
    return (
        <div className={s.AboutBanner}>
            <img className={s.AboutBanner__image} src="/image/svg/aboutBanner.svg" alt="" />
            <h1 className={s.AboutBanner__title}>
                WEB-Студия
            </h1>

        </div>
    );
}