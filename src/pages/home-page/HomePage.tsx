import type { MetaFunction } from 'react-router';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Equipment from './Equipment';
import Community from './Community';
import Contact from './Contact';
import { BUSINESS_DATA } from '../../data';

const REGION_AREAS = new Set([
    'New England Region',
    'Northern NSW',
    'North West NSW',
]);

const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: BUSINESS_DATA.name,
    description: BUSINESS_DATA.description,
    url: BUSINESS_DATA.url,
    telephone: BUSINESS_DATA.phone,
    email: BUSINESS_DATA.email,
    image: `${BUSINESS_DATA.url}/images/logo.png`,
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_DATA.address,
        addressLocality: BUSINESS_DATA.city,
        addressRegion: BUSINESS_DATA.state,
        postalCode: BUSINESS_DATA.postcode,
        addressCountry: BUSINESS_DATA.country,
    },
    ...(BUSINESS_DATA.latitude !== undefined &&
        BUSINESS_DATA.longitude !== undefined && {
            geo: {
                '@type': 'GeoCoordinates',
                latitude: BUSINESS_DATA.latitude,
                longitude: BUSINESS_DATA.longitude,
            },
        }),
    openingHours: ['Mo-Su 00:00-24:00'],
    ...(BUSINESS_DATA.areas.length > 0 && {
        areaServed: BUSINESS_DATA.areas.map((area) => ({
            '@type': REGION_AREAS.has(area) ? 'AdministrativeArea' : 'City',
            name: area,
        })),
    }),
    ...(BUSINESS_DATA.facebook && { sameAs: [BUSINESS_DATA.facebook] }),
    ...(BUSINESS_DATA.services.length > 0 && {
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services',
            itemListElement: BUSINESS_DATA.services.map((svc) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: svc.title,
                    description: svc.description,
                },
            })),
        },
    }),
};

export const meta: MetaFunction = () => [
    { title: BUSINESS_DATA.seoTitle },
    { name: 'description', content: BUSINESS_DATA.description },
    { property: 'og:title', content: BUSINESS_DATA.seoTitle },
    { property: 'og:description', content: BUSINESS_DATA.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: BUSINESS_DATA.url },
    { property: 'og:site_name', content: BUSINESS_DATA.name },
    { tagName: 'link', rel: 'canonical', href: BUSINESS_DATA.url },
    {
        property: 'og:image',
        content: `${BUSINESS_DATA.url}/images/hero-background.png`,
    },
    {
        property: 'og:image:alt',
        content:
            'J & H Rural Earthmoving operating earthworks in the New England region, NSW',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: BUSINESS_DATA.seoTitle },
    { name: 'twitter:description', content: BUSINESS_DATA.description },
    {
        name: 'twitter:image',
        content: `${BUSINESS_DATA.url}/images/hero-background.png`,
    },
    {
        name: 'twitter:image:alt',
        content:
            'J & H Rural Earthmoving operating earthworks in the New England region, NSW',
    },
    { 'script:ld+json': JSON_LD },
];

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Equipment />
            <Community />
            <Contact />
        </>
    );
}
