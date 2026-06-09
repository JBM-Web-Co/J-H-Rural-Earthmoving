import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { BUSINESS_DATA } from '../../data';
import { useScrollReveal } from '../../scrollReveal';
import s from './Equipment.module.scss';

type MediaCarouselProps = {
    media: readonly string[];
    name: string;
};

function MediaCarousel({ media, name }: MediaCarouselProps) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);
    const next = () => setIndex((i) => (i + 1) % media.length);

    const current = media[index];
    const isVideo = current.endsWith('.mp4');

    return (
        <div className={s.carousel}>
            {isVideo ? (
                <video
                    key={current}
                    className={s.carouselMedia}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={current} type="video/mp4" />
                </video>
            ) : (
                <img
                    src={current}
                    alt={`${name} - photo ${index + 1}`}
                    className={s.carouselMedia}
                    loading="lazy"
                />
            )}

            {media.length > 1 && (
                <>
                    <button
                        className={s.carouselPrev}
                        onClick={prev}
                        aria-label="Previous image"
                        type="button"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button
                        className={s.carouselNext}
                        onClick={next}
                        aria-label="Next image"
                        type="button"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                    <div className={s.carouselDots} aria-hidden="true">
                        {media.map((_, i) => (
                            <button
                                key={i}
                                className={`${s.dot} ${i === index ? s.dotActive : ''}`}
                                onClick={() => setIndex(i)}
                                type="button"
                                tabIndex={-1}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default function Equipment() {
    const { ref: headerRef, is_visible: header_visible } = useScrollReveal(0.2);
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
                    ref={headerRef}
                    className={`${s.header} ${header_visible ? s.headerVisible : ''}`}
                >
                    <p className={s.sectionLabel}>
                        <span className={s.labelDot} aria-hidden="true" />
                        The Machines
                    </p>
                    <h2 className={s.heading}>Machines and Services</h2>
                    <p className={s.sub}>
                        A modern, well-maintained fleet built for rural and
                        civil earthmoving. Browse each category to see what we
                        operate and what we can do for you.
                    </p>
                </div>

                {/* Equipment Grid */}
                <div ref={gridRef} className={s.grid}>
                    {BUSINESS_DATA.equipment.map((cat) => (
                        <article
                            key={cat.id}
                            className={s.card}
                            data-eq-card="true"
                            style={{ opacity: 0 }}
                        >
                            {/* Media Carousel */}
                            <div className={s.cardImage}>
                                <MediaCarousel
                                    media={cat.media}
                                    name={cat.name}
                                />
                            </div>

                            {/* Card Content */}
                            <div className={s.cardBody}>
                                <div className={s.cardTop}>
                                    <div
                                        className={s.cardAccentLine}
                                        aria-hidden="true"
                                    />
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
            </div>
        </section>
    );
}
