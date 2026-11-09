# Thabo's Plumbing Services

[![Live Site](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://thabos-plumbing-services.vercel.app/index.html)
![Module](https://img.shields.io/badge/Module-WEDE5020-1457b2?style=flat)
![Assignment](https://img.shields.io/badge/Assignment-POE-0b3c5d?style=flat)
![Pages](https://img.shields.io/badge/Pages-5-0b3c5d?style=flat)
![Services](https://img.shields.io/badge/Services-6-1d6fd6?style=flat)

| **Details** | **Information** |
|---|---|
| Student Name | Saravan Jeeth Naidoo |
| Student Number | ST10510632 |
| Course | Higher Certificate In Mobile Application And Web Development |
| Module | WEDE5020 |
| Lecturer | Hiren Thulasaie |
| Deployed Site | https://thabos-plumbing-services.vercel.app/index.html |

---

## Project Overview
A five-page responsive website for Thabo's Plumbing Services, a small plumbing business in Durban, KwaZulu-Natal. Built with HTML5, CSS3 and JavaScript.

---

## Pages
| Page | Description |
|---|---|
| `index.html` | Home page with hero, service highlights and photo gallery with lightbox |
| `about.html` | Business story, mission, vision and values |
| `services.html` | Six service cards loaded dynamically from JSON with a search feature |
| `enquiry.html` | Booking form with client-side validation |
| `contact.html` | Two office locations, interactive Leaflet map and contact form |

---

## Folder Structure
```
/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── CHANGELOG.md
├── README.md
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── services.json
└── images/
```

---

## Features
- One external stylesheet linked to all five pages
- CSS custom properties, Grid and Flexbox layout
- Responsive breakpoints at 1024px, 768px and 480px
- Mobile hamburger navigation
- Gallery lightbox
- Interactive Leaflet map
- Dynamic service cards from `services.json` with search and filter
- Enquiry form with inline validation and success message
- Contact form with inline validation
- Unique title tags, meta descriptions and meta keywords on all pages
- Descriptive image filenames and alt text
- `robots.txt` and `sitemap.xml`

---

## Responsive Breakpoints
| Breakpoint | Changes |
|---|---|
| Desktop (default) | Three-column cards, horizontal nav, two-column hero |
| Tablet `1024px` | Hero stacks, font sizes reduced |
| Mobile `768px` | Single column, hamburger menu, full-width buttons |
| Small phone `480px` | Tighter padding, one-column gallery |

---

## Screenshots

### Desktop
![Desktop view](images/desktop.JPG)

### Tablet
![Tablet view](images/tablet.JPG)

### Mobile
![Mobile view](images/mobile.JPG)

---

## Deployment
Hosted on Vercel. All five pages deploy and load without errors.  
Live site: https://thabos-plumbing-services.vercel.app/index.html

---

## Changelog

### A. Part 1 Feedback

| # | Lecturer feedback | Change made | Status |
|---|---|---|---|
| 1 | "Place all your work in the root folder and not with Thabo's subfolder." | Moved all pages and folders to the repository root. | Done |
| 2 | "No changelog?" (0/5) | Added changelog to README. | Done |
| 3 | "Using more references... use more in-text citations." (4/5) | Added References section and in-text citations (Harvard style). | Done |
| 4 | "Commits could be more detailed." | Part 2 changes committed separately with descriptive messages. | Done |
| 5 | Features "not explained in much detail." (2/3) | Added page-by-page features table. | Done |
| 6 | Sitemap "should also show what each of the subpages has to offer." (3.5/5) | Added sitemap with page descriptions. | Done |
| 7 | Technical requirements: "justify this with references and explanations." (1.5/2) | Added Technical requirements section with citations. | Done |
| 8 | Budget: "provide where the cost is derived from." (2.5/3) | Added itemised budget with sourced South African costs. | Done |
| 9 | "Only 1 proposal was submitted." (1/5) | Not required in Part 2. | Not required |
| 10 | "Could have done more research." (8/10) | Added Target Audience section and Image Credits. | Done |

---

### B. Part 2 Changes

| Date | File(s) | Change | Reason |
|---|---|---|---|
| 1 Oct 2026 | `css/style.css` | Rewrote stylesheet into labelled sections, linked to all five pages. | External stylesheet requirement. |
| 1 Oct 2026 | `css/style.css` | Added CSS custom properties for colours, font, spacing, radius and shadows. | Base style requirement. |
| 1 Oct 2026 | `css/style.css` | Replaced Arial with Roboto and fallback stack. | Proposal font choice. |
| 1 Oct 2026 | `css/style.css` | Added 1.25 type scale, font-weight, line-height and letter-spacing. | Typography requirement. |
| 1 Oct 2026 | `css/style.css` | Replaced flexbox with CSS Grid for hero, cards and forms. | Layout requirement. |
| 1 Oct 2026 | `css/style.css` | Added box-shadow to cards, header, panels and buttons. | Visual styles requirement. |
| 1 Oct 2026 | `css/style.css` | Added `:hover`, `:focus`, `:focus-visible` and `:active` states. | Pseudo-classes requirement. |
| 1 Oct 2026 | `css/style.css` | Replaced px values with rem/em, %, fr and ch. | Relative units requirement. |
| 1 Oct 2026 | `css/style.css` | Added breakpoints at 1024px, 768px and 480px. | Responsive design requirement. |
| 1 Oct 2026 | `images/` | Created 480px, 800px and 1200px JPG and WebP copies of every photo. | Responsive images requirement. |
| 1 Oct 2026 | All HTML files | Added srcset, sizes, picture element, lazy loading and width/height attributes. | Responsive images requirement. |
| 4 Oct 2026 | `css/style.css` | Added `:user-valid` and `:user-invalid` borders on form fields and `:last-child` spacing rules. | Pseudo-classes requirement. |
| 5 Oct 2026 | `index.html` | Added tap-to-call button in hero. | Content research. |
| 5 Oct 2026 | `contact.html` | Added Call Us card with tap-to-call link. | Content research. |
| 5 Oct 2026 | `enquiry.html` | Added urgent job tap-to-call line above form. | Content research. |
| 5 Oct 2026 | `services.html` | Added commercial properties section with quote button. | Secondary audience. |
| 5 Oct 2026 | `css/style.css` | Added hamburger menu styles for mobile. | Navigation breakpoint requirement. |
| 5 Oct 2026 | `js/main.js` | Added mobile menu toggle with aria-expanded. | Mobile navigation requirement. |

---

### C. Part 2 Feedback Fixes

| Date | File(s) | Change | Reason |
|---|---|---|---|
| 31 Oct 2026 | `images/`, HTML files | Replaced all iStock images with AI-generated Gemini photos, created responsive variants, rewrote alt text. | Remove watermarked images. |
| 31 Oct 2026 | All HTML files | Updated service names from Geyser Installations to Underground Pipework Installation throughout. | Keep service names consistent. |
| 31 Oct 2026 | `css/style.css` | Added `:focus-visible` outlines using `--focus` colour for all interactive elements. | Keyboard accessibility. |
| 8 Nov 2026 | `images/`, `js/services.json`, HTML files | Replaced under-sink photo used for Bathroom Plumbing with correct bathroom tap photo. | Photo did not match the service. |
| 9 Nov 2026 | `services.html` | Added meta description tag. | SEO requirement. |

---

## References

Chloe Leonard Studio (2026) *Color Psychology in Web Design: How to Use Color to Influence Users*. Available at: https://www.chloeleonard.com/blog/colorpsychology-in-web-design (Accessed: 1 October 2026).

Gemini (2026) *AI-generated plumbing photographs* [AI-generated images]. Google Gemini. Available at: https://share.gemini.google/YHfzgqyoMhAw (Generated: 31 October 2026).

Google Fonts (n.d.) *Roboto*. Available at: https://fonts.google.com/specimen/Roboto (Accessed: 1 October 2026).

MDN Web Docs (n.d.a) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 1 October 2026).

MDN Web Docs (n.d.b) *CSS flexible box layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 1 October 2026).

MDN Web Docs (n.d.c) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 1 October 2026).

MDN Web Docs (n.d.d) *:focus-visible*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible (Accessed: 1 October 2026).

MDN Web Docs (n.d.e) *HTML elements reference*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element (Accessed: 1 October 2026).

MDN Web Docs (n.d.f) *Using CSS custom properties (variables)*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties (Accessed: 1 October 2026).

MDN Web Docs (n.d.g) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 1 October 2026).

MDN Web Docs (n.d.h) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 1 October 2026).

New Target, Inc. (2025) *Color Psychology in Website Design*. Available at: https://www.newtarget.com/web-insights-blog/color-psychology-in-website-design/ (Accessed: 30 August 2026).

ProCompare (n.d.) *Beyond the build: a 3-year forecast of your website's true running costs in South Africa*. Available at: https://www.procompare.co.za/articles/digital-marketing-seo-services/website-running-costs (Accessed: 4 October 2026).

Truehost (2024) *Guide To Cost Of Hosting A Website In South Africa*. Available at: https://truehost.co.za/cost-of-hosting-website-south-africa/ (Accessed: 4 October 2026).
