# design-roadmap

Private **Harden** marketing and design workspace: gated React app with proposal content, web design references, brand guidelines, and a 16:9 presentation deck for customer-facing slides.

## Stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [Vite 6](https://vitejs.dev/)
- Fonts and visual system follow in-app **Brand guidelines** (Newsreader, Poppins, `#872921`, `#F4F2EA`)

## Setup

```bash
npm install
```

## Local development

```bash
npm run dev
```

The Vite dev server wires `POST /api/verify` to `api/verify.js` (same handler shape as Vercel serverless routes), so the **Gate** screen works without a separate backend.

## Build and preview

```bash
npm run build
npm run preview
```

## Authentication

Access is protected by a short-lived token stored in `sessionStorage`. The gate calls `POST /api/verify` with a `passcode`; successful responses return a signed `token`, which is sent back on later visits for re-validation.

For **production**, set:

| Variable | Purpose |
|----------|---------|
| `SITE_PASSCODE` | Passphrase users enter at the gate |
| `TOKEN_SECRET` | HMAC secret used to sign session tokens |

Defaults exist in `api/verify.js` for local use only—change them before deploying anything public.

## Routes (after sign-in)

| Path | Content |
|------|---------|
| `/` | Menu |
| `/proposal` | Proposal |
| `/web-design` | Web design |
| `/brand-guidelines` | Brand guidelines |
| `/presentation` | Slide templates (export or rebuild in Keynote / Google Slides) |

## Project layout

```
src/
  App.jsx                 # Router + auth shell
  components/             # Gate, layouts, Proposal, WebDesign, BrandGuidelines, Presentation, …
  services/auth.js        # Token storage + /api/verify client
api/
  verify.js               # Vercel-compatible verify handler
public/imagery/           # Static assets referenced by guidelines and deck placeholders
```

## License

Private repository; all rights reserved unless otherwise noted.
