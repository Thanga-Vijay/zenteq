# Deployment Guide - Zenteq Website

This guide covers deploying the Zenteq website as a static site to AWS S3 with CloudFront CDN.

## 🚀 Quick Deploy

### 1. Prerequisites

- AWS Account with S3 and CloudFront access
- GitHub repository with the code
- AWS IAM role configured for GitHub Actions OIDC

### 2. AWS Setup

#### Create S3 Bucket
```bash
aws s3 mb s3://zenteq-in-site
aws s3 website s3://zenteq-in-site --index-document index.html --error-document 404.html
```

#### Create CloudFront Distribution
1. Go to CloudFront console
2. Create distribution
3. Origin: `zenteq-in-site.s3.amazonaws.com`
4. Default root object: `index.html`
5. Note the Distribution ID for the workflow

#### Configure IAM Role for GitHub Actions
Create a role with this trust policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::YOUR_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:YOUR_USERNAME/zenteq-website:*"
        }
      }
    }
  ]
}
```

Attach policies:
- `AmazonS3FullAccess` (or custom policy for your bucket)
- `CloudFrontFullAccess` (or custom policy for your distribution)

### 3. GitHub Secrets

Add these secrets to your GitHub repository:

- `AWS_ACCOUNT_ID`: Your AWS account ID
- `AWS_OIDC_ROLE_NAME`: The name of the IAM role you created

### 4. Update Workflow Configuration

Edit `.github/workflows/deploy.yml`:

```yaml
env:
  NODE_VERSION: 20
  AWS_REGION: ap-south-1
  S3_BUCKET: zenteq-in-site            # Your bucket name
  CLOUDFRONT_DISTRIBUTION_ID: EXXXXXXXXXXXX # Your distribution ID
```

### 5. Deploy

Push to `main` branch:
```bash
git add .
git commit -m "Configure static export and deployment"
git push origin main
```

The GitHub Actions workflow will:
1. Build the Next.js app
2. Generate static files in `/out`
3. Upload to S3
4. Invalidate CloudFront cache

## 🔧 Local Testing

### Build Static Site
```bash
npm run build
```

### Preview Static Site
```bash
npx serve out
# Visit http://localhost:3000
```

### Test Contact Form
The contact form uses an API route that requires a server. For production:
- Deploy to Vercel/Netlify for API routes
- Or use a serverless function (AWS Lambda, Vercel Functions)
- Or integrate with a third-party form service (Formspree, Netlify Forms)

## 📁 Static Export Structure

The build generates:
```
out/
├── index.html          # Home page
├── about/
│   └── index.html      # About page
├── services/
│   └── index.html      # Services page
├── contact/
│   └── index.html      # Contact page
├── _next/              # Next.js assets
├── images/             # Static images
└── favicon.ico         # Favicon
```

## 🔄 Continuous Deployment

Every push to `main` triggers:
1. ✅ Lint & Type check
2. ✅ Build & Static export
3. ✅ Deploy to S3
4. ✅ Invalidate CloudFront

## 🛠️ Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run typecheck`
- Verify linting: `npm run lint`

### Deployment Issues
- Verify AWS credentials and permissions
- Check S3 bucket exists and is accessible
- Ensure CloudFront distribution is active
- Review GitHub Actions logs for detailed errors

### Contact Form Issues
- API routes don't work with static export
- Consider using a form service or serverless functions
- Test form submission in development mode first

## 📞 Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify AWS configuration
3. Test locally with `npm run build && npx serve out`
4. Review this deployment guide

## 🔗 Useful Links

- [Next.js Static Export](https://nextjs.org/docs/advanced-features/static-html-export)
- [AWS S3 Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html)
- [GitHub Actions OIDC](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
