# Gerrards Cross Laser Clinic — Quantweb build

Astro static site. `npm install` → `npm run dev` (port 4391) → `npm run build`.
Content: `src/data/site.ts` · Tokens/styles: `src/styles/global.css`.

## Before launch
- **Booking form**: create a Web3Forms key on Sharon's inbox, set `PUBLIC_WEB3FORMS_KEY` in Vercel env, redeploy. Until then the form tells visitors to call.
- **Email**: add Sharon's email to `site.email`.
- **Google reviews**: add her Google Place ID to `site.googlePlaceId` (enables direct "Read/Leave a review" links). Paste real reviews verbatim into `reviews` to show them on the page.
- **Confirm**: address (62A Packhorse Road vs "Gerrards Cross Business Centre"), opening hours, award wording.
- **Treatment descriptions** are Quantweb drafts — get Sharon's sign-off.
- **Media**: `public/media` holds her award reel (1076×1056, used as the portrait) and 2 Instagram reels (720p — Instagram's max for public reels, captions baked in), re-encoded to H.264, muted. For a hero film or treatment footage, ask Sharon for the original phone videos (1080p/4K, no captions).
- **Old site** gerrardscrosslc.com still exists (linked in her IG bio) — couldn't be fetched; add 301s in `vercel.json` once its URLs are known.

Deploy: Vercel, framework Astro, team vards-projects.
