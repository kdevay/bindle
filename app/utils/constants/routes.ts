const navLinks = [
  { href: '/', label: 'Home', slug: 'home' },
  { href: '/checkpoints', label: 'Checkpoints', slug: 'checkpoints' },
  { href: '/location-tracking', label: 'Location Tracking', slug: 'location' },
  { href: '/navigation-apps', label: 'Navigation Apps', slug: 'navigation' },
  {
    href: '/comprehensive-security-checklist',
    label: 'Security Checklist',
    slug: 'checklist',
  },
];

// Nav link subtypes
export type NavSlug = (typeof navLinks)[number]['slug'];
export type NavHref = (typeof navLinks)[number]['href'];
export type NavLink = (typeof navLinks)[number];

// Helper functions to get nav link by slug or href
export const getNavLinkBySlug = (slug: NavSlug) =>
  navLinks.find(link => link.slug === slug);
export const getNavLinkByHref = (href: NavHref) =>
  navLinks.find(link => link.href === href);

export default navLinks;
