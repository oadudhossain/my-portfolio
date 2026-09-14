# Oadud Hossain portfolio

A compact, dark developer portfolio built with Next.js App Router, React, JavaScript, Tailwind CSS, and locally hosted Geist fonts. It uses CSS motion and small client components, with no animation library.

## Development

Use Node.js 22.13 or newer and the pnpm version recorded in `package.json`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open the localhost URL printed in the terminal. The normal development server defaults to port 3000. The development wrapper also accepts the managed preview host and port flags.

## Production

```sh
pnpm build
# npm run build also runs the same Next.js build
```

`out/` is the production static export. Serve it through a static web server or a hosting service. `next start` does not serve a static export.

To deploy on Vercel, import the repository, select Next.js, and set `NEXT_PUBLIC_SITE_URL` to your final HTTPS domain. Vercel reads the build script and framework configuration. For another static host, deploy only `out/`. No database, API keys, or server are required.

If you need Next.js runtime image optimization or server features later, remove `output: 'export'` and the `images.unoptimized` setting from `next.config.mjs`, then use a Next.js-compatible host. The current static export uses `next/image` with original local images and responsive sizing; runtime image transformation is intentionally unavailable in static hosting.

## Update your content

- `data/site.js`: name, role, email, phone, and site URL fallback.
- `data/projects.js`: replace the three clearly labelled temporary entries. Set `placeholder: false`, update titles, descriptions and tags, and provide real live/source links. Blank or `#` links do not render, so they cannot jump the page. Add a local screenshot such as `/projects/my-project.webp` to `image`; it automatically replaces the CSS illustration.
- `data/skills.js`: replace the broad development focus with your confirmed technologies. No unverified technology experience, employment, metrics, or client work is claimed.
- `data/socialLinks.js`: add your actual GitHub and LinkedIn URLs. Empty URLs stay hidden. Add `public/resume.pdf` first, then set `resume: '/resume.pdf'` to show the CV link.
- `components/sections/About.js`: update your biography.
- `public/brand/logo.png`: supplied original logo, preserved without redesign.
- `public/favicon.png`: supplied original favicon, configured in Next.js metadata.
- `app/globals.css`: colours, spacing, typography, motion, and responsive layouts.

Keep filenames URL safe. Use compressed WebP or AVIF project screenshots for faster loading. The public folder maps directly to the site root.

## Search and sharing metadata

`app/layout.js` configures the title, description, Open Graph and Twitter metadata, theme colour, favicon and Person JSON-LD. Canonical and sitemap URLs use `NEXT_PUBLIC_SITE_URL` or the configured URL in `data/site.js`. Set it to the actual deployment origin and rebuild when moving domains. No guessed profile URLs are included. A social image can be added to `public/og.png` and referenced in the Open Graph and Twitter metadata when you have approved one.

## Interaction and accessibility

The `AnimatedButton` component supports `primary`, `secondary`, `icon`, and `text-link` variants. Labels swap, the fill rises, and arrows move on hover and keyboard focus. Magnetic movement uses CSS variables, never pointer-driven React state, and is disabled for touch and reduced motion. The native cursor remains visible.

The mobile menu supports keyboard navigation, Escape to close, outside click, and an expanded state announcement. The stack diagram has keyboard-accessible node descriptions. Navigation uses native anchor scrolling. Scroll reveals use one IntersectionObserver and remain visible without JavaScript. Reduced motion disables continuous animation and large transitions.

## Brand assets and fonts

The logo and favicon are the files supplied by the portfolio owner. Geist and Geist Mono are distributed under the SIL Open Font License; see `public/fonts/OFL.txt`.

## Study and website showcase

`data/education.js` holds your academic qualifications. Fill `qualification`, `institution`, `period`, `result`, and optional `details`; add or remove objects for as many qualifications as you need. Empty entries are explicitly marked as awaiting details and make no qualification claims. Study is linked from the desktop and mobile navigation.

The website showcase uses `data/projects.js`. This portfolio is the first real live project. Add your other websites with their real `liveUrl`, optional `githubUrl`, screenshot `image`, and a `type` such as `Websites`, `Applications`, or `Interfaces`. Categories are generated from the data. Visitors can filter by type, search by title, description or technology, and visit configured live sites in a new tab. Empty links stay hidden.

## Light mode and theme sounds

The navigation theme button switches between light and dark, remembers the selection on the current browser, and synchronizes it across tabs. A small initialization script applies the saved theme before first paint. Dark remains the default for first-time visitors. Each explicit switch plays a brief, quiet two-note tone using the Web Audio API. Light and dark use different tones. There is no autoplay and no audio download; switching still works if sound is unavailable. Theme colours and new section styles are in `app/globals.css`; sound frequencies and volume are in `components/ui/ThemeToggle.js`.
