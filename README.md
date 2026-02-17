# TECHOTSAV 2K26 — Official Website

> **INTO THE TECHNO VERSE**
> Inter-Collegiate Technical & Cultural Fest — Department of Computer Science, Alva's College, Moodubidire.
> **Date:** 2nd – 3rd March 2026 | **Prize Pool:** ₹15,000

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Components](#pages--components)
- [Events](#events)
- [Theming & Styling](#theming--styling)
- [Data & Configuration](#data--configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This is the official website for **TECHOTSAV 2K26**, the inter-collegiate tech & cultural fest hosted by the Department of Computer Science at Alva's College, Moodubidire. The site serves as the primary information hub — featuring event details, registration links, rules, committee contacts, and more — all wrapped in a futuristic cyberpunk-themed dark UI.

---

## Tech Stack

| Technology               | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| **React 18**             | UI library                                          |
| **TypeScript**           | Type-safe JavaScript                                |
| **Vite**                 | Build tool & dev server                             |
| **Tailwind CSS**         | Utility-first CSS framework                         |
| **shadcn/ui**            | Accessible, styled UI components (Radix primitives) |
| **Framer Motion**        | Animations & transitions                            |
| **React Scroll**         | Smooth scroll navigation                            |
| **React Router DOM**     | Client-side routing                                 |
| **Lucide React**         | Icon library                                        |
| **TanStack React Query** | Data fetching & caching                             |
| **Vitest**               | Unit testing                                        |

---

## Project Structure

```
techotsav-2k26/
├── public/                  # Static assets
│   └── robots.txt
├── src/
│   ├── main.tsx             # App entry point
│   ├── App.tsx              # Root component with routing & providers
│   ├── index.css            # Global styles, theme variables, custom utilities
│   ├── App.css              # Additional app-level styles
│   ├── vite-env.d.ts        # Vite type declarations
│   │
│   ├── components/          # UI components
│   │   ├── Navbar.tsx       # Fixed nav bar with scroll-aware styling & mobile menu
│   │   ├── NavLink.tsx      # Reusable NavLink wrapper (React Router)
│   │   ├── Hero.tsx         # Full-screen landing section with CTA
│   │   ├── About.tsx        # College & fest info cards
│   │   ├── Events.tsx       # Event card grid (7 events)
│   │   ├── Rules.tsx        # General rules & registration deadline
│   │   ├── Committee.tsx    # Staff & student coordinator listings
│   │   ├── Footer.tsx       # Contact section with social/registration links
│   │   └── ui/              # shadcn/ui component library (40+ components)
│   │
│   ├── data/
│   │   └── constants.ts     # All event data, rules, coordinators, nav links
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx   # Mobile viewport detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper for className merging)
│   │
│   ├── pages/
│   │   ├── Index.tsx        # Main landing page (assembles all sections)
│   │   └── NotFound.tsx     # 404 page
│   │
│   └── test/
│       ├── setup.ts         # Test setup configuration
│       └── example.test.ts  # Example test file
│
├── index.html               # HTML entry
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
├── vitest.config.ts         # Vitest configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── eslint.config.js         # ESLint configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18 (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** or **bun** package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd techotsav-2k26

# Install dependencies
npm install
# or with bun
bun install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Available Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start Vite dev server with HMR       |
| `npm run build`      | Production build                     |
| `npm run build:dev`  | Development build                    |
| `npm run preview`    | Preview the production build locally |
| `npm run lint`       | Run ESLint                           |
| `npm run test`       | Run tests once (Vitest)              |
| `npm run test:watch` | Run tests in watch mode              |

---

## Pages & Components

### Pages

| Page         | Route | Description                                                 |
| ------------ | ----- | ----------------------------------------------------------- |
| **Index**    | `/`   | Main single-page landing — assembles all section components |
| **NotFound** | `*`   | 404 catch-all page                                          |

### Section Components

| Component     | Section ID  | Description                                                                                                  |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| **Navbar**    | —           | Fixed top navigation with scroll-aware background, mobile hamburger menu, and "Register Now" CTA             |
| **Hero**      | `hero`      | Full-screen intro with fest branding, highlight pills (prize pool, date, venue), and "Explore Events" button |
| **About**     | `about`     | Two glass-styled cards — "About the College" and "About Techotsav 2026" with hover neon borders              |
| **Events**    | `events`    | Responsive 3-column grid of 7 event cards with icons, details, fees, and coordinator contacts                |
| **Rules**     | `rules`     | Animated rule list with checkmark icons and a highlighted registration deadline card                         |
| **Committee** | `committee` | Two-column layout showing staff coordinators (3) and student coordinators (2) with contact info              |
| **Footer**    | `footer`    | "Get Connected" section with email link, icon buttons for registration/maps/Instagram, and copyright         |

---

## Events

| #   | Event           | Type           | Team Size     | Fee       | Rounds      |
| --- | --------------- | -------------- | ------------- | --------- | ----------- |
| 1   | **TECH-KNOW**   | IT Quiz        | 2 per team    | ₹300/team | 3           |
| 2   | **RHYTHM**      | Cultural Dance | 8–10 per team | ₹500/team | Indian Folk |
| 3   | **TECH-TIX**    | IT Manager     | 1 participant | ₹150      | 3           |
| 4   | **PIXEL-CRAFT** | Web Designing  | 2 per team    | ₹300/team | 2           |
| 5   | **BYTE-BATTLE** | Coding         | 2 per team    | ₹300/team | 3           |
| 6   | **CINE-SCOPE**  | Videography    | 1 participant | ₹150      | 3           |
| 7   | **TECH-REVEAL** | Product Launch | 3 per team    | ₹300/team | 1           |

---

## Theming & Styling

The site uses a **dark cyberpunk / neon** theme with the following design system:

### Fonts

- **Display / Headings:** [Orbitron](https://fonts.google.com/specimen/Orbitron) (weights 400–900) — futuristic tech aesthetic
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) (weights 300–700) — clean readability

### Color Palette

| Token              | HSL            | Visual                   |
| ------------------ | -------------- | ------------------------ |
| Background         | `220 50% 3%`   | Near-black deep navy     |
| Foreground         | `185 100% 95%` | Bright cyan-tinted white |
| Primary            | `185 100% 50%` | Neon cyan                |
| Secondary / Accent | `270 76% 53%`  | Neon purple              |
| Muted              | `220 30% 12%`  | Dark slate               |

### Custom CSS Utilities

| Class               | Effect                                                            |
| ------------------- | ----------------------------------------------------------------- |
| `.text-gradient`    | Cyan-to-purple gradient text                                      |
| `.glass`            | Glassmorphism — semi-transparent bg, backdrop blur, subtle border |
| `.glass-strong`     | Stronger glass variant — more opacity & blur                      |
| `.neon-glow`        | Cyan box-shadow glow                                              |
| `.neon-glow-purple` | Purple box-shadow glow                                            |
| `.neon-border`      | Primary-colored border with inset + outer glow                    |
| `.grid-bg`          | 60px grid overlay (terminal/matrix aesthetic)                     |
| `.radial-glow`      | Centered radial gradient ambient light                            |
| `.font-display`     | Applies Orbitron font                                             |

---

## Data & Configuration

All static data is centralized in `src/data/constants.ts`:

- **`NAV_LINKS`** — Navigation items with scroll targets
- **`EVENTS`** — Full event details (name, description, icon, fees, coordinators)
- **`RULES`** — General fest rules
- **`REGISTRATION_DEADLINE`** — "25th February 2026"
- **`STAFF_COORDINATORS`** — 3 staff members
- **`STUDENT_COORDINATORS`** — 2 student coordinators with phone numbers
- **`CONTACT_EMAIL`** — techotsav26@gmail.com

To modify event details, rules, or contacts, edit `src/data/constants.ts` — changes will reflect across all components.

---

## Deployment

### Build for Production

```sh
npm run build
```

Output will be in the `dist/` folder. Deploy to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

### Preview Build Locally

```sh
npm run preview
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and commit: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

© 2026 TECHOTSAV — Department of Computer Science, Alva's College, Moodubidire. All rights reserved.
