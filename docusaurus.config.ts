import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An Educational Book on Physical AI Using Qwen AI and Spec-Kit Plus',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://uzairshaikh346.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/humanoid-robotics/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uzairshaikh346', // Usually your GitHub org/user name.
  projectName: 'book_with_qwen', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    format: 'detect',
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Keep docs at /docs route
          routeBasePath: '/docs',
          // Enable prev/next navigation
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          lastVersion: 'current',
          // Performance optimizations
          remarkPlugins: [
            // Add plugins for performance if needed
          ],
          rehypePlugins: [
            // Add plugins for performance if needed
          ],
        },
        blog: false, // Disable blog for this project
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  // Performance optimizations
  themes: [
    // Add any additional themes if needed
  ],
  plugins: [
    // Additional performance optimizations
    './src/plugins/docusaurus-plugin-env', // Add environment plugin for Supabase
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // Only dark mode
    },
    // Accessibility improvements
    metadata: [
      {name: 'keywords', content: 'robotics, AI, physical AI, ROS, simulation, Isaac Sim, navigation, machine learning'},
      {name: 'author', content: 'Physical AI Educational Project'},
      {name: 'theme-color', content: '#0F172A'},
    ],
    // Custom fonts configuration
    fonts: {
      font: ['Inter', 'sans-serif'],
      monospace: ['JetBrains Mono', 'Consolas', 'monospace'],
    },
    navbar: {
      title: 'Physical AI',
      items: [
        { to: '/docs/', label: 'Book', position: 'left' },
        { href: 'https://github.com/...', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chapters',
          items: [
            {
              label: 'Module 1 - ROS 2',
              to: '/docs/module-1-ros2/chapter-1-intro-to-physical-ai',
            },
            {
              label: 'Module 2 - Digital Twin',
              to: '/docs/module-2-digital-twin/chapter-6-simulation-intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Qwen AI',
              href: 'https://qwen.ai',
            },
            {
              label: 'Spec-Kit Plus',
              href: 'https://github.com/spec-kit-plus',
            },
            {
              label: 'Robot Operating System',
              href: 'https://docs.ros.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/uzairshaikh346/humanoid-robotics',
            },
            {
              label: 'Issues',
              href: 'https://github.com/uzairshaikh346/humanoid-robotics/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/uzairshaikh346/humanoid-robotics/discussions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Book. Built with Docusaurus using Spec-Kit Plus methodology and Qwen AI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;