import type { MetaFunction } from 'react-router';
import Hero from './Hero';
import Services from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { BUSINESS_DATA } from '../../data';

const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_DATA.name,
    description: BUSINESS_DATA.description,
    url: BUSINESS_DATA.url,
    telephone: BUSINESS_DATA.phone,
    email: BUSINESS_DATA.email,
    image: `${BUSINESS_DATA.url}/logo.png`,
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
    openingHours: BUSINESS_DATA.hours,
    ...(BUSINESS_DATA.areas.length > 0 && {
        areaServed: BUSINESS_DATA.areas.map((area) => ({
            '@type': 'City',
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
    { title: `${BUSINESS_DATA.name} | ${BUSINESS_DATA.tagline}` },
    { name: 'description', content: BUSINESS_DATA.description },
    {
        property: 'og:title',
        content: `${BUSINESS_DATA.name} | ${BUSINESS_DATA.tagline}`,
    },
    { property: 'og:description', content: BUSINESS_DATA.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: BUSINESS_DATA.url },
    { property: 'og:site_name', content: BUSINESS_DATA.name },
    { tagName: 'link', rel: 'canonical', href: BUSINESS_DATA.url },
    { property: 'og:image', content: `${BUSINESS_DATA.url}/hero.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
        property: 'og:image:alt',
        content: BUSINESS_DATA.name,
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
        name: 'twitter:title',
        content: `${BUSINESS_DATA.name} | ${BUSINESS_DATA.tagline}`,
    },
    { name: 'twitter:description', content: BUSINESS_DATA.description },
    { name: 'twitter:image', content: `${BUSINESS_DATA.url}/hero.png` },
    {
        name: 'twitter:image:alt',
        content: BUSINESS_DATA.name,
    },
    { 'script:ld+json': JSON_LD },
];

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <Contact />
        </>
    );
}
