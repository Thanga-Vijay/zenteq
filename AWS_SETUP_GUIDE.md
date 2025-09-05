# AWS Setup Guide for Zenteq Website Deployment

This guide will help you set up AWS S3 + CloudFront deployment for your Zenteq website.

## 🚀 Quick Setup (Recommended)

### Option 1: Using AWS Access Keys (Easier)

1. **Create AWS S3 Bucket**
   ```bash
   # Replace 'zenteq-in' with your desired bucket name
   aws s3 mb s3://zenteq-in
   aws s3 website s3://zenteq-in --index-document index.html --error-document 404.html
   ```

2. **Create CloudFront Distribution**
   - Go to CloudFront console
   - Create distribution
   - Origin: `zenteq-in.s3.amazonaws.com`
   - Default root object: `index.html`
   - Note the Distribution ID

3. **Create IAM User for GitHub Actions**
   ```bash
   # Create user
   aws iam create-user --user-name github-actions-zenteq
   
   # Create policy
   aws iam create-policy --policy-name ZenteqDeployPolicy --policy-document '{
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:GetObject",
           "s3:PutObject",
           "s3:DeleteObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::zenteq-in",
           "arn:aws:s3:::zenteq-in/*"
         ]
       },
       {
         "Effect": "Allow",
         "Action": [
           "cloudfront:CreateInvalidation"
         ],
         "Resource": "*"
       }
     ]
   }'
   
   # Attach policy to user
   aws iam attach-user-policy --user-name github-actions-zenteq --policy-arn arn:aws:iam::YOUR_ACCOUNT_ID:policy/ZenteqDeployPolicy
   
   # Create access keys
   aws iam create-access-key --user-name github-actions-zenteq
   ```

4. **Add GitHub Secrets**
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   Add these secrets:
   - `AWS_ACCESS_KEY_ID`: Your access key ID
   - `AWS_SECRET_ACCESS_KEY`: Your secret access key
   - `AWS_REGION`: `ap-south-1` (or your preferred region)
   - `S3_BUCKET`: `zenteq-in`
   - `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

### Option 2: Using AWS OIDC (More Secure)

1. **Create OIDC Identity Provider**
   ```bash
   aws iam create-open-id-connect-provider \
     --url https://token.actions.githubusercontent.com \
     --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1 \
     --client-id-list sts.amazonaws.com
   ```

2. **Create Trust Policy**
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
             "token.actions.githubusercontent.com:sub": "repo:Thanga-Vijay/zenteq:*"
           }
         }
       }
     ]
   }
   ```

3. **Create IAM Role**
   ```bash
   aws iam create-role --role-name GitHubActionsZenteqRole --assume-role-policy-document file://trust-policy.json
   ```

4. **Add GitHub Secrets**
   - `AWS_ACCOUNT_ID`: Your AWS account ID
   - `AWS_OIDC_ROLE_NAME`: `GitHubActionsZenteqRole`

## 🔧 Manual Deployment (For Testing)

If you want to test deployment manually:

```bash
# Build the site
npm run build

# Deploy to S3
aws s3 sync out/ s3://zenteq-in --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🌐 Access Your Site

After deployment, your site will be available at:
- **S3 Website**: `http://zenteq-in.s3-website.ap-south-1.amazonaws.com`
- **CloudFront**: `https://YOUR_DISTRIBUTION_ID.cloudfront.net`
- **Custom Domain**: Set up Route 53 for `zenteq.in`

## 🔍 Troubleshooting

### Access Denied Error
- Check IAM permissions
- Verify bucket name and region
- Ensure CloudFront distribution is properly configured

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors

### Deployment Issues
- Verify AWS credentials
- Check S3 bucket permissions
- Ensure CloudFront distribution is active

## 📝 Next Steps

1. Set up custom domain with Route 53
2. Configure SSL certificate with ACM
3. Set up monitoring with CloudWatch
4. Configure backup and disaster recovery
