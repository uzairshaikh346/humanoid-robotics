import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 1 - ROS 2',
      items: [
        'module-1-ros2/chapter-1-intro-to-physical-ai',
        'module-1-ros2/chapter-2-ros2-fundamentals',
        'module-1-ros2/chapter-3-communication-patterns',
        'module-1-ros2/chapter-4-building-packages',
        'module-1-ros2/chapter-5-urdf',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2 - Digital Twin',
      items: [
        'module-2-digital-twin/chapter-6-simulation-intro',
        'module-2-digital-twin/chapter-7-gazebo-environment',
        'module-2-digital-twin/chapter-8-sensor-simulation',
        'module-2-digital-twin/chapter-9-advanced-gazebo',
        'module-2-digital-twin/chapter-10-unity-visualization',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3 - Isaac',
      items: [
        'module-3-isaac/chapter-11-isaac-platform-intro',
        'module-3-isaac/chapter-12-isaac-sim',
        'module-3-isaac/chapter-13-synthetic-data',
        'module-3-isaac/chapter-14-isaac-ros',
        'module-3-isaac/chapter-15-nav2',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4 - VLA',
      items: [
        'module-4-vla/chapter-16-llms-and-robotics',
        'module-4-vla/chapter-17-voice-to-action',
        'module-4-vla/chapter-18-cognitive-planning',
        'module-4-vla/chapter-19-multi-modal-interaction',
        'module-4-vla/chapter-20-capstone-project',
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
