# Physical AI & Humanoid Robotics Book

Welcome to the Physical AI & Humanoid Robotics educational book - a comprehensive online resource built with Docusaurus and deployed to GitHub Pages. This book provides in-depth coverage of Physical AI concepts from foundational ROS 2 principles to advanced topics like vision-language-action models and cognitive planning.

## About This Book

This educational resource was developed using:
- **Spec-Kit Plus methodology** for structured development
- **Qwen AI** for content generation and enhancement
- **Docusaurus 3.x** for modern documentation experience
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

If you want to manually deploy:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command builds the website and pushes to the `gh-pages` branch.
