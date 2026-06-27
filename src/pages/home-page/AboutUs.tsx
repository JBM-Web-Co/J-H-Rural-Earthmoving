import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../../data';
import { useScrollReveal } from '../../scroll-reveal';
import s from './AboutUs.module.scss';

export default function AboutUs() {
    const { ref: imageRef, is_visible: image_visible } = useScrollReveal(0.2);
    const { ref: contentRef, is_visible: content_visible } =
        useScrollReveal(0.15);
    const { ref: pointsRef, is_visible: points_visible } = useScrollReveal(0.1);
    const animated_content = useRef(false);
    const animated_points = useRef(false);

    useEffect(() => {
        if (!content_visible || animated_content.current) return;
        animated_content.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;

        if (!contentRef.current) return;
        animate(contentRef.current, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            ease: 'outExpo',
        });
    }, [content_visible, contentRef]);

    useEffect(() => {
        if (!points_visible || animated_points.current) return;
        animated_points.current = true;

        if (!pointsRef.current) return;
        const items = pointsRef.current.querySelectorAll('[data-point]');

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) {
            items.forEach((el) => {
                if (el instanceof HTMLElement) el.style.opacity = '1';
            });
            return;
        }

        animate(items, {
            opacity: [0, 1],
            translateX: [-20, 0],
            delay: stagger(70),
            duration: 500,
            ease: 'outExpo',
        });
    }, [points_visible, pointsRef]);

    return (
        <section id="about" className={s.about}>
            <div className={s.inner}>
                {/* -- Image Column -- */}
                <div
                    ref={imageRef}
                    className={`${s.imageCol} ${image_visible ? s.imageVisible : ''}`}
                >
                    <div className={s.imagePlaceholder}>
                        <img
                            src="/images/about-us.jpg"
                            alt="J & H Rural Earthmoving team on site"
                            className={s.imagePhoto}
                            width={945}
                            height={1211}
                            loading="lazy"
                        />
                    </div>
                    <div className={s.imageAccentTL} aria-hidden="true" />
                    <div className={s.imageAccentBR} aria-hidden="true" />

                    <div className={s.yearsCard}>
                        <span className={s.yearsNum}>
                            {BUSINESS_DATA.yearsOnLand}
                        </span>
                        <span className={s.yearsLabel}>Years on the Land</span>
                    </div>
                </div>

                {/* -- Text Column -- */}
                <div className={s.textCol}>
                    <div ref={contentRef} className={s.intro}>
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
                        {BUSINESS_DATA.aboutBody.map((para, i) => (
                            <p key={i} className={s.body}>
                                {para}
                            </p>
                        ))}
                    </div>

                    <div ref={pointsRef} className={s.points}>
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
