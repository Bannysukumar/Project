<!-- readme-seo: bannysukumar-professional-v4 -->

# SLA Dashboard

SLA Dashboard is a Next.js 14 application. The npm package name is `sla-dashboard`. The menu in `app/lib/constants.ts` lists Home, Meter List, Data Push, Data Pull, Commands, Reports, Admin, and API. Charts use sample values in that same file.

## Overview

The UI dependencies are Ant Design, Ant Design icons, and Recharts. Routes include `app/page.tsx` and `app/dashboard/page.tsx`. `LIVE_INTERVAL_DATA` in `constants.ts` is hard-coded chart data, not a live meter feed. The recorded homepage is https://project-seven-ashy-32.vercel.app.

The repository name is `Project`. This README uses SLA Dashboard because that is the package name and the menu is about meter data push and pull.

## Features

- Menu entries for meter list, data push, data pull, commands, reports, admin, and API
- Dashboard route `app/dashboard/page.tsx`
- Sample live-interval chart data in `app/lib/constants.ts`
- Ant Design and Recharts dependencies

## Tech Stack

| Technology | Where it shows up |
|---|---|
| Next.js 14.0.4 | `package.json` and `next.config.js` |
| React 18 | `package.json` |
| TypeScript | `tsconfig.json` |
| Ant Design | `antd` dependency |
| Recharts | `recharts` dependency |

## Architecture

Next.js App Router → dashboard and home routes → chart data defined in `app/lib/constants.ts`.

## Project Structure

```text
Project/
├── app/page.tsx
├── app/dashboard/page.tsx
├── app/lib/constants.ts
├── app/components/
├── next.config.js
└── package.json
```

## Prerequisites

- Node.js
- npm

## Installation

```bash
git clone https://github.com/Bannysukumar/Project.git
cd Project
npm install
npm run dev
```

`npm run dev` runs `next dev`.

## Usage

Open the home page for the menu, then `app/dashboard` for the dashboard. Data Push and Data Pull are menu labels. The interval chart currently reads `LIVE_INTERVAL_DATA` from constants.

## Demo

https://project-seven-ashy-32.vercel.app

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Licensed under MIT. See [LICENSE](LICENSE).

## Author

Banny Sukumar

GitHub: https://github.com/Bannysukumar
