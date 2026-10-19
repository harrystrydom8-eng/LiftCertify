# LiftCertify website

Plain HTML and CSS, no build step. Works on GitHub Pages as it is.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page |
| `features.html` | Features, in order of priority |
| `contact.html` | Pricing (no prices), demo booking, contact form |
| `privacy.html` | Privacy policy draft |
| `css/styles.css` | All styling, colours at the top |
| `js/site.js` | Mobile menu, footer year, form sending |
| `favicon.svg` | Logo mark (inspection tag with tick) |
| `CNAME` | The test address on GitHub Pages |

## Put it on GitHub Pages (test address)

1. Create a repository, e.g. `liftcertify-website`, and upload all the files (keep the `css` and `js` folders).
2. **Settings, Pages**: Source = Deploy from a branch, branch `main`, folder `/ (root)`. Save.
3. The `CNAME` file holds `liftcertify.it-coms.org`. Change it if you want a different test address.
4. At your domain's DNS, add a **CNAME record**: name `liftcertify`, value `YOURGITHUBNAME.github.io`.
5. Wait for the DNS (minutes to a few hours), then tick **Enforce HTTPS** in Settings, Pages.

## Fill in before showing it to anyone

Search the files for `REPLACE` and `[`:

- `contact.html`: booking link (Cal.com / Calendly / Microsoft Bookings)
- `contact.html`: WhatsApp number (international format, digits only, e.g. `27821234567`)
- `contact.html`: phone number (shown and in the `tel:` link)
- `contact.html`: Formspree form id. Free account at formspree.io, create a form, copy the id from its address
- `privacy.html`: company legal name, registration number, address, email. Have it checked for POPIA / GDPR

## Honest wording

"Inspect on site" (mobile / offline) and "Customer portal" are marked **In development**.
Remove the `<span class="tag-soon">In development</span>` tags only when those features exist.

## Changing the name later

The name appears in the page titles, the header (`Lift<span>Certify</span>`), the footers and the privacy page.
Search and replace `LiftCertify` across the files.
