import { homeTitleListData } from "@/data/home-data";
import s from "./HomeTitleList.module.scss"

export function HomeTitleList() {
    return (
        <ul className={s.HomeTitleList}>
            {
                homeTitleListData.map((i) => (
                    <li key={i.id} className={s.HomeTitleList__item}>
                        {
                            i.title
                        }
                    </li>
                ))
            }
        </ul>
    );
}