import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { MapPin, Truck } from 'lucide-react';
import { BUSINESS_DATA } from '../../data';
import { useScrollReveal } from '../../scrollReveal';
import s from './Areas.module.scss';

const REGIONS = [
    {
        name: 'New England Region',
        subText:
            'Armidale · Guyra · Uralla · Ben Lomond · Ebor and surrounds',
        primary: true,
    },
    {
        name: 'Northern NSW',
        subText: 'Tamworth · Manilla · Narrabri · Liverpool Plains corridor',
        primary: false,
    },
    {
        name: 'North West NSW',
        subText: 'Moree · Inverell · Warialda and surrounding districts',
        primary: false,
    },
] as const;

export default function Areas() {
    const { ref: headerRef, is_visible: header_visible } =
        useScrollReveal(0.2);
    const { ref: regionsRef, is_visible: regions_visible } =
        useScrollReveal(0.1);
    const animated = useRef(false);

    useEffect(() => {
        if (!regions_visible || animated.current) return;
        animated.current = true;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;

        if (!regionsRef.current) return;
        const cards = regionsRef.current.querySelectorAll('[data-region]');

        anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(120),
            duration: 600,
            easing: 'easeOutExpo',
        });
    }, [regions_visible, regionsRef]);

    return (
        <section id="areas" className={s.areas}>
            <div className={s.container}>
                {/* Header */}
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`${s.header} ${header_visible ? s.headerVisible : ''}`}
                >
                    <p className={s.sectionLabel}>
                        <span className={s.labelDot} aria-hidden="true" />
                        Where We Work
                    </p>
                    <div className={s.headerRow}>
                        <h2 className={s.heading}>Service Areas</h2>
                        <p className={s.sub}>
                            Based in the New England region with depots in Ben
                            Lomond and Delungra — we service Northern NSW and
                            are willing to travel for the right job.
                        </p>
                    </div>
                </div>

                {/* Region Cards */}
                <div
                    ref={regionsRef as React.RefObject<HTMLDivElement>}
                    className={s.regions}
                >
                    {REGIONS.map((region) => (
                        <div
                            key={region.name}
                            className={`${s.region} ${region.primary ? s.regionPrimary : ''}`}
                            data-region="true"
                            style={{ opacity: 0 }}
                        >
                            <div className={s.regionIcon}>
                                <MapPin size={20} strokeWidth={2} />
                            </div>
                            <div className={s.regionBody}>
                                <h3 className={s.regionName}>{region.name}</h3>
                                <p className={s.regionSub}>{region.subText}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Depot Callout */}
                <div className={s.depotCallout}>
                    <div className={s.depotIcon}>
                        <Truck size={20} strokeWidth={2} />
                    </div>
                    <div>
                        <strong className={s.depotTitle}>
                            Our Depots
                        </strong>
                        <p className={s.depotText}>
                            Ben Lomond &nbsp;•&nbsp; Delungra &nbsp;—&nbsp;
                            Northern NSW
                        </p>
                    </div>
                </div>

                {/* Tag Cloud */}
                <div className={s.tagCloud}>
                    {BUSINESS_DATA.areas.map((area) => (
                        <span key={area} className={s.tag}>
                            <MapPin size={11} />
                            {area}
                        </span>
                    ))}
                </div>

                {/* Not on the list CTA */}
                <div className={s.extendCta}>
                    <p>
                        Not sure if we cover your area?{' '}
                        <a href="#contact" className={s.extendLink}>
                            Get in touch — we're happy to travel for larger
                            projects.
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
