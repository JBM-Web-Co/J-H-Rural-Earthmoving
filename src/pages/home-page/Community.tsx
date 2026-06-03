import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Camera } from 'lucide-react';
import { useScrollReveal } from '../../scrollReveal';
import s from './Community.module.scss';

const GALLERY_ITEMS = [
    { label: 'Dam Construction', size: 'large' },
    { label: 'Land Clearing', size: 'small' },
    { label: 'Road Build', size: 'small' },
    { label: 'Excavation Work', size: 'medium' },
    { label: 'Dozer Work', size: 'medium' },
    { label: 'Site Clearing', size: 'small' },
] as const;

const SPONSOR_COUNT = 3;

export default function Projects() {
    const { ref: headerRef, is_visible: headerVisible } = useScrollReveal(0.2);
    const { ref: galleryRef, is_visible: galleryVisible } =
        useScrollReveal(0.05);
    const galleryAnimated = useRef(false);

    useEffect(() => {
        if (!galleryVisible || galleryAnimated.current) return;
        galleryAnimated.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;
        if (!galleryRef.current) return;

        const tiles = galleryRef.current.querySelectorAll('[data-tile]');
        anime({
            targets: tiles,
            opacity: [0, 1],
            scale: [0.96, 1],
            delay: anime.stagger(55),
            duration: 480,
            easing: 'easeOutExpo',
        });
    }, [galleryVisible, galleryRef]);

    return (
        <section id="projects" className={s.projects}>
            <div className={s.container}>
                {/* Header */}
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
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

                {/* Gallery */}
                <div
                    ref={galleryRef as React.RefObject<HTMLDivElement>}
                    className={s.gallery}
                >
                    {GALLERY_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`${s.tile} ${s[`tile__${item.size}`]}`}
                            data-tile="true"
                            style={{ opacity: 0 }}
                        >
                            <div className={s.tileDots} aria-hidden="true" />
                            <div className={s.tileContent}>
                                <Camera
                                    size={16}
                                    className={s.tileIcon}
                                    aria-hidden="true"
                                />
                                <span className={s.tileLabel}>{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proudly Sponsoring */}
                <div className={s.sponsoring}>
                    <div className={s.sponsoringHeader}>
                        <span className={s.labelDot} aria-hidden="true" />
                        <h3 className={s.sponsoringTitle}>PROUDLY SPONSORING</h3>
                    </div>
                    <div className={s.sponsorGrid}>
                        {Array.from({ length: SPONSOR_COUNT }).map((_, i) => (
                            <div key={i} className={s.sponsorCard} aria-label="Sponsor logo placeholder">
                                <div className={s.sponsorInner} aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
