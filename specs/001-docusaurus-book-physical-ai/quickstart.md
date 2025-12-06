# Quickstart Guide: Physical AI & Humanoid Robotics Book

## Local Development Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd physical-ai-robotics-book
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

4. Build the static site:
   ```bash
   npm run build
   # or
   yarn run build
   ```
   This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project Structure

```
physical-ai-book/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── intro.md
│   ├── module-1-ros2/
│   │   ├── 01-intro-to-physical-ai.md
│   │   ├── 02-ros2-fundamentals.md
│   │   ├── 03-communication-patterns.md
│   │   ├── 04-building-packages.md
│   │   └── 05-urdf.md
│   ├── module-2-digital-twin/
│   │   ├── 06-simulation-intro.md
│   │   ├── 07-gazebo-environment.md
│   │   ├── 08-sensor-simulation.md
│   │   ├── 09-advanced-gazebo.md
│   │   └── 10-unity-visualization.md
│   ├── module-3-isaac/
│   │   ├── 11-isaac-platform-intro.md
│   │   ├── 12-isaac-sim.md
│   │   ├── 13-synthetic-data.md
│   │   ├── 14-isaac-ros.md
│   │   └── 15-nav2.md
│   └── module-4-vla/
│       ├── 16-llms-and-robotics.md
│       ├── 17-voice-to-action.md
│       ├── 18-cognitive-planning.md
│       ├── 19-multi-modal-interaction.md
│       └── 20-capstone-project.md
├── src/
│   ├── components/
│   └── css/
│       └── custom.css
├── static/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

## Creating New Content

### Adding a New Chapter

1. Create a new markdown file in the appropriate module directory in `docs/`
2. Follow the chapter template with required sections:
   - Learning objectives
   - Content with code examples
   - Mermaid diagrams
   - Callouts (info/warning/tip)
   - Exercise
   - Key takeaways

### Adding Code Examples

Use standard Markdown code fences with language specification:

```javascript
// Your code here
```

### Adding Mermaid Diagrams

Use the Mermaid syntax in your markdown files:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### Adding Callouts

Use Docusaurus admonitions:

```markdown
:::info
Informational callout
:::

:::tip
Helpful tip
:::

:::caution
Warning about potential issues
:::

:::danger
Critical warning
:::
```

## Custom Styling

The dark theme is configured in `src/css/custom.css` with the following CSS variables:

```css
:root {
  --ifm-background-color: #0F172A;
  --ifm-background-surface-color: #1E293B;
  --ifm-color-primary: #3B82F6;
  --ifm-color-primary-dark: #2563EB;
  --ifm-color-primary-light: #60A5FA;
  --ifm-font-color-base: #F8FAFC;
  --ifm-heading-color: #F8FAFC;
  --ifm-code-background: #1E293B;
}
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The workflow is defined in `.github/workflows/deploy.yml`.