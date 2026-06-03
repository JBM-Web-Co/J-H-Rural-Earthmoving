type HeroStat = Readonly<{
    num: string;
    label: string;
}>;

type NavItem = Readonly<{
    label: string;
    href: string;
}>;

type Service = Readonly<{
    title: string;
    description: string;
    iconName: string;
}>;

export type BusinessData = Readonly<{
    name: string;
    tagline: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    hours: string;
    url: string;
    facebook?: string;
    latitude?: number;
    longitude?: number;
    heroStats: readonly HeroStat[];
    whyUsPoints: readonly string[];
    navItems: readonly NavItem[];
    services: readonly Service[];
    areas: readonly string[];
}>;

export const BUSINESS_DATA: BusinessData = {
    // ─── Business Identity ────────────────────────────────────────────────────
    name: 'Business Name',
    tagline: 'Your Tagline Here.',
    description: 'A short description of your business and what you do.',

    // ─── Contact ──────────────────────────────────────────────────────────────
    phone: '00 0000 0000',
    email: 'hello@yourbusiness.com',
    hours: 'Mon–Fri: 9am – 5pm',

    // ─── Address ──────────────────────────────────────────────────────────────
    address: '123 Street Name',
    city: 'City',
    state: 'State',
    postcode: '0000',
    country: 'AU', // ISO 3166-1 alpha-2 country code, e.g. 'AU', 'US', 'GB'

    // ─── Online Presence ──────────────────────────────────────────────────────
    url: 'https://www.yourbusiness.com',
    facebook: undefined, // Optional — e.g. 'https://www.facebook.com/yourbusiness'

    // ─── Location (optional — used for JSON-LD structured data) ──────────────
    latitude: undefined, // e.g. -33.8688
    longitude: undefined, // e.g. 151.2093

    // ─── Hero Stats Strip ─────────────────────────────────────────────────────
    heroStats: [
        { num: 'X+', label: 'Stat Label' },
        { num: 'X+', label: 'Stat Label' },
        { num: 'X+', label: 'Stat Label' },
        { num: 'X+', label: 'Stat Label' },
    ],

    // ─── About / Why Us bullet points ────────────────────────────────────────
    whyUsPoints: [
        'Why choose us — point one',
        'Why choose us — point two',
        'Why choose us — point three',
        'Why choose us — point four',
    ],

    // ─── Navigation ───────────────────────────────────────────────────────────
    navItems: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
    ],

    // ─── Services ─────────────────────────────────────────────────────────────
    // iconName must match a key in ICON_MAP in Services.tsx.
    // Available icons: wrench, settings, star, shield, zap, barChart,
    //                  users, globe, layers, messageSquare, briefcase, clock
    services: [
        {
            title: 'Service One',
            description:
                'A brief description of this service and what it involves.',
            iconName: 'briefcase',
        },
        {
            title: 'Service Two',
            description:
                'A brief description of this service and what it involves.',
            iconName: 'wrench',
        },
        {
            title: 'Service Three',
            description:
                'A brief description of this service and what it involves.',
            iconName: 'shield',
        },
        {
            title: 'Service Four',
            description:
                'A brief description of this service and what it involves.',
            iconName: 'star',
        },
    ],

    // ─── Service Areas ────────────────────────────────────────────────────────
    areas: ['Area One', 'Area Two', 'Area Three'],
} as const;
