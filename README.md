# Physical AI & Humanoid Robotics Book

Welcome to the Physical AI & Humanoid Robotics educational book - a comprehensive online resource built with Docusaurus and deployed to GitHub Pages. This book provides in-depth coverage of Physical AI concepts from foundational ROS 2 principles to advanced topics like vision-language-action models and cognitive planning.

## About This Book

This educational resource was developed using:
- **Spec-Kit Plus methodology** for structured development
- **Qwen AI** for content generation and enhancement
- **Docusaurus 3.x** for modern documentation experience
- **Interactive AI Features** using react-chatbot-kit for enhanced user experience
- **Full-site Authentication** using Supabase for secure access
- **GitHub Actions** for automated deployment

The book is organized into progressive modules that build your understanding from fundamentals to advanced applications:

### Module 1: ROS 2 (Robot Operating System 2)
- Introduction to Physical AI concepts
- ROS 2 architecture and fundamentals
- Communication patterns and message passing
- Building and managing ROS 2 packages
- URDF for robot description

### Module 2: Digital Twin & Simulation
- Introduction to simulation environments
- Gazebo simulation platform
- Sensor simulation techniques
- Advanced simulation scenarios
- Unity visualization for robotics

### Module 3: Isaac Platform
- Isaac platform introduction
- Isaac Sim for high-fidelity simulation
- Synthetic data generation
- Isaac ROS integration
- Navigation 2 (Nav2) with Isaac

### Module 4: Vision-Language-Action Models
- Large Language Models and robotics integration
- Voice-to-action systems
- Cognitive planning for robotics
- Multi-modal interaction
- Capstone project integrating all concepts

## Authentication

This book is protected by a full-site authentication system using Supabase. To access the content:

1. **Sign in with Google** - Primary authentication method
2. **Email and Password** - Alternative authentication method
3. **Sign up** - Create a new account if you don't have one

Once authenticated, you'll have full access to all book content with a logout button available in the navbar.

### Setting up Supabase Authentication

To run this project locally with authentication, you need to configure Supabase. This is a **required step** - the application will not work without proper Supabase configuration.

**📖 For detailed step-by-step instructions, see [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**

**Quick Setup Checklist:**

1. ✅ Create a Supabase project at [supabase.io](https://supabase.io)
2. ✅ Get your project URL and anon key from **Settings → API**
3. ✅ Create `.env.local` file with your credentials:
   ```
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   ```
4. ✅ Enable **Email** provider in **Authentication → Providers → Email**
5. ✅ Enable **Google** provider in **Authentication → Providers → Google**:
   - Get OAuth credentials from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   - Add redirect URI: `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`
   - Enter Client ID and Client Secret in Supabase
6. ✅ Configure redirect URLs in **Authentication → URL Configuration**

**Common Error**: If you see "provider is not enabled", the Google provider is not enabled in your Supabase dashboard. See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for detailed troubleshooting.

## Installation

```bash
npm install
# or
yarn install
```

## Local Development

```bash
npm start
# or
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
# or
yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Interactive Chatbot

This book features an AI-powered chatbot integrated using react-chatbot-kit to enhance your learning experience. The chatbot:
- Provides instant answers to questions about the content
- Offers helpful explanations and examples
- Is positioned at the bottom right of the screen
- Is designed to be non-intrusive to your reading experience

## Target Audience

This book is designed for:
- Graduate students and researchers in robotics and AI
- Engineers developing robotic systems
- Developers interested in AI-physical world interactions
- Anyone curious about the future of intelligent physical systems

## Contributing

This is an open educational resource. We welcome contributions in the form of:
- Corrections and improvements to existing content
- New chapters or modules on relevant topics
- Code examples and exercises
- Translations to other languages

To contribute, please fork this repository and submit a pull request.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The workflow is defined in `.github/workflows/deploy.yml`.

### GitHub Pages Setup

To deploy this site to GitHub Pages:

1. Ensure your repository is set up with GitHub Pages (Settings → Pages → Source: GitHub Actions)
2. The deployment workflow will automatically trigger on pushes to the `main` branch
3. Make sure your `baseUrl` in `docusaurus.config.ts` matches your GitHub Pages URL structure
4. Configure your Supabase project with the correct production redirect URLs

The site will be available at: `https://uzairshaikh346.github.io/humanoid-robotics/`

### Manual Deployment

If you want to manually deploy:
```bash
GIT_USER=https://github.com/uzairshaikh346 npm run deploy
```

If you are using GitHub pages for hosting, this command builds the website and pushes to the `gh-pages` branch.