## Changelog

All edits made after Part 1, in order. Part 1 feedback comes first, then the Part 2 work.

### A. Part 1 feedback

| # | Lecturer feedback | Change made | Status |
|---|---|---|---|
| 1 | "Place all your work in the root folder and not with Thabo's subfolder." | Moved all pages and folders to the repository root so `index.html`, `css/`, `js/` and `images/` are no longer inside a subfolder. | Done |
| 2 | "No changelog?" (0/5) | Added this Changelog section to the README. | Done |
| 3 | "Using more references... use more in-text citations." (4/5) | Added a References section and in-text citations (Harvard style). Sources cover colour, typography, layout, responsive design, validation, hosting costs and image credits. | Done |
| 4 | "Commits could be more detailed." | Part 2 changes are committed in separate commits, with messages that state the file and what was changed. | Done |
| 5 | Features "not explained in much detail." (2/3) | Added a page-by-page features table to this README and marked unbuilt features (header phone number, map) as planned. | Done |
| 6 | Sitemap "should also show what each of the subpages has to offer." (3.5/5) | Added the sitemap with a description of what each page offers. | Done |
| 7 | Technical requirements: "justify this with references and explanations." (1.5/2) | Added a Technical requirements section explaining HTML5, CSS3 and JavaScript, with citations. | Done |
| 8 | Budget: "provide where the cost is derived from... take your website into account." (2.5/3) | Added a Budget section with an itemised low and expected yearly cost for this static five-page site (domain, hosting, SSL, maintenance). Each figure is tied to a cited South African source, and the assumptions and exclusions are listed. | Done |
| 9 | "Only 1 proposal was submitted." (1/5) | The second proposal was a Part 1 deliverable. It is not listed in the Part 2 brief or mark sheet, so nothing was added for it in Part 2. | Not required in Part 2 |
| 10 | "Could have done more research." (8/10) | Added a Target Audience section and credited every photograph in an Image Credits section. Used the content research on the pages: tap-to-call links, a small business and commercial section and an underground pipework service for extensions and outbuildings on the services page, and the 2018 start date on the About page. Claims in the research draft that could not be confirmed (24/7 service, certification, opening hours) were left out. | Done |

### B. Part 2 changes: CSS styling and responsive design

