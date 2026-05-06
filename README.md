# Levelfolio

Premium gamified portfolio template for professionals who want to present career growth as a clean progression system — mature, recruiter-friendly, and fully config-driven.

![Preview placeholder](./public/preview.png)

## Features

- Career level hero with XP progress
- Career map milestones
- Interactive expandable skill tree
- Project unlock cards and case study pages
- Recruiter mode summary
- Command palette with `CMD/CTRL + K`
- Mobile bottom navigation
- Theme toggle via `next-themes`
- Indonesian dummy content for a realistic senior frontend persona
- Fully editable content from `config/portfolio.config.ts`

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style primitives
- Radix UI Dialog/Slot
- Framer Motion
- Lucide React
- next-themes
- pnpm

## Installation

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Customization Guide

Edit all portfolio content in:

```txt
config/portfolio.config.ts
```

You can change:

- name, role, bio, location, email
- current level and XP
- skills and progress values
- projects and case study details
- milestones
- experience
- achievements
- testimonials
- contact links
- recruiter summary

No UI component edits are required for normal content changes.

## Config Explanation

`portfolio.projects` powers:

- `/projects`
- `/projects/[slug]`
- command palette results
- selected project links on `/resume`

`portfolio.skills` powers:

- homepage skill tree
- command palette searchable skill items

`portfolio.experience` powers:

- `/experience`
- `/resume`
- command palette results

## Folder Structure

```txt
app/                    Next.js routes
components/             Reusable UI and sections
components/ui/          Primitive UI components
config/                 Portfolio content contract
lib/                    Shared utilities
```

## Deployment

Deploy to Vercel:

```bash
pnpm build
```

Then import the repository in Vercel and use the default Next.js settings.

## Contribution Guide

1. Keep the template config-driven.
2. Do not add dead buttons or fake interactions.
3. Preserve accessible keyboard behavior.
4. Keep visual changes restrained and intentional.
5. Test mobile, tablet, and desktop layouts before opening a PR.

## License

MIT License. Use it for personal portfolios, client work, and commercial templates.
