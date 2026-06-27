import s from './Hero.module.scss';
import { BUSINESS_DATA } from '../../data';
import Ticker from '../../components/Ticker';

export default function Hero() {
    return (
        <section className={s.hero} aria-labelledby="hero-heading">
            <div className={s.bg} aria-hidden="true" />
            <div className={s.overlay} aria-hidden="true" />
            <div className={s.accentLine} aria-hidden="true" />

            <div className={s.content}>
                <p className={s.locationStamp}>
                    <span className={s.locationDot} aria-hidden="true" />
                    {BUSINESS_DATA.city}, {BUSINESS_DATA.state}
                </p>

                <h1 id="hero-heading" className={s.title}>
                    <span className={s.titleLine1}>J &amp; H</span>
                    <span className={s.titleLine2}>Rural</span>
                    <span className={s.titleLine3}>Earthmoving</span>
                </h1>

                <p className={s.tagline}>{BUSINESS_DATA.description}</p>

                <div className={s.ctas}>
                    <a
                        href={`tel:${BUSINESS_DATA.phone}`}
                        className={s.ctaPrimary}
                    >
                        Call {BUSINESS_DATA.phone}
                    </a>
                    <a href="#contact" className={s.ctaSecondary}>
                        Get a Quote
                    </a>
                </div>
            </div>

            <div className={s.scrollCue} aria-hidden="true">
                <span className={s.scrollText}>Scroll</span>
                <div className={s.scrollBar} />
            </div>

            <div className={s.tickerWrap}>
                <Ticker />
            </div>
        </section>
    );
}