| Date | File(s) | Change | Reason |
|---|---|---|---|
| 1 Oct 2026 | `css/style.css` | Rewrote the stylesheet into labelled, commented sections and linked it from all five pages. | Meet 2.1 (external stylesheet) and keep the code readable. |
| 1 Oct 2026 | `css/style.css` | Added CSS custom properties for colours, font, spacing, radius and shadows. | Meet 2.2 (base style) and reduce repeated values and selectors. |
| 1 Oct 2026 | `css/style.css` | Replaced Arial with Roboto (Google Fonts) and a fallback font stack. | The Part 1 proposal chose Roboto for readability on phones. |
| 1 Oct 2026 | `css/style.css` | Added a 1.25 type scale, plus `font-weight`, `line-height` and `letter-spacing` rules. Limited paragraph width to `65ch`. | Meet 2.3 (typography) and improve readability. |
| 1 Oct 2026 | `css/style.css` | Replaced flexbox cards, hero and forms with CSS Grid (including `grid-template-areas` for the hero). Flexbox kept for header, nav and footer. | Meet 2.4 (layout). Grid handles two-dimensional layouts more cleanly. |
| 1 Oct 2026 | `css/style.css` | Added `box-shadow` to cards, header, panels and buttons. | Meet 2.5 (visual styles). |
| 1 Oct 2026 | `css/style.css` | Added `:hover`, `:focus`, `:focus-visible` and `:active` states to navigation links, buttons, cards and form fields. | Meet 2.5 (interactive elements) and improve keyboard accessibility. |
| 1 Oct 2026 | `css/style.css` | Replaced most `px` values with `rem`/`em`, and used `%`, `fr` and `ch` for widths. Replaced fixed image heights with `aspect-ratio`. | Meet 3.2 (relative units). |
| 1 Oct 2026 | `css/style.css` | Replaced the single 768px media query with three breakpoints (1024px, 768px, 480px): hero stacks at tablet, single column at mobile, tighter spacing on small phones. | Meet 3.1 (breakpoints, multi-column to single-column). |
| 1 Oct 2026 | `css/style.css` | Changed mobile navigation to a two-column grid of large tap targets, and made hero buttons full width. | Meet 3.1 (navigation per breakpoint) and improve touch use. |
| 1 Oct 2026 | `css/style.css` | Added a `prefers-reduced-motion` rule. | Accessibility. |
| 1 Oct 2026 | `README.md` | Corrected descriptions so they match the code (lazy loading, script loading, Grid use), renumbered sections to follow the Part 2 brief, and added the sitemap, features table and technical requirements. | The previous README described features that were not in the code and used section numbers from another brief. |
| 1 Oct 2026 | `README.md` | Added desktop, tablet and mobile screenshots. | Meet 3.4 (testing evidence). |
| 1 Oct 2026 | `images/` | Created 480px, 800px and 1200px JPG and WebP copies of every photo. | Provide different image resolutions for different screens (3.3). |
| 1 Oct 2026 | `index.html`, `about.html`, `services.html`, `contact.html` | Added `srcset` and `sizes` to all photos, a `<picture>` element with WebP and JPG to the home page hero, lazy loading for below-the-fold images only, and `width`/`height` attributes. | Meet 3.3 (responsive images) and reduce layout shift. |
| 1 Oct 2026 | all five pages | Rewrote image alt text to describe each photo, shortened the logo alt text, and removed inline styles from the contact and enquiry pages (spacing now in `css/style.css`). | Accessibility and keeping styling in the stylesheet. |
| 1 Oct 2026 | `README.md` | Corrected the CSS descriptions to match the stylesheet (removed the "type scale" from the custom properties list, corrected the font fallback stack and the description of how the stylesheet is organised) and fixed the table of contents numbering. | Keep the documentation accurate to the code. |
| 4 Oct 2026 | `README.md` | Added a Budget section with itemised, sourced yearly costs for this website, and changed the Hosting note to point to it. | Part 1 feedback on the budget (criterion 8). |
| 4 Oct 2026 | `README.md` | Added a Target Audience section based on the content research document. | Part 1 feedback on research (criterion 10). |
| 4 Oct 2026 | `README.md` | Added an Image Credits section and image references, with in-text citations for each photograph. | Credit the photographs used and add more references (Part 1 criteria 10 and 21). |
| 4 Oct 2026 | `README.md` | Added the ProCompare reference for maintenance and hosting prices. | Source the budget figures. |
| 4 Oct 2026 | `README.md` | Relabelled the 572px screenshot to state its real width and the layout it shows, and added a fallback credit for the photograph whose iStock details could not be traced. | Keep the documentation accurate. |
| 4 Oct 2026 | `css/style.css` | Added smaller text sizes for the 480px breakpoint (headings, body text, navigation links and buttons). | Meet 3.1 (font sizes adjusted at each breakpoint). |
| 4 Oct 2026 | `css/style.css` | Added `:user-valid` and `:user-invalid` borders on form fields and `:last-child` rules that remove extra spacing at the end of cards and lists. | Meet 2.5 (pseudo-classes) and improve form feedback. |
| 4 Oct 2026 | `README.md` | Updated the breakpoint table and the pseudo-class list to match the new CSS, and marked Part 1 feedback row 9 as not required in Part 2. | Keep the documentation in line with the finished CSS and the Part 2 brief. |
| 5 Oct 2026 | `index.html` | Added a "Call Us Now" button to the hero, a tap-to-call link that starts a phone call on a mobile. | Visitors want to find a contact number quickly (content research). |
| 5 Oct 2026 | `contact.html` | Added a "Call Us" card with a tap-to-call phone link. | Visitors want to find a contact number quickly (content research). |
| 5 Oct 2026 | `enquiry.html` | Added an "Is it urgent?" line with a tap-to-call link above the form. | Point urgent jobs to a phone call instead of the form. |
| 5 Oct 2026 | `about.html` | Updated the "When We Started" card with the 2018 start date, Thabo's six years at a larger plumbing company and the growth through referrals, taken from the Part 1 proposal. | Use the proposal's facts and the research on the About page (Part 1 criterion 10). |
| 5 Oct 2026 | `services.html` | Added a "Plumbing for small businesses and commercial properties" section with a "Request a Quote" button linking to the enquiry form. | Speak to the secondary audience identified in the research. |
| 5 Oct 2026 | `css/style.css` | Added underline and hover styles for phone links inside the contact cards and the urgent-job note. | Make the phone links recognisable as links. |
| 5 Oct 2026 | `README.md` | Updated the page features table, planned features, design notes, accessibility notes and changelog to match the pages. | Keep the documentation accurate to the site. |
| 5 Oct 2026 | `css/style.css` | Removed the two-column card rule at 1024px and set the card grid to three equal columns until the mobile breakpoint. | Meet 3.1 (layout per breakpoint). With three cards, two columns left one card alone on the second row. |
| 5 Oct 2026 | `css/style.css` | Replaced `auto-fit` in the card grid with `repeat(3, 1fr)`. | At about 1100px `auto-fit` made four columns, which left two orphan cards on the services page. |
| 5 Oct 2026 | `css/style.css` | Added hamburger menu styles: a hidden menu button, a three-line icon that turns into an X, and hover, active and focus states. On mobile the links are hidden until the button is pressed. | Meet 3.1 (navigation per breakpoint). |
| 5 Oct 2026 | `index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html` | Added a menu `<button>` with `aria-expanded` and `aria-controls` inside the `<nav>` and gave the link list the id `main-menu`. | The button needs markup, and the attributes keep the menu accessible. |
| 5 Oct 2026 | `js/main.js` | Added a script that toggles the open state of the menu and updates `aria-expanded`. It also adds a class that hides the links only when JavaScript is running. | Open and close the mobile menu, and keep the links visible if the script fails. |
| 5 Oct 2026 | `images/`, `README.md` | Replaced the 572px tablet screenshot with a real tablet capture (iPad Air, 820px), retook the mobile screenshot on a named phone preset (390px wide), and renamed all three screenshots to lowercase `.png`. | The old tablet image showed the mobile layout (3.4), and the README says file names are lowercase. |
| 5 Oct 2026 | `README.md` | Updated the breakpoints table, the layout and accessibility notes and the screenshot captions to match the new CSS, and renamed the "Mid-Width View" heading to "Tablet View". | Keep the documentation accurate to the site. |
| 5 Oct 2026 | `services.html`, `README.md` | Renamed the Geyser Installations service card to Underground Pipework Installation and rewrote its text to cover new water and drainage pipework for home extensions and outbuildings, connected to existing plumbing. Updated that photo's alt text, the services feature row and the Image Credits table to match. | Use the research on renovation work and make the card title, text and photo description agree. |
| 5 Oct 2026 | `README.md` | Added a Part 2 Requirements Coverage table, numbered the Technical requirements heading as 2.6, and updated the research notes in the changelog and Design Iterations section. | Make it easy to check each Part 2 requirement against the README and keep the documentation accurate. |

