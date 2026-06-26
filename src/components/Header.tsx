import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '../data';
import s from './Header.module.scss';

export function Header() {
    const [menu_open, set_menu_open] = useState(false);
    const [active_section, set_active_section] = useState('');
    const [scrolled, set_scrolled] = useState(false);
    const menu_ref = useRef<HTMLDivElement>(null);

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

    const close_menu = useCallback(() => set_menu_open(false), []);

    useEffect(() => {
        if (!menu_open || !menu_ref.current) return;

        const menu_el = menu_ref.current;
        const focusable_els = Array.from(
            menu_el.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])'
            )
        );
        const first_el = focusable_els[0];
        const last_el = focusable_els[focusable_els.length - 1];

        first_el?.focus();

        const handle_keydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close_menu();
                return;
            }
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === first_el) {
                    e.preventDefault();
                    last_el?.focus();
                }
            } else {
                if (document.activeElement === last_el) {
                    e.preventDefault();
                    first_el?.focus();
                }
            }
        };

        document.addEventListener('keydown', handle_keydown);
        return () => document.removeEventListener('keydown', handle_keydown);
    }, [menu_open, close_menu]);

    const phone_href = `tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`;

    return (
        <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
            <div className={s.inner}>
                <a href="/" className={s.logo}>
                    <img
                        src="/images/logo-horizontal.png"
                        alt={BUSINESS_DATA.name}
                        className={s.logoImg}
                        width={180}
                        height={80}
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
                    aria-controls="mobile-menu"
                >
                    {menu_open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div
                id="mobile-menu"
                ref={menu_ref}
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
