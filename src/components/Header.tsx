import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '../data';
import s from './Header.module.scss';

export function Header() {
    const [menu_open, set_menu_open] = useState(false);
    const [active_section, set_active_section] = useState('');
    const [scrolled, set_scrolled] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        set_active_section(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -60% 0px', threshold: 0 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handle_scroll = () => set_scrolled(window.scrollY > 40);
        window.addEventListener('scroll', handle_scroll, { passive: true });
        return () => window.removeEventListener('scroll', handle_scroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menu_open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menu_open]);

    const close_menu = () => set_menu_open(false);
    const phone_href = `tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`;

    return (
        <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
            <div className={s.inner}>
                <a
                    href="#"
                    className={s.logo}
                    aria-label={`${BUSINESS_DATA.name}`}
                    onClick={close_menu}
                >
                    <img
                        src="/images/logo-horizontal.png"
                        alt={BUSINESS_DATA.name}
                        className={s.logoImg}
                        width={180}
                        height={40}
                    />
                </a>

                <nav className={s.nav} aria-label="Main navigation">
                    {BUSINESS_DATA.navItems.map((item) => {
                        const section_id = item.href.replace('#', '');
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`${s.link} ${active_section === section_id ? s.linkActive : ''}`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                    <a href={phone_href} className={s.cta}>
                        <Phone size={15} strokeWidth={2.5} />
                        Call Now
                    </a>
                </nav>

                <button
                    className={s.mobileMenuBtn}
                    onClick={() => set_menu_open((v) => !v)}
                    aria-label={menu_open ? 'Close menu' : 'Open menu'}
                    aria-expanded={menu_open}
                >
                    {menu_open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div
                className={`${s.mobileMenu} ${menu_open ? s.mobileMenuOpen : ''}`}
                aria-hidden={!menu_open}
            >
                {BUSINESS_DATA.navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={s.mobileNavLink}
                        onClick={close_menu}
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href={phone_href}
                    className={s.mobileNavCta}
                    onClick={close_menu}
                >
                    <Phone size={18} />
                    Call {BUSINESS_DATA.phone}
                </a>
            </div>

            {menu_open && (
                <div
                    className={s.overlay}
                    onClick={close_menu}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