---

### C. Part 2 feedback fixes (Part 3 work)

| Date | File(s) | Change | Reason |
|---|---|---|---|
| 31 Oct 2026 | `images/`, `index.html`, `about.html`, `services.html`, `contact.html` | Renamed the eight AI-generated photos to lowercase hyphenated filenames, created 480px, 800px and 1200px JPG and WebP variants, replaced all iStock image references, rewrote alt text, and removed old iStock image references. | Complete the new AI-photo requirements while preserving responsive image attributes, layout dimensions and lazy loading. |
| 31 Oct 2026 | `enquiry.html`, `index.html`, `about.html`, `services.html`, `contact.html` | Changed `Geyser Installations` and geyser wording to `Underground Pipework Installation` or underground pipework wording so it matches the six service cards. | Keep service names consistent across the website. |
| 31 Oct 2026 | `css/style.css` | Added `:focus-visible` outlines using the existing yellow `--focus` colour for form fields, navigation links and the menu button. | Improve visible keyboard focus without removing existing focus styles. |
| 31 Oct 2026 | `README.md`, `CHANGELOG.md` | Moved the A and B changelog tables to `CHANGELOG.md`, replaced the README changelog with a link, and added this dated Part 2 feedback section. | Keep the README short and maintain a complete project changelog. |
| 31 Oct 2026 | `README.md` | Updated the image credits and image references for the Gemini AI-generated photographs and removed iStock photo credits. | Document the new AI-generated images and prompts accurately. |
| 31 Oct 2026 | `images/`, `services.html` | Renamed `drain cleaning.jpg`, created the 480px, 800px and 1200px JPG and WebP variants, and added the responsive Drain Clearing card image with descriptive alt text. | Replace the broken Drain Clearing image with the new AI-generated photograph. |
| 31 Oct 2026 | `README.md` | Removed broken README screenshot references and the Pexels reference. Added the drain clearing Gemini credit and prompt. | Keep all documentation image references accurate. |
| 8 Nov 2026 | `images/`, `js/services.json`, HTML files, `README.md` | Replaced the under-sink photo used for Bathroom Plumbing with a new AI-generated bathroom photo showing a plumber fitting a basin tap. Created 480px, 800px and 1200px JPG and WebP copies. | The old photo showed a kitchen sink, which did not match the Bathroom Plumbing service. |
