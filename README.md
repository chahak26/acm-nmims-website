# ACM NMIMS Indore — Official Chapter Website

> WebSprint 2026 Submission | "Preserving Legacy. Showcasing Innovation."

Official ACM Student Chapter website for NMIMS University, Indore (STME). Built as part of the WebSprint 2026 challenge.

## Live Demo

Deploy to Vercel and add your live URL here.

## Tech Stack

- **Frontend:** React 19 + Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **Data:** Static JSON files (no backend required)
- **Deployment:** Vercel / Netlify

## Modules (9/9 Complete)

| # | Module | Route |
|---|--------|-------|
| 1 | Home Page | `/` |
| 2 | About ACM & Chapter | `/about` |
| 3 | Events Archive | `/events` |
| 4 | Gallery | `/gallery` |
| 5 | Team & Leadership | `/team` |
| 6 | Project Showcase | `/projects` |
| 7 | Achievements & Awards | `/achievements` |
| 8 | Live Event Tracking | `/live` |
| 9 | Membership & Recruitment | `/join` |
| + | Blog / Newsletters | `/blog` |
| + | Contact Us | `/contact` |

## Local Setup

```bash
git clone <your-repo-url>
cd acm-nmims-website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → Deploy (auto-detects Vite)
4. `vercel.json` handles SPA routing

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Footer, Cards, etc.)
├── pages/          # Route pages (11 modules)
├── data/           # JSON content files (easy to edit)
│   ├── events.json
│   ├── team.json
│   ├── projects.json
│   ├── achievements.json
│   ├── gallery.json
│   └── blog.json
├── App.jsx         # Router setup
└── index.css       # Tailwind + custom theme
```

## Editing Content

All content lives in `src/data/*.json`. Update team names, events, projects, etc. without touching component code.

## Submission Deliverables

- [x] GitHub Repository (this repo)
- [ ] Deployed Live Link (Vercel)
- [ ] Demo Video (see `DEMO_VIDEO_SCRIPT.md`)
- [ ] Documentation PDF (see `DOCUMENTATION.md`)

**Submission Form:** https://forms.gle/DoeMttV7M61Lbo2PA  
**Deadline:** 30 June 2026, 11:59 PM

## Future Improvements

- Backend API for form submissions (Node.js + MongoDB)
- Admin dashboard for content management
- Real-time event tracking with WebSockets
- CMS integration for blog posts
- ACM Outstanding Chapter Website Award optimization

## License

Built for ACM NMIMS Indore Student Chapter. © 2026
