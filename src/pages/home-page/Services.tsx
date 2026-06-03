import { motion, useReducedMotion } from 'framer-motion';
import {
    Wrench,
    Settings,
    Star,
    Shield,
    Zap,
    BarChart,
    Users,
    Globe,
    Layers,
    MessageSquare,
    Briefcase,
    Clock,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { BUSINESS_DATA } from '../../data';
import { SectionHeader } from '../../components/SectionHeader';
import { useScrollReveal } from '../../scrollReveal';
import s from './Services.module.scss';

const ICON_MAP: Record<string, ReactNode> = {
    wrench: <Wrench size={24} />,
    settings: <Settings size={24} />,
    star: <Star size={24} />,
    shield: <Shield size={24} />,
    zap: <Zap size={24} />,
    barChart: <BarChart size={24} />,
    users: <Users size={24} />,
    globe: <Globe size={24} />,
    layers: <Layers size={24} />,
    messageSquare: <MessageSquare size={24} />,
    briefcase: <Briefcase size={24} />,
    clock: <Clock size={24} />,
};

export default function Services() {
    const { ref, is_visible } = useScrollReveal();
    const reduced_motion = useReducedMotion();

    return (
        <section id="services" className={s.services}>
            <div className={s.inner}>
                <SectionHeader
                    label="What We Do"
                    title="Our Services"
                    subtitle="A full range of professional services delivered with care and expertise."
                />

                <div ref={ref} className={s.grid}>
                    {BUSINESS_DATA.services.map((svc, i) => (
                        <motion.article
                            key={svc.title}
                            className={s.card}
                            initial={
                                reduced_motion ? false : { opacity: 0, y: 20 }
                            }
                            animate={is_visible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                        >
                            <div className={s.iconWrap}>
                                {ICON_MAP[svc.iconName] ?? <Wrench size={24} />}
                            </div>
                            <h3 className={s.cardTitle}>{svc.title}</h3>
                            <p className={s.cardDesc}>{svc.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
