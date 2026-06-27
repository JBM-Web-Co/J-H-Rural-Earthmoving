type ProjectPhoto = Readonly<{
    src: string;
    label: string;
}>;

type NavItem = Readonly<{
    label: string;
    href: string;
}>;

type Service = Readonly<{
    title: string;
    description: string;
}>;

type EquipmentCategory = Readonly<{
    id: string;
    name: string;
    description: string;
    specs: readonly string[];
    media: readonly string[];
}>;

type Sponsor = Readonly<{
    name: string;
    logo?: string;
}>;

export type BusinessData = Readonly<{
    name: string;
    seoTitle: string;
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
    latitude?: number;
    longitude?: number;
    yearsOnLand: string;
    aboutBody: readonly string[];
    whyUsPoints: readonly string[];
    navItems: readonly NavItem[];
    services: readonly Service[];
    areas: readonly string[];
    equipment: readonly EquipmentCategory[];
    projectPhotos: readonly ProjectPhoto[];
    sponsors: readonly Sponsor[];
}>;

export const BUSINESS_DATA: BusinessData = {
    name: 'J & H Rural Earthmoving',
    seoTitle: 'J & H Rural Earthmoving | Rural Earthmoving, New England NSW',
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

    url: 'https://j-hruralearthmoving.com',
    facebook: 'https://www.facebook.com/profile.php?id=61589910532824',

    latitude: -30.025,
    longitude: 151.64,

    yearsOnLand: '20+',

    aboutBody: [
        'J & H Rural Earthmoving was built from the ground up. With years of experience working on our own family farm, we developed a deep understanding of what rural and agricultural landowners actually need from an earthmoving contractor.',
        "That first-hand knowledge sets us apart. We don't just move dirt. We understand drainage, soil types, water flow, and farm productivity. We know that getting the job done right the first time keeps your operation moving forward without costly rework.",
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
        { label: 'Machines', href: '#fleet' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ],

    services: [
        {
            title: 'Rural Earthworks',
            description:
                'Broad-acre earthmoving for farm improvements. Land levelling, contour banks, drainage, and pasture development across all terrain types.',
        },
        {
            title: 'Civil Construction',
            description:
                'Precision civil earthworks for subdivisions, commercial sites, and infrastructure projects. On budget, on time, and built to spec.',
        },
        {
            title: 'Dam Construction & Repair',
            description:
                'New dam construction and existing dam repairs using compaction techniques that hold water and stand the test of time and weather.',
        },
        {
            title: 'Land Clearing',
            description:
                'Efficient clearing of trees, scrub, and stumps for farming, development, and pasture establishment. Your land, ready to work.',
        },
        {
            title: 'Road Construction',
            description:
                'Farm road construction, grading, and maintenance. All-weather access roads built to handle heavy vehicles and demanding local conditions.',
        },
        {
            title: 'Emergency Response',
            description:
                'Rapid 24/7 emergency earthmoving for flood damage, erosion events, and urgent infrastructure repair. We mobilise fast when it counts.',
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
            id: 'dozer',
            name: 'Dozer',
            description:
                'Our D6 dozer fleet is built for serious ground work. Equipped with 2D/3D Trimble GPS for precision grade control, we handle everything from broad-acre clearing to dam construction and contour banking.',
            specs: [
                'Stick racking',
                'Clearing',
                'Pipe laying - poly',
                'Building dams',
                'Contour banks',
                'D6 with 2D/3D Trimble GPS',
                'Firebreaks',
                'Fence lines',
                'Gravel pit pushing',
                'Side cuts',
                'Scrub chain',
            ],
            media: [
                '/images/dozer/dozer1.jpg',
                '/images/dozer/dozer2.jpg',
                '/images/dozer/dozer3.jpg',
                '/images/dozer/dozer4.jpg',
                '/images/dozer/dozer5.jpg',
            ],
        },
        {
            id: 'excavator',
            name: 'Excavator',
            description:
                'Modern excavators tackling precision earthworks, dam construction, and specialist attachments. From desilting waterways to forestry mulching and horse arena construction.',
            specs: [
                'Desilting dams',
                'Building dams',
                'Drains',
                'Racking rocks',
                'Tree shearing',
                'Forestry mulcher',
                'Horse arenas',
                'Timber work',
            ],
            media: [
                '/images/excavator/excav1.jpg',
                '/images/excavator/excav1.mp4',
                '/images/excavator/excav2.jpg',
                '/images/excavator/excav3.jpg',
                '/images/excavator/excav4.jpg',
                '/images/excavator/excav5.jpg',
                '/images/excavator/excav6.jpg',
            ],
        },
        {
            id: 'trucks',
            name: 'Trucks',
            description:
                'Versatile truck fleet covering haulage, hay carting, and on-site water management.',
            specs: [
                'Tippers',
                'Quad float',
                'Hay carting',
                '10,000L water cart with spray bar',
            ],
            media: [
                '/images/trucks/truck1.jpg',
                '/images/trucks/truck2.jpg',
                '/images/trucks/truck3.jpg',
            ],
        },
        {
            id: 'moxy',
            name: 'Moxy',
            description:
                'Our articulated dump truck moves large volumes of dirt, rock, and gravel across challenging and uneven terrain where conventional trucks cannot go. Ideal for dam construction and bulk earthmoving projects.',
            specs: [
                'Bulk dirt haulage',
                'Rock and gravel transport',
                'Rough terrain earthmoving',
                'Dam construction support',
            ],
            media: [
                '/images/moxy/moxy1.jpg',
                '/images/moxy/moxy2.jpg',
                '/images/moxy/moxy3.jpg',
                '/images/moxy/moxy4.jpg',
                '/images/moxy/moxy5.jpg',
            ],
        },
        {
            id: 'roadworks',
            name: 'Roadworks',
            description:
                'We build solid, all-weather access roads, shed pads, and house pads engineered for the demands of rural properties and construction sites. Quality base preparation and compaction on every job.',
            specs: ['Roads', 'Shed pads', 'House pads'],
            media: [
                '/images/road-works/road1.jpg',
                '/images/road-works/road1.mp4',
                '/images/road-works/road2.jpg',
                '/images/road-works/road3.jpg',
                '/images/road-works/road4.jpg',
            ],
        },
        {
            id: 'water-systems',
            name: 'Water Systems',
            description:
                'Complete rural water infrastructure from poly pipe networks to gravel pads for tanks and troughs. We design and install reliable water delivery systems built to last in tough conditions.',
            specs: [
                'Poly pipe laying',
                'Pipe spinners',
                'Trough pads',
                'Tank pads',
            ],
            media: [
                '/images/water-systems/water1.jpg',
                '/images/water-systems/water1.mp4',
            ],
        },
    ],

    projectPhotos: [
        { src: '/images/excavator/excav1.jpg', label: 'Excavation' },
        { src: '/images/dozer/dozer1.jpg', label: 'Dozer Work' },
        { src: '/images/road-works/road1.jpg', label: 'Road Build' },
        { src: '/images/moxy/moxy1.jpg', label: 'Dam Works' },
        { src: '/images/trucks/truck1.jpg', label: 'Transport' },
        { src: '/images/excavator/excav3.jpg', label: 'Site Prep' },
        { src: '/images/dozer/dozer3.jpg', label: 'Land Clearing' },
        { src: '/images/road-works/road3.jpg', label: 'Road Sealing' },
        { src: '/images/moxy/moxy3.jpg', label: 'Earthworks' },
        { src: '/images/trucks/truck3.jpg', label: 'Haulage' },
        { src: '/images/excavator/excav5.jpg', label: 'Bulk Dig' },
        { src: '/images/dozer/dozer5.jpg', label: 'Site Clearing' },
        { src: '/images/moxy/moxy5.jpg', label: 'Cut & Fill' },
    ],

    sponsors: [
        {
            name: 'Guyra Junior Rugby League',
            logo: '/images/sponsors/guyra_spuds_junior.png',
        },
        {
            name: 'Guyra Senior Rugby League',
            logo: '/images/sponsors/guyra_spuds_senior.jpg',
        },
        {
            name: "Dolly's Dream Awareness",
            logo: '/images/sponsors/dollys_dream.jpg',
        },
        {
            name: 'Top of the Range',
            logo: '/images/sponsors/top_of_the_range.png',
        },
        {
            name: 'Guyra Show Society',
            logo: '/images/sponsors/guyra_show_society.jpg',
        },
        { name: 'Guyra Show Shearing' },
        { name: 'Guyra Cattle Judging' },
        { name: 'Guyra Rodeo' },
    ],
} as const;
