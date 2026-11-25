// Official resellers per country. Adding a country here adds its card to the shop
// and (if `detect` is set) shows the "official reseller" modal to visitors from there.

export type Reseller = {
  key: string;
  name: string;
  country: { ro: string; en: string };
  url: string;
  logo?: string;            // path under /public; falls back to a text wordmark when omitted
  address: string;
  phones: string[];
  email: string;
  // Client-side detection (the site is static, so no IP geolocation):
  // a visitor matches if their browser time zone OR primary language is listed.
  detect?: { timeZones: string[]; languages: string[] };
};

export const RESELLERS: Reseller[] = [
  {
    key: 'rivigum',
    name: 'Rivigum',
    country: { ro: 'Ungaria', en: 'Hungary' },
    url: 'https://rivigum.hu/',
    logo: '/logos/resellers/rivigum.png',
    address: '2336 Dunavarsány, Bajai út 20.',
    phones: ['+36 70 233 7400', '+36 70 881 6323'],
    email: 'info@rivigum.hu',
    detect: { timeZones: ['Europe/Budapest'], languages: ['hu'] },
  },
];

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
