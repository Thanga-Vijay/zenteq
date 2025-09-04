# Zenteq Pvt. Ltd. - Marketing Website

A production-ready marketing website for Zenteq Pvt. Ltd., built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui components with custom branding
- **Contact Form**: API route with Zoho Mail SMTP integration
- **SEO Optimized**: Metadata, sitemap, robots.txt, and structured data
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance**: Optimized for Lighthouse scores ≥95
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Static Export**: Ready for S3/CloudFront deployment
- **CI/CD**: GitHub Actions for automated deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Library**: shadcn/ui components
- **Icons**: lucide-react
- **Fonts**: Inter (body), Poppins (headings)
- **Forms**: react-hook-form + zod validation
- **Email**: nodemailer with Zoho Mail SMTP
- **Animation**: framer-motion
- **Deployment**: Static export for S3/CloudFront or Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Zoho Mail account for SMTP
- AWS account (for S3/CloudFront deployment)

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd zenteq-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Setup

```bash
# Copy environment variables
cp env.example .env.local

# Edit .env.local with your Zoho Mail credentials
```

### 3. Configure Zoho Mail SMTP

1. Log in to your Zoho Mail account
2. Go to Settings → Mail Accounts → Security
3. Generate an App Password
4. Update `.env.local` with your credentials:

```env
ZOHO_HOST=smtp.zoho.com
ZOHO_PORT=587
ZOHO_SECURE=false
ZOHO_USER=your-email@zenteq.in
ZOHO_PASS=your-app-password
CONTACT_TO=contact@zenteq.in
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 5. Build for Production

```bash
# Build static site
npm run build

# Preview static site
npx serve out
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── service-card.tsx  # Service cards
│   ├── process-timeline.tsx # Process timeline
│   ├── pricing-bands.tsx # Pricing section
│   ├── cta-banner.tsx    # Call-to-action
│   └── contact-form.tsx  # Contact form
├── lib/                  # Utility functions
│   ├── utils.ts          # Utility functions
│   └── actions.ts        # Server actions
├── hooks/                # Custom React hooks
│   └── use-toast.ts      # Toast notifications
└── public/               # Static assets
```

## 🎨 Brand Colors

The website uses a custom brand color palette defined in Tailwind CSS:

- **Navy (Primary)**: `#1D3557`
- **Light Gray (Surface)**: `#F1F5F9`
- **Accent Green (CTA)**: `#10B981`
- **Black**: `#000000`
- **White**: `#FFFFFF`

## 📧 Contact Form

The contact form includes:

- **Validation**: Zod schema validation
- **Anti-spam**: Honeypot field protection
- **Email**: Zoho Mail SMTP integration
- **Success/Error**: Toast notifications
- **Accessibility**: Proper labels and ARIA attributes

## 🚀 Deployment

### Static Export (S3 + CloudFront)

The website is configured for static export and can be deployed to AWS S3 with CloudFront CDN.

**Quick Deploy:**
1. Follow the [Deployment Guide](DEPLOYMENT.md)
2. Push to `main` branch
3. GitHub Actions will automatically deploy to S3 and invalidate CloudFront

**Manual Deploy:**
```bash
npm run build
# Upload contents of /out directory to S3
```

### Vercel Deployment

For API routes support (contact form), deploy to Vercel:

```bash
npm install -g vercel
vercel
```

## 📊 Performance & SEO

### Lighthouse Scores Target
- **Performance**: ≥95
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

### SEO Features
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt
- Canonical URLs
- Social media cards

## 🧪 Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format
```

## 📝 Content Management

### Services
Update service information in:
- `app/page.tsx` (homepage services)
- `app/services/page.tsx` (detailed services)

### Pricing
Update pricing bands in:
- `components/pricing-bands.tsx`

### Company Information
Update company details in:
- `app/about/page.tsx`
- `components/footer.tsx`

## 🔧 Customization

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` with metadata
3. Update navigation in `components/header.tsx`
4. Add to sitemap in `app/sitemap.ts`

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

### Components
- UI components: `components/ui/`
- Page components: `components/`
- Custom hooks: `hooks/`

## 📞 Support

For technical support or questions:
- Email: contact@zenteq.in
- Website: https://zenteq.in

## 📄 License

This project is proprietary to Zenteq Pvt. Ltd. All rights reserved.

## 🤝 Contributing

This is a private project for Zenteq Pvt. Ltd. Please contact us for any collaboration opportunities.

---

Built with ❤️ by Zenteq Pvt. Ltd.
