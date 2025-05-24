import Link from "next/link";
import s from "./AboutBlockBottom.module.scss"
export function AboutBlockBottom() {
    return (
        <div className={s.AboutBlockBottom}>
            <h2 className={s.AboutBlockBottom__title}>
            ВАШЕ ВИРТУАЛЬНОЕ ПРОСТРАНСТВО — НАША ПРОФЕССИЯ
            </h2>
            <div className={s.AboutBlockBottom__content}>
                <div className={s.AboutBlockBottom__br}></div>
                <Link href="/contacts" className={s.AboutBlockBottom__button}>
                    УЗНАТЬ БОЛЬШЕ
                    <img className={s.AboutBlockBottom__img} width={19} height={19} src="/image/svg/icons/arrow.svg" alt="" />
                </Link>
            </div>
        </div>
    );
}