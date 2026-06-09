import s from './Sponsoring.module.scss';

const SPONSOR_COUNT = 3;

export default function Sponsoring() {
    return (
        <div className={s.sponsoring}>
            <div className={s.container}>
                <div className={s.header}>
                    <span className={s.dot} aria-hidden="true" />
                    <h3 className={s.title}>PROUDLY SPONSORING</h3>
                </div>
                <div className={s.grid}>
                    {Array.from({ length: SPONSOR_COUNT }).map((_, i) => (
                        <div
                            key={i}
                            className={s.card}
                            aria-label="Sponsor logo"
                        >
                            <div className={s.cardInner} aria-hidden="true" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
