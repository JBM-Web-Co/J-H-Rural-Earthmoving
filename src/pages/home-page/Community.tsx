import { useScrollReveal } from '../../scroll-reveal';
import { BUSINESS_DATA } from '../../data';
import s from './Community.module.scss';
import Sponsoring from './Sponsoring';

export default function Community() {
    const { ref: headerRef, is_visible: header_visible } = useScrollReveal(0.2);

    return (
        <section id="projects" className={s.projects}>
            <div className={s.topStripe} aria-hidden="true" />
            <div className={s.container}>
                <div
                    ref={headerRef}
                    className={`${s.header} ${header_visible ? s.headerVisible : ''}`}
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

            <div
                className={s.marqueeWrapper}
                role="region"
                aria-label="Recent projects gallery"
            >
                <ul className={s.track}>
                    {[
                        ...BUSINESS_DATA.projectPhotos,
                        ...BUSINESS_DATA.projectPhotos,
                    ].map((item, i) => {
                        const is_duplicate =
                            i >= BUSINESS_DATA.projectPhotos.length;
                        return (
                            <li
                                key={i}
                                className={s.item}
                                aria-hidden={is_duplicate || undefined}
                            >
                                <img
                                    src={item.src}
                                    alt={is_duplicate ? '' : item.label}
                                    loading="lazy"
                                />
                                <div className={s.caption} aria-hidden="true">
                                    <span className={s.captionLabel}>
                                        {item.label}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <Sponsoring />
        </section>
    );
}
