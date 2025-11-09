# D1 Animated Site (Next.js + Tailwind + Framer Motion)

## Quickstart
1. Install Node.js LTS (>=18).
2. In this folder, run:
   ```bash
   npm install
   npm run dev
   ```
   Open http://localhost:3000

## Deploy to Vercel
1. Create a Vercel account and install the CLI (optional).
2. From the project root:
   ```bash
   npx vercel
   ```
   Follow the prompts, then `npx vercel --prod` to publish.

## Connect your Domain
- In Vercel dashboard: *Settings → Domains → Add* yourdomain.tld.
- Set DNS at your registrar:
  - **Option A (recommended):** Change nameservers to Vercel NS.
  - **Option B:** Keep registrar NS and add records:
    - `A` root @ to `76.76.21.21`
    - `CNAME` `www` to `cname.vercel-dns.com.`
- Wait for DNS to propagate; Vercel will issue an SSL cert automatically.

## Customize
- Replace `/public/hero.jpg` with your own image.
- Edit `app/page.tsx` to match your sections.
- Links in the sidebar use anchor IDs; change/extend as needed.
- Colors and borders come from Tailwind theme (`tailwind.config.js`).

## Animations
- All animated elements use Framer Motion (`motion.*` components).
- Add page transitions by wrapping children with `AnimatePresence` in `app/layout.tsx` if desired.

## Notes
- This starter mirrors the blue grid borders & sidebar layout from your Figma.
- For a CMS (Sanity/Contentful/Strapi) we can plug it in later so you can edit content without code.
