import { BUSINESS_DATA } from '../../data';
import s from './Sponsoring.module.scss';

const logo_sponsors = BUSINESS_DATA.sponsors.filter((sp) => sp.logo);
const text_sponsors = BUSINESS_DATA.sponsors.filter((sp) => !sp.logo);

export default function Sponsoring() {
    return (
        <div className={s.sponsoring}>
            <div className={s.container}>
                <div className={s.header}>
                    <span className={s.dot} aria-hidden="true" />
                    <h3 className={s.title}>PROUDLY SPONSORING</h3>
                </div>

                <div className={s.logoGrid}>
                    {logo_sponsors.map((sp) => (
                        <div
                            key={sp.name}
                            className={s.logoCard}
                            aria-label={sp.name}
                        >
                            <img
                                src={sp.logo}
                                alt={sp.name}
                                className={s.logo}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {text_sponsors.length > 0 && (
                    <ul className={s.textList} aria-label="Additional sponsors">
                        {text_sponsors.map((sp) => (
                            <li key={sp.name} className={s.textItem}>
                                {sp.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
