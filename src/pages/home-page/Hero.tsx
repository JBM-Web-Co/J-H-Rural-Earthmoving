import { motion, useReducedMotion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../../data';
import s from './Hero.module.scss';

export default function Hero() {
    const reduced_motion = useReducedMotion();
    const get_anim = (delay: number) =>
        reduced_motion
            ? {}
            : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.55, delay },
              };

    const phone_href = `tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`;

    return (
        <section className={s.hero}>
            <div className={s.inner}>
                <motion.p className={s.eyebrow} {...get_anim(0)}>
                    {BUSINESS_DATA.city}
                </motion.p>

                <motion.h1 className={s.headline} {...get_anim(0.1)}>
                    {BUSINESS_DATA.tagline}
                </motion.h1>

                <motion.p className={s.sub} {...get_anim(0.2)}>
                    {BUSINESS_DATA.description}
                </motion.p>

                <motion.div className={s.ctas} {...get_anim(0.3)}>
                    <a href={phone_href} className={s.ctaPrimary}>
                        <Phone size={18} />
                        Call {BUSINESS_DATA.phone}
                    </a>
                    <a href="#contact" className={s.ctaSecondary}>
                        Get a Free Quote
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
