import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { BUSINESS_DATA } from '../../data';
import { useScrollReveal } from '../../scrollReveal';
import s from './Services.module.scss';

export default function Services() {
    const { ref: headerRef, is_visible: headerVisible } = useScrollReveal(0.15);
    const { ref: listRef, is_visible: listVisible } = useScrollReveal(0.05);
    const animated = useRef(false);

    useEffect(() => {
        if (!listVisible || animated.current) return;
        animated.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;
        if (!listRef.current) return;

        const rows = listRef.current.querySelectorAll('[data-row]');
        anime({
            targets: rows,
            opacity: [0, 1],
            translateX: [-24, 0],
            delay: anime.stagger(60),
            duration: 500,
            easing: 'easeOutExpo',
        });
    }, [listVisible, listRef]);

    return (
        <section id="services" className={s.services}>
            <div className={s.container}>
                {/* Header */}
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`${s.header} ${headerVisible ? s.headerVisible : ''}`}
                >
                    <div className={s.headerLeft}>
                        <p className={s.sectionLabel}>
                            <span className={s.labelDot} aria-hidden="true" />
                            What We Do
                        </p>
                        <h2 className={s.heading}>SERVICES</h2>
                    </div>
                    <p className={s.headerSub}>
                        Rural and civil earthmoving across the New England
                        region. Operated by qualified locals who know the land
                        and the conditions.
                    </p>
                </div>

                {/* Service list */}
                <div
                    ref={listRef as React.RefObject<HTMLDivElement>}
                    className={s.list}
                >
                    {BUSINESS_DATA.services.map((svc, i) => {
                        const isEmergency = svc.iconName === 'zap';
                        return (
                            <div
                                key={svc.title}
                                className={`${s.row} ${isEmergency ? s.rowEmergency : ''}`}
                                data-row="true"
                                style={{ opacity: 0 }}
                            >
                                <span className={s.rowNum} aria-hidden="true">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className={s.rowBody}>
                                    <h3 className={s.rowTitle}>{svc.title}</h3>
                                    <p className={s.rowDesc}>{svc.description}</p>
                                    {isEmergency && (
                                        <a
                                            href={`tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`}
                                            className={s.callLink}
                                        >
                                            Call now: {BUSINESS_DATA.phone}
                                        </a>
                                    )}
                                </div>
                                {isEmergency && (
                                    <a
                                        href={`tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`}
                                        className={s.callBtn}
                                        aria-label={`Call 24/7: ${BUSINESS_DATA.phone}`}
                                    >
                                        CALL 24/7
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Areas strip */}
                <div className={s.areasStrip}>
                    <span className={s.areasLabel}>OPERATING ACROSS</span>
                    <div className={s.areasTags}>
                        {BUSINESS_DATA.areas.map((area) => (
                            <span key={area} className={s.areaTag}>
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
