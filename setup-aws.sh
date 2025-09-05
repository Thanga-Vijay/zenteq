#!/bin/bash

# AWS Setup Script for Zenteq Website Deployment
# This script helps you set up AWS resources for deployment

set -e

echo "🚀 Setting up AWS resources for Zenteq website deployment..."

# Configuration
BUCKET_NAME="zenteq-in"
REGION="ap-south-1"
USER_NAME="github-actions-zenteq"
POLICY_NAME="ZenteqDeployPolicy"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first:"
    echo "   https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Check if AWS is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

echo "✅ AWS CLI is configured"

# Get AWS Account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo "📋 AWS Account ID: $AWS_ACCOUNT_ID"

# Create S3 bucket
echo "🪣 Creating S3 bucket: $BUCKET_NAME"
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    aws s3 mb "s3://$BUCKET_NAME" --region $REGION
    echo "✅ S3 bucket created: $BUCKET_NAME"
else
    echo "ℹ️  S3 bucket already exists: $BUCKET_NAME"
fi

# Configure S3 bucket for website hosting
echo "🌐 Configuring S3 bucket for website hosting..."
aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document 404.html

# Create bucket policy for public read access
echo "🔓 Setting up bucket policy for public read access..."
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
rm bucket-policy.json
echo "✅ Bucket policy configured"

# Create IAM user for GitHub Actions
echo "👤 Creating IAM user: $USER_NAME"
if aws iam get-user --user-name $USER_NAME &> /dev/null; then
    echo "ℹ️  IAM user already exists: $USER_NAME"
else
    aws iam create-user --user-name $USER_NAME
    echo "✅ IAM user created: $USER_NAME"
fi

# Create IAM policy
echo "📜 Creating IAM policy: $POLICY_NAME"
cat > deploy-policy.json << EOF
{
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
                "arn:aws:s3:::$BUCKET_NAME",
                "arn:aws:s3:::$BUCKET_NAME/*"
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
}
EOF

POLICY_ARN="arn:aws:iam::$AWS_ACCOUNT_ID:policy/$POLICY_NAME"
if aws iam get-policy --policy-arn $POLICY_ARN &> /dev/null; then
    echo "ℹ️  IAM policy already exists: $POLICY_NAME"
else
    aws iam create-policy --policy-name $POLICY_NAME --policy-document file://deploy-policy.json
    echo "✅ IAM policy created: $POLICY_NAME"
fi
rm deploy-policy.json

# Attach policy to user
echo "🔗 Attaching policy to user..."
aws iam attach-user-policy --user-name $USER_NAME --policy-arn $POLICY_ARN
echo "✅ Policy attached to user"

# Create access keys
echo "🔑 Creating access keys..."
ACCESS_KEY_OUTPUT=$(aws iam create-access-key --user-name $USER_NAME)
ACCESS_KEY_ID=$(echo $ACCESS_KEY_OUTPUT | jq -r '.AccessKey.AccessKeyId')
SECRET_ACCESS_KEY=$(echo $ACCESS_KEY_OUTPUT | jq -r '.AccessKey.SecretAccessKey')

echo ""
echo "🎉 AWS setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Add these secrets to your GitHub repository:"
echo "   - AWS_ACCESS_KEY_ID: $ACCESS_KEY_ID"
echo "   - AWS_SECRET_ACCESS_KEY: $SECRET_ACCESS_KEY"
echo "   - AWS_REGION: $REGION"
echo "   - S3_BUCKET: $BUCKET_NAME"
echo ""
echo "2. Create a CloudFront distribution:"
echo "   - Go to CloudFront console"
echo "   - Create distribution"
echo "   - Origin: $BUCKET_NAME.s3.amazonaws.com"
echo "   - Default root object: index.html"
echo "   - Add the Distribution ID as CLOUDFRONT_DISTRIBUTION_ID secret"
echo ""
echo "3. Test deployment by pushing to main branch"
echo ""
echo "🌐 Your site will be available at:"
echo "   - S3: http://$BUCKET_NAME.s3-website.$REGION.amazonaws.com"
echo "   - CloudFront: https://YOUR_DISTRIBUTION_ID.cloudfront.net"
echo ""
echo "⚠️  Keep your AWS credentials secure and never commit them to git!"
