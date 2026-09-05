# LumenForge Marketing Site

Marketing site for **LumenForge** — AI long-form cinematic video creation — plus a **demo Features studio** after login.

## Stack
- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo auth & Features studio

Authentication is **demo-only** (no external IdP). Any non-empty email + password works. Documented credentials:

| Field    | Value               |
| -------- | ------------------ |
| Email    | `demo@lumenforge.app` |
| Password | `lumenforge`         |

Session is stored in an httpOnly cookie (`lf_session`).

### Routes

| Path | Description |
| ---- | ----------- |
| `/login` | Log in (redirects to `/studio` if already signed in) |
| `/signup` | Create a demo session |
| `/logout` | Clear session and return to login |
| `/studio` | Features dashboard (protected) |
| `/studio/story-to-video` | Story → Video mock workspace |
| `/studio/text-to-video` | Text → Video mock workspace |
| `/studio/script-to-video` | Script → Video mock workspace |
| `/studio/image-to-video` | Image → Video mock workspace |
| `/studio/characters` | Characters mock workspace |
| `/studio/long-form` | Long-form project mock workspace |

Marketing "Start creating" CTAs go to `/login`. If you already have a session, `/login` redirects to `/studio`.

## Build

```bash
npm run build
npm run start
```

## Scripts

| Command         | Description            |
| -------------- | -------------------- |
| npm install     | Install dependencies     |
| npm run dev     | Local development server |
| npm run build   | Production build         |
| npm run start   | Serve production build   |

## Notes

- Studio Generate actions are **mock AI** (fake progress + preview). Product features are not production-backed yet.
- Social-proof stats and testimonials use fictional marketing copy.
