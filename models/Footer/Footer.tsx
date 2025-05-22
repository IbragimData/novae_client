import { linkData } from "@/data/link-data";
import s from "./Footer.module.scss"
import Link from "next/link";
export function Footer() {
    return (
        <div className={s.Footer}>
            <div className={s.Footer__content}>
                <h1 className={s.Footer__logo}>I.NOVAE</h1>
                <ul className={s.Footer__list}>
                    {linkData.map((i) => (
                        <li key={i.id}>
                            <Link
                                className={s.Footer__link}
                                href={i.href}
                            >
                                {i.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.Footer__social}>
                <Link className={s.Footer__social_item} href={""}>
                    ТЕЛЕГРАМ
                </Link>
                <Link className={s.Footer__social_item} href={""}>
                    ИНСТАГРАМ
                </Link>
            </div>
        </div>
    );
}