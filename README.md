# Dr. Maya Reynolds, PsyD — Therapy Website

Next.js 15 + Tailwind CSS site for the GrowMyTherapy Front-End Developer
Internship assessment: a clone-and-redesign of the Conejo Valley Family
Counseling homepage, rebuilt for the fictional profile of Dr. Maya Reynolds.

## Setup
## Live Website

https://maya-reynolds-therapy-wine.vercel.app/
```
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```
npm run build
npm run start
```

## Deploy to Vercel

```
npx vercel
```
(or connect the repo in the Vercel dashboard and deploy — no extra config needed)

## Project structure

```
app/
  layout.js       — fonts (Fraunces + Inter), metadata
  page.js          — assembles all sections
  globals.css       — Tailwind + base styles
components/
  Navbar.jsx        — sticky nav, mobile menu
  Hero.jsx          — H1, subtext, CTAs, office image collage
  Intro.jsx         — mission statement section
  Services.jsx      — 3 required services (Anxiety / Trauma / Burnout & Perfectionism)
  Quote.jsx         — pull-quote section
  About.jsx         — Maya's portrait + bio
  Approach.jsx      — CBT / EMDR / Mindfulness / Body-oriented modalities
  Office.jsx        — NEW section: office gallery, address, in-person + telehealth
  FAQ.jsx           — accordion, content sourced only from the supplied profile
  Contact.jsx        — final CTA section
  Footer.jsx         — nav links, address
public/images/
  maya-reynolds.png  — supplied portrait (used in About)
  office-1.jpeg       — supplied office photo (used in Hero + Office)
  office-2.jpeg       — supplied office photo (used in Hero + Office)
```

## Notes

- All copy is sourced strictly from the supplied Maya Reynolds profile. No
  invented credentials, pricing, insurance, phone number, email, or
  testimonials.
- - The primary CTA ("Schedule a Free Consultation") opens a pre-filled
  email using `mailto:` so visitors can contact the practice directly.
- - Color palette: warm ivory/cream background, muted sage/eucalyptus,
  dusty rose/terracotta accent, and deep charcoal text — chosen deliberately
  to differ from the original site's colors while preserving the reference
  site's core page structure and layout rhythm (hero → mission → who I help →
  areas of expertise → how I work → about/specialty → office → FAQ → CTA → footer).
- A residual `npm audit` flag exists for a PostCSS version bundled inside
  Next.js's own dependency tree. Fully resolving it requires jumping to
  Next.js 16 (a breaking change); this project intentionally stays on the
  latest patched Next.js 15 LTS release instead, since 16 wasn't tested
  against this codebase.
