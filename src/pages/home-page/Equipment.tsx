import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { BUSINESS_DATA } from '../../data';
import { useScrollReveal } from '../../scrollReveal';
import s from './Equipment.module.scss';

const MACHINE_ICONS: Record<string, string> = {
    dozers: '🚜',
    excavators: '⚙️',
    trucks: '🚛',
    attachments: '🔧',
};

export default function Equipment() {
    const { ref: headerRef, is_visible: header_visible } =
        useScrollReveal(0.2);
    const { ref: gridRef, is_visible: grid_visible } = useScrollReveal(0.05);
    const animated = useRef(false);

    useEffect(() => {
        if (!grid_visible || animated.current) return;
        animated.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;

        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll('[data-eq-card]');

        anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [40, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutExpo',
        });
    }, [grid_visible, gridRef]);

    return (
        <section id="fleet" className={s.fleet}>
            <div className={s.topStripe} aria-hidden="true" />

            <div className={s.container}>
                {/* Header */}
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`${s.header} ${header_visible ? s.headerVisible : ''}`}
                >
                    <p className={s.sectionLabel}>
                        <span className={s.labelDot} aria-hidden="true" />
                        The Machines
                    </p>
                    <h2 className={s.heading}>Our Fleet</h2>
                    <p className={s.sub}>
                        A modern, well-maintained fleet gives us the versatility
                        to take on any job. From broad-acre farm work to
                        large-scale civil projects. Click a machine category to
                        see what we operate.
                    </p>
                </div>

                {/* Equipment Grid */}
                <div
                    ref={gridRef as React.RefObject<HTMLDivElement>}
                    className={s.grid}
                >
                    {BUSINESS_DATA.equipment.map((cat) => (
                        <article
                            key={cat.id}
                            className={s.card}
                            data-eq-card="true"
                            style={{ opacity: 0 }}
                        >
                            {/* Image Placeholder */}
                            <div className={s.cardImage}>
                                <div
                                    className={s.imageDotGrid}
                                    aria-hidden="true"
                                />
                                <div className={s.imageLabel}>
                                    <span
                                        className={s.imageIcon}
                                        aria-hidden="true"
                                    >
                                        {MACHINE_ICONS[cat.id] ?? '🚧'}
                                    </span>
                                    <span>{cat.name} Photo</span>
                                </div>
                                <div className={s.imageOverlay} aria-hidden="true" />
                            </div>

                            {/* Card Content */}
                            <div className={s.cardBody}>
                                <div className={s.cardTop}>
                                    <div className={s.cardAccentLine} aria-hidden="true" />
                                    <h3 className={s.cardTitle}>{cat.name}</h3>
                                </div>
                                <p className={s.cardDesc}>{cat.description}</p>
                                <ul className={s.specList}>
                                    {cat.specs.map((spec) => (
                                        <li key={spec} className={s.specItem}>
                                            <span
                                                className={s.specDot}
                                                aria-hidden="true"
                                            />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={s.bottomCta}>
                    <p className={s.ctaText}>
                        Need something specific? Our fleet is constantly growing.
                        Ask us about availability.
                    </p>
                    <a
                        href="#contact"
                        className={s.ctaBtn}
                    >
                        Enquire About Our Fleet
                    </a>
                </div>
            </div>
        </section>
    );
}
