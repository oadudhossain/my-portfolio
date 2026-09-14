import { site } from '../data/site';
export const dynamic = 'force-static';
export default function sitemap() { return site.url ? [{ url: site.url, changeFrequency: 'monthly', priority: 1 }] : []; }
