import Image from "next/image";
import s from "./HomeBanner.module.scss"
import Link from "next/link";

export function HomeBanner() {
    return (
        <div className={s.HomeBanner}>
            <img className={s.HomeBanner__image} src="/image/svg/homeBanner.svg" alt="" />
            <Link href="/contacts" className={s.HomeBanner__button}>
                ЗАКАЗАТЬ САЙТ
                <img className={s.HomeBanner__img} width={19} height={19} src="/image/svg/icons/arrow.svg" alt="" />
            </Link>
        </div>
    );
}