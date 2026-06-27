import { useState } from 'react';
import { Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../../data';
import { Button } from '../../components/Button';
import { FormField } from '../../components/FormField';
import s from './Contact.module.scss';
import { track } from '@vercel/analytics';

type ContactFormData = Readonly<{
    name: string;
    email: string;
    phone: string;
    message: string;
}>;

type ContactFormErrors = Readonly<
    Partial<Record<keyof ContactFormData, string>>
>;

const EMPTY_FORM: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

function validateForm(data: ContactFormData): ContactFormErrors {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!data.name.trim()) errs.name = 'Name is required';
    if (!data.email.trim()) {
        errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errs.email = 'Please enter a valid email';
    }
    if (!data.phone.trim()) {
        errs.phone = 'Phone is required';
    } else if (!/^[\d\s()+-]{8,20}$/.test(data.phone)) {
        errs.phone = 'Please enter a valid phone number';
    }
    return errs;
}

export default function Contact() {
    const [form, set_form] = useState<ContactFormData>(EMPTY_FORM);
    const [errors, set_errors] = useState<ContactFormErrors>({});
    const [submitted, set_submitted] = useState(false);
    const [loading, set_loading] = useState(false);
    const [submit_error, set_submit_error] = useState<string | null>(null);

    const update = (field: keyof ContactFormData) => (value: string) => {
        set_form((prev) => ({ ...prev, [field]: value }));
        if (errors[field])
            set_errors((prev) => ({ ...prev, [field]: undefined }));
    };

    const handle_submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        track('Form Submitted', { source: 'homepage' });
        const errs = validateForm(form);
        if (Object.keys(errs).length > 0) {
            set_errors(errs);
            return;
        }

        set_loading(true);
        set_submit_error(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error();

            set_submitted(true);
            set_form(EMPTY_FORM);
        } catch {
            set_submit_error('Something went wrong. Please try again later.');
        } finally {
            set_loading(false);
        }
    };

    const phone_href = `tel:${BUSINESS_DATA.phone.replace(/\s/g, '')}`;

    return (
        <section id="contact" className={s.contact}>
            <div className={s.topLine} aria-hidden="true" />

            <div className={s.inner}>
                {/* Section header */}
                <div>
                    <p className={s.sectionLabel}>
                        <span className={s.labelDot} aria-hidden="true" />
                        Get in Touch
                    </p>
                    <h2 className={s.heading}>Contact Us</h2>
                    <p className={s.sub}>
                        Ready to get the job started? Give us a call or send a
                        message below.
                    </p>
                </div>

                {/* Emergency phone CTA */}
                <div className={s.phoneBlock}>
                    <a href={phone_href} className={s.phoneLink}>
                        <span className={s.phoneIconWrap}>
                            <Phone size={22} />
                        </span>
                        <div className={s.phoneText}>
                            <span className={s.phoneLabel}>
                                24/7. Call us directly
                            </span>
                            <span className={s.phoneNumber}>
                                {BUSINESS_DATA.phone}
                            </span>
                        </div>
                    </a>
                </div>

                <div className={s.grid}>
                    {/* Info panel */}
                    <div className={s.info}>
                        <h3 className={s.infoTitle}>{BUSINESS_DATA.name}</h3>
                        <p className={s.infoText}>
                            {BUSINESS_DATA.description}
                        </p>

                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <Phone size={18} />
                            </div>
                            <div>
                                <div className={s.itemLabel}>Phone</div>
                                <a href={phone_href} className={s.itemValue}>
                                    {BUSINESS_DATA.phone}
                                </a>
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <Mail size={18} />
                            </div>
                            <div>
                                <div className={s.itemLabel}>Email</div>
                                <a
                                    href={`mailto:${BUSINESS_DATA.email}`}
                                    className={s.itemValue}
                                >
                                    {BUSINESS_DATA.email}
                                </a>
                            </div>
                        </div>

                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <Clock size={18} />
                            </div>
                            <div>
                                <div className={s.itemLabel}>Availability</div>
                                <span className={s.itemValueStatic}>
                                    {BUSINESS_DATA.hours}, Emergency response
                                    available
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className={s.formWrap}>
                        {submitted ? (
                            <div className={s.successPanel}>
                                <CheckCircle2
                                    size={44}
                                    className={s.successIcon}
                                    aria-hidden="true"
                                />
                                <h3 className={s.successTitle}>
                                    Message Sent!
                                </h3>
                                <p className={s.successText}>
                                    Thanks for reaching out. We'll be in touch
                                    shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handle_submit} noValidate>
                                <FormField
                                    label="Full Name"
                                    name="name"
                                    value={form.name}
                                    error={errors.name}
                                    onChange={update('name')}
                                    placeholder="Your full name"
                                    autoComplete="name"
                                    required
                                />
                                <FormField
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    error={errors.phone}
                                    onChange={update('phone')}
                                    placeholder="04XX XXX XXX"
                                    autoComplete="tel"
                                    required
                                />
                                <FormField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    error={errors.email}
                                    onChange={update('email')}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    required
                                />
                                <FormField
                                    label="Message"
                                    name="message"
                                    type="textarea"
                                    value={form.message}
                                    onChange={update('message')}
                                    placeholder="Tell us about your project: location, scope, timeline..."
                                />
                                {submit_error && (
                                    <p className={s.submitError}>
                                        {submit_error}
                                    </p>
                                )}
                                <Button type="submit" disabled={loading}>
                                    {loading ? 'Sending…' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
