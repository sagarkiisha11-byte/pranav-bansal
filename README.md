# GAURAV ESTATES — PRANAV BANSAL
### Premium Personal Brand & Real Estate Advisory Website

A luxury, fully responsive, high-performance web experience built for **Pranav Bansal**, Senior Real Estate Consultant & Wealth Advisor operating under the **Gaurav Estates** brand.

---

## 🏛️ Brand Details & Identity

- **Brand Name**: Gaurav Estates
- **Tagline**: `Buy | Sell | Invest`
- **Guiding Slogans**:
  - *"Good People Build Great Places"*
  - *"Properties Today | Prosperity Tomorrow"*
  - *"Let's Build Your Next Chapter"*
- **Consultant**: Pranav Bansal, Senior Real Estate Consultant & Wealth Advisor
- **Direct Phone / Consultation**: `+91 99888 85889` (`tel:9988885889`)
- **Direct WhatsApp**: `https://wa.me/919988885889`
- **Core Advisory Services**:
  1. **Residential Properties** (Penthouses, ultra-luxury condominiums, bespoke villas)
  2. **Commercial Spaces** (Grade-A office towers, retail SCOs, high-street plazas)
  3. **Land & Plots** (Freehold residential townships, commercial & industrial acreage)
  4. **Investment Consultancy** (Pre-leased assets with 8–10% net yields, entry-exit strategies)

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables (Obsidian `#07080B` & Metallic Gold `#C5A059` / `#DFC082`)
- **Typography**: `Playfair Display` (Serif Headings) + `Plus Jakarta Sans` (Body & UI) via `next/font/google`
- **Motion & Physics**: Framer Motion + Lenis Smooth Momentum Scrolling
- **Icons**: Lucide React
- **SEO & Structured Data**: RealEstateAgent JSON-LD schema, dynamic `sitemap.xml`, `robots.txt`, OpenGraph & Twitter cards
- **Deployment**: Netlify Ready with `@netlify/plugin-nextjs` and `netlify.toml`

---

## 📑 Pages & Section Architecture

1. **Preloader / Intro Reveal**: Luxury gold monogram emblem `GE` revealing *"GAURAV ESTATES"* and slogan *"Good People Build Great Places"* with smooth exit.
2. **Sticky Glassmorphism Navbar**: Micro announcement bar + glassmorphism header, brand logo, section anchors, WhatsApp quick button, and click-to-call CTA.
3. **Hero Section**: High-impact luxury headline, tagline reveal, Pranav Bansal portrait showcase, verified consultant badge, floating metric cards (`₹280 Cr+`, `12+ Years`), and dual primary CTAs.
4. **About Pranav Bansal**: Bio as an independent advisor vs traditional brokerage, 4 core commitments, and 4 animated counters that trigger on scroll (`12+ Years`, `500+ Clients`, `350+ Assets`, `₹280 Cr+ Volume`).
5. **Services Section**: 4 premium animated glass cards featuring highlights, badges, direct enquiry hooks, and WhatsApp direct consultation triggers.
6. **Why Choose Us Section**: 6 trust pillars (Transparent Dealings, Hyper-Local Mastery, White Glove Support, High-Yield Guidance, Legal Audits, HNI/NRI Discretion) plus a comparison table showing the Gaurav Estates advantage.
7. **Featured Properties**: Easily editable curated property cards with category filtering (*All, Residential, Commercial, Land & Plots, Investment*), specs (configuration, area, status), price tags, and direct inspection booking.
8. **Testimonials Slider**: Animated auto-playing carousel with pause-on-hover, 5-star ratings, transacted property badges, and authentic testimonials.
9. **FAQ Section**: Accordion answering legal title audits, pre-leased ROI, NRI remote purchases, and zero initial fee policies.
10. **Contact Section**: Interactive enquiry form wired to Next.js API route (`/api/contact`), direct phone card, WhatsApp chat, office details, and visual territory map.
11. **Footer**: Brand identity, slogan *"Properties Today | Prosperity Tomorrow"*, quick links, direct contact, legal disclaimer, and back-to-top button.
12. **Mobile Floating Action Dock**: Sticky bottom pills for one-touch Call and WhatsApp directly to Pranav Bansal.

---

## 🛠️ How to Edit Content & Properties (Single Source of Truth)

All content, phone numbers, slogans, addresses, property listings, and testimonials are located in **one single file**:

👉 `src/data/siteContent.ts`

### 1. Updating Phone Number or Address
Edit lines in `siteContent.consultant`:
```typescript
phone: "9988885889",
phoneDisplay: "+91 99888 85889",
email: "pranavbansal.estates@gmail.com",
address: {
  street: "SCO 42-43, Ground Floor, Inner Market, Sector 9-D",
  city: "Chandigarh / Tricity Region",
  ...
}
```

### 2. Adding or Editing Featured Properties
Simply add or edit objects in `siteContent.featuredProperties`:
```typescript
{
  id: "prop-new",
  title: "The Grand Bel-Air Penthouse",
  category: "Residential", // "Residential" | "Commercial" | "Land & Plots" | "Investment"
  location: "Golf Course Extension",
  price: "₹4.85 Cr",
  specs: {
    type: "4 BHK + Maid",
    size: "4,350 Sq. Ft.",
    status: "Ready for Fit-outs"
  },
  tag: "Exclusive Mandate",
  image: "https://images.unsplash.com/photo-...",
}
```

---

## 📬 Contact Form & API Route (`/api/contact`)

The enquiry form submits to `src/app/api/contact/route.ts`. It performs validation on names, phone numbers, and emails.

To connect it to an email provider or Google Sheet in the future:
- **Resend (Email)**:
  ```typescript
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: 'leads@gauravestates.com',
    to: 'pranavbansal.estates@gmail.com',
    subject: `New Lead: ${name} (${requirementType})`,
    text: `...`,
  });
  ```
- **Google Sheets / Webhook**:
  ```typescript
  await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(leadData),
  });
  ```

---

## 🚀 Deployment to Netlify

The project includes `netlify.toml` pre-configured with `@netlify/plugin-nextjs`.

### Steps to Deploy:
1. Push this repository to GitHub or GitLab.
2. In [Netlify Dashboard](https://app.netlify.com):
   - Click **Add new site** -> **Import an existing project**.
   - Select this repository.
   - Build Command: `npm run build`
   - Publish Directory: `.next`
3. Click **Deploy**. Netlify automatically recognizes Next.js 14 and deploys serverless functions for `/api/contact`.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
