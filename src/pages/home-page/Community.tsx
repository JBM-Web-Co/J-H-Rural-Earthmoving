import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../../scrollReveal';
import s from './Community.module.scss';

const GALLERY_ITEMS = [
    { label: 'Dam Construction' },
    { label: 'Land Clearing' },
    { label: 'Road Build' },
    { label: 'Excavation Work' },
    { label: 'Dozer Work' },
    { label: 'Site Clearing' },
] as const;

const SPONSOR_COUNT = 3;

export default function Projects() {
    const { ref: headerRef, is_visible: headerVisible } = useScrollReveal(0.2);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Mouse drag-to-scroll for desktop users without a trackpad
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;

        let startX = 0;
        let startScroll = 0;
        let dragging = false;

        const onDown = (e: MouseEvent) => {
            dragging = true;
            startX = e.clientX;
            startScroll = el.scrollLeft;
            el.style.cursor = 'grabbing';
        };

        const onMove = (e: MouseEvent) => {
            if (!dragging) return;
            el.scrollLeft = startScroll - (e.clientX - startX);
        };

        const onUp = () => {
            dragging = false;
            el.style.cursor = '';
        };

        el.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);

        return () => {
            el.removeEventListener('mousedown', onDown);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, []);

    return (
        <section id="projects" className={s.projects}>
            <div className={s.topStripe} aria-hidden="true" />
            <div className={s.container}>
                <div
                    ref={headerRef}
                    className={`${s.header} ${headerVisible ? s.headerVisible : ''}`}
                >
                    <p className={s.sectionLabel}>
                        <span className={s.labelDot} aria-hidden="true" />
                        Our Work
                    </p>
                    <h2 className={s.heading}>RECENT PROJECTS</h2>
                    <p className={s.sub}>
                        From dam construction to broad-acre clearing, a look at
                        recent jobs across the New England region.
                    </p>
                </div>
            </div>

            {/* Cover flow — full section width, mirrors BlossomCarousel host element */}
            <div
                ref={carouselRef}
                className={s.carousel}
                role="region"
                aria-label="Recent projects gallery"
            >
                <ul className={s.track}>
                    {GALLERY_ITEMS.map((item, i) => (
                        <li key={i} className={s.item}>
                            <div className={s.slide}>
                                <div className={s.card}>
                                    <div className={s.cardBg} aria-hidden="true" />
                                    <div className={s.cardCaption}>
                                        <span className={s.cardLabel}>{item.label}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={s.container}>
                <div className={s.sponsoring}>
                    <div className={s.sponsoringHeader}>
                        <span className={s.labelDot} aria-hidden="true" />
                        <h3 className={s.sponsoringTitle}>PROUDLY SPONSORING</h3>
                    </div>
                    <div className={s.sponsorGrid}>
                        {Array.from({ length: SPONSOR_COUNT }).map((_, i) => (
                            <div
                                key={i}
                                className={s.sponsorCard}
                                aria-label="Sponsor logo placeholder"
                            >
                                <div className={s.sponsorInner} aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
