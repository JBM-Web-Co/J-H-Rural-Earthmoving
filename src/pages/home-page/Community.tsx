import { useScrollReveal } from '../../scrollReveal';
import s from './Community.module.scss';
import Sponsoring from './Sponsoring';

const PROJECT_PHOTOS = [
    { src: '/images/excavator/excav1.jpg', label: 'Excavation' },
    { src: '/images/dozer/dozer1.jpg', label: 'Dozer Work' },
    { src: '/images/road-works/road1.jpg', label: 'Road Build' },
    { src: '/images/moxy/moxy1.jpg', label: 'Dam Works' },
    { src: '/images/trucks/truck1.jpg', label: 'Transport' },
    { src: '/images/excavator/excav3.jpg', label: 'Site Prep' },
    { src: '/images/dozer/dozer3.jpg', label: 'Land Clearing' },
    { src: '/images/road-works/road3.jpg', label: 'Road Sealing' },
    { src: '/images/moxy/moxy3.jpg', label: 'Earthworks' },
    { src: '/images/trucks/truck3.jpg', label: 'Haulage' },
    { src: '/images/excavator/excav5.jpg', label: 'Bulk Dig' },
    { src: '/images/dozer/dozer5.jpg', label: 'Site Clearing' },
    { src: '/images/moxy/moxy5.jpg', label: 'Cut & Fill' },
] as const;

export default function Projects() {
    const { ref: headerRef, is_visible: headerVisible } = useScrollReveal(0.2);

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

            <div
                className={s.marqueeWrapper}
                role="region"
                aria-label="Recent projects gallery"
            >
                <ul className={s.track}>
                    {[...PROJECT_PHOTOS, ...PROJECT_PHOTOS].map((item, i) => {
                        const isDuplicate = i >= PROJECT_PHOTOS.length;
                        return (
                            <li
                                key={i}
                                className={s.item}
                                aria-hidden={isDuplicate || undefined}
                            >
                                <img
                                    src={item.src}
                                    alt={isDuplicate ? '' : item.label}
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
