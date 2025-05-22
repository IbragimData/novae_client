import Link from "next/link";
import s from "./HomeBlockBottom.module.scss"
export function HomeBlockBottom() {
    return (
        <div className={s.HomeBlockBottom}>
            <h2 className={s.HomeBlockBottom__title}>
                Каждый проект — это уникальная цифровая история, созданная в гармонии с вашими идеями. Готовы создать сайт, который станет вашим идеальным онлайн-пространством?
            </h2>
            <div className={s.HomeBlockBottom__content}>
                <div className={s.HomeBlockBottom__br}></div>
                <Link href="/contacts" className={s.HomeBlockBottom__button}>
                    УЗНАТЬ БОЛЬШЕ
                    <img className={s.HomeBlockBottom__img} width={19} height={19} src="/image/svg/icons/arrow.svg" alt="" />
                </Link>
            </div>
        </div>
    );
}