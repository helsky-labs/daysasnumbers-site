# Landing Page Template

Helsky Labs starter template for landing pages.

## Quick Start

```bash
# Copy this template to a new project
cp -r ../helsky-labs/templates/next-landing ./my-project
cd my-project

# Install dependencies
npm install

# Copy env file and add your keys
cp .env.example .env.local

# Start development server
npm run dev
```

## What's Included

- Next.js 14 with App Router
- Tailwind CSS for styling
- PostHog analytics (auto-initialized)
- Supabase client (ready to use)
- SEO metadata setup
- Basic landing page structure

## Customization Checklist

1. Update `package.json` name
2. Update `app/layout.tsx` metadata (title, description, etc.)
3. Replace placeholder content in `app/page.tsx`
4. Add your favicon to `public/`
5. Add OpenGraph image as `app/opengraph-image.png`
6. Configure environment variables

## Environment Variables

See `.env.example` for all required variables.
