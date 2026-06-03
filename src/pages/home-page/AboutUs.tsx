import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../components/SectionHeader';
import { useScrollReveal } from '../../scrollReveal';
import { BUSINESS_DATA } from '../../data';
import s from './AboutUs.module.scss';

export default function AboutUs() {
    const { ref, is_visible } = useScrollReveal();
    const reduced_motion = useReducedMotion();

    return (
        <section id="about" className={s.aboutUs}>
            <div className={s.inner}>
                <SectionHeader
                    label="About Us"
                    title={`About ${BUSINESS_DATA.name}`}
                    subtitle={BUSINESS_DATA.description}
                />
                <motion.div
                    ref={ref}
                    className={s.content}
                    initial={reduced_motion ? false : { opacity: 0, y: 20 }}
                    animate={is_visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <ul className={s.points}>
                        {BUSINESS_DATA.whyUsPoints.map((point) => (
                            <li key={point} className={s.point}>
                                <CheckCircle2
                                    size={18}
                                    className={s.pointIcon}
                                    aria-hidden="true"
                                />
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
