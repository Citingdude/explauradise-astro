# Explauradise

A static, Dutch-language homepage built with Astro, Tailwind CSS, and TypeScript. The design closely follows the original homepage: translucent overlaid navigation, centered hero title, handwritten divider headings, peach category tiles with the original icon font, article cards beside an author sidebar, and photographic banner and footer backgrounds. Responsive layouts, visible category actions, keyboard navigation, and image optimization improve usability.

## Development

Use a Node.js version supported by the installed Astro release (currently Node >=22.23.4) and pnpm 12.18.0, pinned in `package.json`.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Astro. To validate and preview the production output:

```sh
pnpm check
pnpm build
pnpm preview
```

The static website is generated in `dist/`. No server adapter, account, environment variables, CMS, or third-party API credentials are required.

## Content and styling

- Edit categories, articles, social links, and footer links in `src/data/home.ts`; homepage section copy and the author introduction are in `src/pages/index.astro`.
- Original photographs live in `src/assets/`; Astro generates responsive WebP images during the build. Original logo and favicon are in `public/`.
- Page composition is in `src/pages/index.astro`, reusable UI in `src/components/`, and design tokens and responsive styling in `src/styles/global.css`.
- Fonts are bundled locally through Fontsource. There are no external font requests, live social embeds, tracking scripts, or newsletter submissions.
- Non-homepage links lead to the existing Explauradise website. The Instagram strip is a curated set of original blog photographs, not a live feed. Video links open the original YouTube video without loading an embedded player.

The canonical URL is configured for `https://www.explauradise.com/`. Update `site` in `astro.config.mjs` if the permanent production domain changes. This project has not been deployed.

## Asset provenance

Images, logo, favicon, original article titles, publication dates, and link destinations were sourced from the public Explauradise homepage and its `wp-content/uploads/` media on 13 November 2026. These assets belong to their original owners and are included for the requested rebuild. The introduction is lightly edited, without the original age reference; article dates remain unchanged.

The original autoplay hero video uses its static landscape fallback. Hover-only category flips are replaced with visible descriptions and links. The original newsletter position contains the agreed Instagram follow CTA. Browser-based visual comparison and Lighthouse scoring still require browser access; source structure, original styles, type checks, and production builds have been checked.
