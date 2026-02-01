# COMPLETE DEPLOYMENT INSTRUCTIONS

## Step 1: Create GitHub Repository
1. Go to github.com
2. Click "New repository"
3. Name it "betting-website"
4. Make it public or private (your choice)
5. Don't initialize with README
6. Click "Create repository"

## Step 2: Upload Code to GitHub
1. Open Terminal
2. Navigate to your project:
   ```bash
   cd /Users/mac/Desktop/siteweb/1xlite_17342.bar
   ```
3. Initialize git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
4. Connect to GitHub (replace with your repo URL):
   ```bash
   git remote add origin https://github.com/yourusername/betting-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Render
1. Go to render.com
2. Sign up with GitHub
3. Click "New Web Service"
4. Select your "betting-website" repository
5. Render will auto-detect the configuration
6. Click "Create Web Service"
7. Wait 5-10 minutes for deployment

## Step 4: Set Up Database
1. In Render dashboard, click "New" → "Database"
2. Choose "MongoDB"
3. Select free tier
4. Name it "betting-db"
5. Copy the connection string

## Step 5: Configure Environment Variables
1. Go to your web service in Render
2. Click "Environment" tab
3. Add:
   - Key: MONGODB_URI
   - Value: your MongoDB connection string
4. Click "Save Changes"

## Step 6: Custom Domain (Optional)
1. Buy a domain from any registrar
2. In Render dashboard:
   - Go to your service
   - Click "Settings" tab
   - Scroll to "Custom Domains"
   - Add your domain
3. Update DNS with your domain registrar
4. Add CNAME record pointing to your Render URL

## Testing
1. Visit your Render URL (shown in dashboard)
2. Test all pages and functionality
3. Verify registration/login works
4. Test betting features

## Your Control Remains Complete:
- ✅ You own all authentication logic
- ✅ You control user registration
- ✅ You manage betting game mechanics
- ✅ All user data stays in your database
- ✅ You make all business decisions