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

type EquipmentCategory = Readonly<{
    id: string;
    name: string;
    description: string;
    specs: readonly string[];
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
    abn: string;
    url: string;
    facebook?: string;
    googleProfile?: string;
    latitude?: number;
    longitude?: number;
    heroStats: readonly HeroStat[];
    whyUsPoints: readonly string[];
    navItems: readonly NavItem[];
    services: readonly Service[];
    areas: readonly string[];
    equipment: readonly EquipmentCategory[];
}>;

export const BUSINESS_DATA: BusinessData = {
    name: 'J & H Rural Earthmoving',
    tagline: 'Rural and civil earthmoving. New England, NSW.',
    description:
        'Family-owned rural and civil earthworks specialists servicing Northern NSW and the New England region. From broad-acre farm earthworks to civil construction, we deliver results that keep your land productive.',

    phone: '0474 709 600',
    email: 'harrylockyer03@icloud.com',
    hours: '24/7',
    abn: '30 674 319 263',

    address: '99 Ryanda Creek Rd',
    city: 'Ben Lomond',
    state: 'NSW',
    postcode: '2365',
    country: 'AU',

    url: 'https://www.jhruralearthmoving.com.au',
    facebook: undefined,
    googleProfile: undefined,

    latitude: -30.025,
    longitude: 151.64,

    heroStats: [
        { num: '24/7', label: 'Emergency Response' },
        { num: '10+', label: 'Years Experience' },
        { num: '100+', label: 'Jobs Completed' },
        { num: 'NSW', label: 'New England Region' },
    ],

    whyUsPoints: [
        'Family-owned with deep agricultural roots. We understand your land.',
        'Competitive rates with no job too big or too small',
        'Qualified operators with a wide range of modern machinery',
        'Friendly, reliable, and efficient service on every job',
        'Broad-acre and civil experience across Northern NSW',
        '24/7 availability for emergency earthmoving response',
    ],

    navItems: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Fleet', href: '#fleet' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ],

    services: [
        {
            title: 'Rural Earthworks',
            description:
                'Broad-acre earthmoving for farm improvements. Land levelling, contour banks, drainage, and pasture development across all terrain types.',
            iconName: 'layers',
        },
        {
            title: 'Civil Construction',
            description:
                'Precision civil earthworks for subdivisions, commercial sites, and infrastructure projects. On budget, on time, and built to spec.',
            iconName: 'settings',
        },
        {
            title: 'Dam Construction & Repair',
            description:
                'New dam construction and existing dam repairs using compaction techniques that hold water and stand the test of time and weather.',
            iconName: 'shield',
        },
        {
            title: 'Land Clearing',
            description:
                'Efficient clearing of trees, scrub, and stumps for farming, development, and pasture establishment. Your land, ready to work.',
            iconName: 'wrench',
        },
        {
            title: 'Road Construction',
            description:
                'Farm road construction, grading, and maintenance. All-weather access roads built to handle heavy vehicles and demanding local conditions.',
            iconName: 'globe',
        },
        {
            title: 'Emergency Response',
            description:
                'Rapid 24/7 emergency earthmoving for flood damage, erosion events, and urgent infrastructure repair. We mobilise fast when it counts.',
            iconName: 'zap',
        },
    ],

    areas: [
        'New England Region',
        'Northern NSW',
        'North West NSW',
        'Ben Lomond',
        'Delungra',
        'Armidale',
        'Guyra',
        'Uralla',
        'Tamworth',
    ],

    equipment: [
        {
            id: 'dozers',
            name: 'Dozers',
            description:
                'Heavy-duty bulldozers for land clearing, bulk earthmoving, and precision grading across all terrain. Our dozer fleet handles everything from scrub clearing to large-scale cut-and-fill.',
            specs: ['Cat D6', 'Cat D8', 'Komatsu D65', 'Various attachments'],
        },
        {
            id: 'excavators',
            name: 'Excavators',
            description:
                'Modern excavator fleet for trenching, dam construction, civil earthworks, and detailed precision work. From mini machines in tight spots to 30-tonne units for major projects.',
            specs: [
                '20T Excavator',
                '30T Excavator',
                'Mini Excavator',
                'Long-reach arm available',
            ],
        },
        {
            id: 'trucks',
            name: 'Trucks & Scrapers',
            description:
                'High-capacity haulage and material transport for road building, site filling, and large-scale logistics. We move material fast and keep projects on schedule.',
            specs: ['12t Tip Truck', 'Side Tipper', 'Water Cart', 'Low Loader'],
        },
        {
            id: 'attachments',
            name: 'Attachments',
            description:
                'A comprehensive range of specialised attachments ensures the right tool for every condition. From rocky ground to precision finish grading.',
            specs: [
                'Rock Buckets',
                'Rippers',
                'Compaction Plates',
                'Tilt Buckets',
                'Mulchers',
            ],
        },
    ],
} as const;
