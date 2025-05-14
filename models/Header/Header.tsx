'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import s from './Header.module.scss';
import { linkData } from '@/data/link-data';
import classNames from 'classnames';

export const Header = () => {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className={s.header}>
            <Link className={s.header__logo} href="/">
                <span>I.NOVAE</span>
            </Link>


            <div className={classNames(s.header__nav, {
                [s.header__nav_active]: navOpen,
            })}>
                <ul className={s.header__nav_list}>
                    {linkData.map((i) => (
                        <li key={i.id}>
                            <Link
                                className={classNames(s.header__nav_link, {
                                    [s.header__nav_link_active]: pathname === i.href,
                                })}
                                href={i.href}
                            >
                                {i.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={s.header__nav_social}>
                    <Link className={s.header__nav_social_item} href={""}>
                        ТЕЛЕГРАМ
                    </Link>
                    <Link className={s.header__nav_social_item} href={""}>
                        ИНСТАГРАМ
                    </Link>
                </div>
            </div>

            <button
                className={classNames(s.header__burger, {
                    [s.header__burger_active]: navOpen,
                })}
                onClick={toggleNav}
            >
                <span className={s.header__burger_stripes}></span>
                <span className={s.header__burger_stripes}></span>
            </button>

            <ul className={s.header__list}>
                {linkData.map((i) => (
                    <li key={i.id}>
                        <Link
                            className={classNames(s.header__link, {
                                [s.header__link_active]: pathname === i.href,
                            })}
                            href={i.href}
                        >
                            {i.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
};