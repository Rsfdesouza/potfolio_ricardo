# replit.md

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express.js. The application showcases a developer's work through sections for projects, blog posts, and contact information. It features a responsive design with dark/light theme support and uses a PostgreSQL database for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Pattern**: RESTful API with JSON responses
- **Development**: Hot module replacement with Vite integration

### Data Storage Strategy
- **Primary Database**: PostgreSQL for production data
- **Development Storage**: In-memory storage implementation for development/testing
- **ORM**: Drizzle ORM with Zod schema validation
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Database Schema
- **Users**: Authentication and user management
- **Projects**: Portfolio project information with technologies, URLs, and featured status
- **Blog Posts**: Content management with published status and categories
- **Contact Messages**: Form submissions from site visitors

### API Endpoints
- `GET /api/projects` - Retrieve all projects
- `GET /api/projects/featured` - Get featured projects only
- `GET /api/projects/:id` - Get specific project details
- `GET /api/blog` - Retrieve all blog posts
- `GET /api/blog/published` - Get published blog posts only
- `POST /api/contact` - Submit contact form messages

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with personal introduction
- **Skills Section**: Technology showcase with icons
- **About Section**: Personal information and statistics
- **Projects Section**: Featured project grid with technology badges
- **Blog Section**: Latest blog posts preview
- **Contact Section**: Contact form with validation
- **Theme Provider**: Dark/light mode toggle functionality

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack React Query
2. **API Processing**: Express.js routes handle requests and validate data with Zod schemas
3. **Database Operations**: Drizzle ORM performs type-safe database queries
4. **Response Handling**: JSON responses sent back to client with proper error handling
5. **State Management**: React Query caches responses and manages loading states
6. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **zod**: Runtime type validation and schema definition
- **react-hook-form**: Form state management with validation

### Development Tools
- **drizzle-kit**: Database schema management and migrations
- **tsx**: TypeScript execution for development server
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework

### UI Enhancement
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality

## Deployment Strategy

### Build Process
1. **Client Build**: Vite compiles React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Preparation**: Drizzle migrations ensure schema is up-to-date

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment specification (development/production)

### Production Deployment
- Static assets served from `dist/public`
- Express server runs from compiled `dist/index.js`
- Database migrations applied via `npm run db:push`

### Development Workflow
- Hot reload with Vite integration
- TypeScript compilation checking
- In-memory storage for rapid prototyping
- Automatic database schema synchronization

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 04, 2025. Initial setup