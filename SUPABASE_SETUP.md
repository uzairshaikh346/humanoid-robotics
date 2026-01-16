# Supabase Authentication Setup Guide

This guide will help you configure Supabase authentication for the Humanoid Robotics & Physical AI Book.

## Prerequisites

1. A Supabase account (sign up at [supabase.io](https://supabase.io))
2. A Supabase project created
3. Google Cloud Console account (for Google OAuth)

## Step-by-Step Configuration

### Step 1: Get Your Supabase Credentials

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Navigate to **Settings → API**
4. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### Step 2: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Replace `your-project-ref` and `your-anon-key-here` with your actual values.

### Step 3: Enable Email/Password Authentication

1. In Supabase Dashboard, go to **Authentication → Providers**
2. Find **Email** provider
3. Ensure it's **enabled** (should be enabled by default)
4. Configure settings if needed:
   - Enable "Confirm email" if you want email verification
   - Set up email templates if needed

### Step 4: Enable Google OAuth Provider

#### 4.1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services → Credentials**
4. Click **Create Credentials → OAuth client ID**
5. Configure OAuth consent screen (if not done):
   - Choose **External** user type
   - Fill in app name, user support email, developer contact
   - Add scopes: `email`, `profile`, `openid`
   - Add test users if needed
6. Create OAuth client:
   - Application type: **Web application**
   - Name: "Humanoid Robotics Book" (or your choice)
   - Authorized redirect URIs: Add this URL:
     ```
     https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback
     ```
     Replace `YOUR_PROJECT_REF` with your Supabase project reference
7. Click **Create**
8. Copy the **Client ID** and **Client Secret**

#### 4.2: Configure Google Provider in Supabase

1. In Supabase Dashboard, go to **Authentication → Providers**
2. Find **Google** provider
3. Click to expand and **Enable** it
4. Enter the credentials:
   - **Client ID**: Paste your Google OAuth Client ID
   - **Client Secret**: Paste your Google OAuth Client Secret
5. Click **Save**

### Step 5: Configure Redirect URLs

1. In Supabase Dashboard, go to **Authentication → URL Configuration**
2. Set the following:

   **Site URL** (for production):
   ```
   https://uzairshaikh346.github.io/humanoid-robotics
   ```

   **Redirect URLs** (add both development and production):
   ```
   http://localhost:3000/**
   https://uzairshaikh346.github.io/humanoid-robotics/**
   ```

3. Click **Save**

### Step 6: Verify Configuration

1. Restart your development server:
   ```bash
   npm start
   ```

2. Try signing in:
   - **Email/Password**: Should work if email provider is enabled
   - **Google OAuth**: Should redirect to Google if configured correctly

## Troubleshooting

### Error: "provider is not enabled"

**Solution**: 
- Go to **Authentication → Providers → Google**
- Ensure the toggle is **ON** (green/enabled)
- Verify Client ID and Client Secret are entered correctly
- Save and wait a few seconds for changes to propagate

### Error: "redirect_uri_mismatch"

**Solution**:
- Check that the redirect URI in Google Cloud Console matches exactly:
  `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`
- No trailing slashes
- Check that redirect URLs in Supabase include your site URL

### Error: "invalid_client"

**Solution**:
- Verify Client ID and Client Secret in Supabase match Google Cloud Console
- Check for extra spaces or characters
- Regenerate credentials in Google Cloud Console if needed

### Environment Variables Not Loading

**Solution**:
- Ensure `.env.local` is in the project root (same level as `package.json`)
- Restart the development server after creating/modifying `.env.local`
- Check that variable names are exactly: `SUPABASE_URL` and `SUPABASE_ANON_KEY`
- No quotes around values in `.env.local`

### Still Having Issues?

1. Check browser console for detailed error messages
2. Check Supabase Dashboard → Logs for authentication errors
3. Verify your Supabase project is active (not paused)
4. Ensure you're using the correct project reference in URLs

## Production Deployment

For production (GitHub Pages), you'll need to:

1. Set environment variables in your deployment platform (if using GitHub Actions, add them as secrets)
2. Update redirect URLs in Supabase to include your production URL
3. Update Google OAuth redirect URI to include production callback URL

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- The `anon` key is safe to use client-side (it's public)
- Keep your `service_role` key secret (not needed for this setup)
