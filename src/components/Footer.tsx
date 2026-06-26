import { Phone, Mail, Clock, MapPin, Zap } from 'lucide-react';
import { BUSINESS_DATA } from '../data';
import s from './Footer.module.scss';

export function Footer() {
    const phone_href = `tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`;

    return (
        <footer className={s.footer}>
            {/* Emergency strip */}
            <div className={s.emergencyStrip}>
                <div className={s.stripInner}>
                    <div className={s.stripLeft}>
                        <Zap
                            size={16}
                            className={s.zapIcon}
                            aria-hidden="true"
                        />
                        <span>
                            24/7 Emergency Earthmoving.&nbsp; We mobilise fast
                            when it counts
                        </span>
                    </div>
                    <a href={phone_href} className={s.stripCta}>
                        <Phone size={14} />
                        {BUSINESS_DATA.phone}
                    </a>
                </div>
            </div>

            <div className={s.inner}>
                <div className={s.grid}>
                    {/* Brand */}
                    <div className={s.brand}>
                        <a
                            href="#"
                            aria-label={`${BUSINESS_DATA.name}`}
                            className={s.logoLink}
                        >
                            <img
                                src="/images/logo.png"
                                alt={BUSINESS_DATA.name}
                                className={s.logo}
                                width={120}
                                height={120}
                            />
                        </a>
                        <p className={s.tagline}>{BUSINESS_DATA.tagline}</p>
                        <p className={s.desc}>{BUSINESS_DATA.description}</p>
                        <p className={s.abn}>ABN {BUSINESS_DATA.abn}</p>
                        {BUSINESS_DATA.facebook && (
                            <div className={s.socials}>
                                <a
                                    href={BUSINESS_DATA.facebook}
                                    className={s.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Facebook"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className={s.colTitle}>Quick Links</div>
                        <div className={s.links}>
                            {BUSINESS_DATA.navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={s.link}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className={s.colTitle}>Contact</div>
                        <div className={s.contactItems}>
                            <a href={phone_href} className={s.contactItem}>
                                <Phone size={15} className={s.contactIcon} />
                                {BUSINESS_DATA.phone}
                            </a>
                            <a
                                href={`mailto:${BUSINESS_DATA.email}`}
                                className={s.contactItem}
                            >
                                <Mail size={15} className={s.contactIcon} />
                                {BUSINESS_DATA.email}
                            </a>
                            <div className={s.contactItem}>
                                <Clock size={15} className={s.contactIcon} />
                                <span>
                                    {BUSINESS_DATA.hours}, Emergency Response
                                </span>
                            </div>
                            <div className={s.contactItem}>
                                <MapPin size={15} className={s.contactIcon} />
                                <span>Ben Lomond &amp; Delungra, NSW</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <div className={s.colTitle}>Service Areas</div>
                        <div className={s.areaList}>
                            {BUSINESS_DATA.areas.slice(0, 6).map((area) => (
                                <span key={area} className={s.areaItem}>
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={s.bottom}>
                    <span>
                        &copy; {new Date().getFullYear()} {BUSINESS_DATA.name}.
                        All rights reserved.
                    </span>
                    <span className={s.attribution}>
                        Website by{' '}
                        <a
                            href="https://www.jbmweb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.attributionLink}
                        >
                            JBM Web Co
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
