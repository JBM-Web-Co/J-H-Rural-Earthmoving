import s from './Ticker.module.scss';

const ITEMS = [
    'EARTHMOVING',
    'EXCAVATION',
    'DAM CONSTRUCTION',
    'LAND CLEARING',
    'ROAD BUILDING',
    'SITE CLEARING',
    'CIVIL CONSTRUCTION',
    'EMERGENCY RESPONSE',
];

export default function Ticker() {
    const doubled = [...ITEMS, ...ITEMS];

    return (
        <div className={s.ticker} aria-hidden="true">
            <div className={s.track}>
                {doubled.map((item, i) => (
                    <span key={i} className={s.item}>
                        <span className={s.dot} />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
