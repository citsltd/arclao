# ARC Lao Company Website

## Overview

This is a corporate website for ARC Lao Sole Company Ltd, a technological innovation and infrastructure development company operating in Southeast Asia. The application showcases the company's expertise across multiple sectors including EV infrastructure, defense, information technology, energy, automotive, and infrastructure development. Built as a modern full-stack web application with a focus on professional presentation and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system implementing ARC Lao brand colors and typography
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui design system
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Responsive Design**: Mobile-first approach with custom breakpoints and animations

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules for consistency across frontend and backend
- **Architecture Pattern**: RESTful API design with modular route handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Development**: Hot module replacement and error overlay for enhanced developer experience

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for consistency
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Component Design System
- **Design Philosophy**: Consistent design language with custom CSS variables for theming
- **Typography**: Inter font family for modern, clean appearance
- **Color Palette**: Custom ARC Lao brand colors with semantic color tokens
- **Animations**: Custom CSS animations for enhanced user interactions
- **Accessibility**: ARIA-compliant components with keyboard navigation support

### Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **Path Aliases**: TypeScript path mapping for clean imports and better code organization
- **Code Quality**: Strict TypeScript configuration with comprehensive type checking
- **Asset Management**: Centralized asset handling with optimized image loading

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect
- **Drizzle Zod**: Integration for runtime type validation

### UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Modern icon library for consistent iconography
- **Font Awesome**: Icon library for specialized icons

### State Management & Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration with validation libraries

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

### Utilities & Enhancements
- **Class Variance Authority**: Type-safe CSS class composition
- **clsx**: Conditional CSS class utility
- **date-fns**: Date manipulation and formatting
- **Wouter**: Minimalist router for React applications
- **CMDK**: Command palette component for enhanced navigation

### External Services
- **Unsplash**: Stock photography for hero images and section backgrounds
- **Google Fonts**: Inter font family loading
- **Replit**: Development environment integration and deployment platform