'use client';

import { useEffect, useState } from "react";
import s from "./ContactBlock.module.scss";
import { servicesData } from "@/data/services-data";

export function ContactBlock() {
    const [mounted, setMounted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        selectedServices: [] as { id: number; title: string }[]
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleToggleService = (id: number, title: string) => {
        setForm(prev => {
            const isAlreadySelected = prev.selectedServices.some(service => service.id === id);
            return {
                ...prev,
                selectedServices: isAlreadySelected
                    ? prev.selectedServices.filter(service => service.id !== id)
                    : [...prev.selectedServices, { id, title }]
            };
        });
    };

    const isServiceSelected = (id: number) => {
        return form.selectedServices.some(service => service.id === id);
    };

    if (!mounted) return null;

    return (
        <div className={s.ContactBlock}>
            <h1 className={s.ContactBlock__title}>СВЯЗАТЬСЯ С НАМИ</h1>
            <div className={s.ContactBlock__column}>
                <h2 className={s.ContactBlock__subtitle}>
                    Оставьте свои данные — поможем сделать сайт, который действительно работает
                </h2>

                <ul className={s.ContactBlock__list}>
                    {servicesData.map((i) => (
                        <li
                            key={i.id}
                            className={
                                isServiceSelected(i.id)
                                    ? s.ContactBlock__item_active
                                    : s.ContactBlock__item
                            }
                            onClick={() => handleToggleService(i.id, i.title)}
                        >
                            {i.title}
                        </li>
                    ))}
                </ul>

                <form className={s.ContactBlock__form}>
                    <div className={s.ContactBlock__block}>
                        <div className={s.ContactBlock__field}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" "
                                className={s.ContactBlock__input}
                                value={form.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name" className={s.ContactBlock__label}>Имя</label>
                        </div>
                        <div className={s.ContactBlock__field}>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder=" "
                                className={s.ContactBlock__input}
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <label htmlFor="phone" className={s.ContactBlock__label}>Номер телефона</label>
                        </div>
                    </div>

                    <div className={s.ContactBlock__field}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder=" "
                            className={s.ContactBlock__input}
                            value={form.email}
                            onChange={handleChange}/>
                        <label htmlFor="email" className={s.ContactBlock__label}>Mail</label>
                    </div>

                    <button type="submit" className={s.ContactBlock__bottom}>
                        ОТПРАВИТЬ
                        <img
                            className={s.ContactBlock__img}
                            width={19}
                            height={19}
                            src="/image/svg/icons/arrow.svg"
                            alt=""
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}