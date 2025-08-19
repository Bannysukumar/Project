# HES SLA Dashboard

A modern, responsive dashboard application built with Next.js 14, TypeScript, and Ant Design for monitoring and managing SLA metrics.

## 🏗️ Project Structure

```
Project/
├── app/
│   ├── dashboard/           # Dashboard route
│   │   └── page.tsx        # Main dashboard page
│   ├── (auth)/             # Authentication routes (future)
│   ├── api/                # API routes (future)
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   │   └── QualityMetrics.tsx
│   │   ├── features/       # Feature-specific components
│   │   │   ├── PageDataPush/
│   │   │   └── PageDataPull/
│   │   └── layout/         # Layout components
│   │       └── Header.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useResponsive.ts
│   ├── lib/                # Constants and configuration
│   │   └── constants.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── export.ts
│   ├── styles/             # Global styles
│   │   └── globals.css
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (redirects to dashboard)
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Features

- **Responsive Design**: Mobile-first approach with adaptive sidebar
- **Real-time Metrics**: Live data visualization with charts
- **Export Functionality**: CSV export for data analysis
- **AI Assistant**: Integrated copilot widget for user assistance
- **Type Safety**: Full TypeScript support with proper type definitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: Ant Design
- **Charts**: Recharts
- **Styling**: CSS Modules + Global CSS
- **State Management**: React Hooks

## 📱 Responsive Features

- **Mobile Detection**: Automatic sidebar collapse on mobile devices
- **Touch-Friendly**: Optimized for touch interactions
- **Adaptive Layout**: Responsive grid system for different screen sizes

## 🎯 Component Architecture

### UI Components (`/components/ui/`)
Reusable, presentational components that can be used across different features.

### Feature Components (`/components/features/`)
Feature-specific components that implement business logic and data handling.

### Layout Components (`/components/layout/`)
Components responsible for the overall page structure and navigation.

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 📊 Dashboard Sections

### Data Push
- Real-time interval read success rates
- Monthly performance metrics
- OEM performance comparison
- Quality metrics (Consistency, Quality, Security)

### Data Pull
- Command execution tracking
- Progress monitoring
- Performance analytics
- Failed captures analysis

## 🎨 Styling

The application uses a combination of:
- **Global CSS**: For layout and common styles
- **CSS Modules**: For component-specific styling
- **Ant Design**: For consistent UI components and theming

## 🔒 Security

- Type-safe API calls
- Input validation
- Secure data handling

## 🚀 Future Enhancements

- [ ] Authentication system
- [ ] Real-time data updates
- [ ] Advanced filtering and search
- [ ] User preferences and settings
- [ ] Dark mode support
- [ ] Internationalization (i18n)

## 📝 Contributing

1. Follow the established file structure
2. Use TypeScript for all new code
3. Implement proper error handling
4. Add appropriate type definitions
5. Follow the existing naming conventions

## 📄 License

This project is proprietary software developed for HES.
