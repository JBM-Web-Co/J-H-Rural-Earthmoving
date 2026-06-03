import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../../data';
import { useScrollReveal } from '../../scrollReveal';
import s from './AboutUs.module.scss';

export default function AboutUs() {
    const { ref: imageRef, is_visible: image_visible } = useScrollReveal(0.2);
    const { ref: contentRef, is_visible: content_visible } =
        useScrollReveal(0.15);
    const { ref: pointsRef, is_visible: points_visible } =
        useScrollReveal(0.1);
    const animated_content = useRef(false);
    const animated_points = useRef(false);

    useEffect(() => {
        if (!content_visible || animated_content.current) return;
        animated_content.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;

        anime({
            targets: contentRef.current,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutExpo',
        });
    }, [content_visible, contentRef]);

    useEffect(() => {
        if (!points_visible || animated_points.current) return;
        animated_points.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;

        if (!pointsRef.current) return;
        const items = pointsRef.current.querySelectorAll('[data-point]');

        anime({
            targets: items,
            opacity: [0, 1],
            translateX: [-20, 0],
            delay: anime.stagger(70),
            duration: 500,
            easing: 'easeOutExpo',
        });
    }, [points_visible, pointsRef]);

    return (
        <section id="about" className={s.about}>
            <div className={s.inner}>
                {/* ── Image Column ── */}
                <div
                    ref={imageRef as React.RefObject<HTMLDivElement>}
                    className={`${s.imageCol} ${image_visible ? s.imageVisible : ''}`}
                >
                    <div className={s.imagePlaceholder}>
                        <div className={s.placeholderGrid} aria-hidden="true" />
                        <div className={s.placeholderLabel}>
                            <span>FAMILY PHOTO</span>
                            <small>Team / job-site image</small>
                        </div>
                    </div>
                    <div className={s.imageAccentTL} aria-hidden="true" />
                    <div className={s.imageAccentBR} aria-hidden="true" />

                    <div className={s.yearsCard}>
                        <span className={s.yearsNum}>20+</span>
                        <span className={s.yearsLabel}>Years on the Land</span>
                    </div>
                </div>

                {/* ── Text Column ── */}
                <div className={s.textCol}>
                    <div
                        ref={contentRef as React.RefObject<HTMLDivElement>}
                        className={s.intro}
                    >
                        <p className={s.sectionLabel}>
                            <span className={s.labelDot} aria-hidden="true" />
                            About Us
                        </p>
                        <h2 className={s.heading}>
                            A Family Business
                            <br />
                            <span className={s.headingAccent}>
                                Built on the Land
                            </span>
                        </h2>
                        <p className={s.body}>
                            J &amp; H Rural Earthmoving was built from the
                            ground up. With years of experience
                            working on our own family farm, we developed a deep
                            understanding of what rural and agricultural
                            landowners actually need from an earthmoving
                            contractor.
                        </p>
                        <p className={s.body}>
                            That first-hand knowledge sets us apart. We don't
                            just move dirt. We understand drainage, soil
                            types, water flow, and farm productivity. We know
                            that getting the job done right the first time
                            keeps your operation moving forward without costly
                            rework.
                        </p>
                    </div>

                    <div
                        ref={pointsRef as React.RefObject<HTMLDivElement>}
                        className={s.points}
                    >
                        {BUSINESS_DATA.whyUsPoints.map((point) => (
                            <div
                                key={point}
                                className={s.point}
                                data-point="true"
                                style={{ opacity: 0 }}
                            >
                                <CheckCircle2
                                    size={17}
                                    className={s.pointIcon}
                                    aria-hidden="true"
                                />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
