<!--
Sync Impact Report:
Version change: 1.1.0 → 1.2.0
List of modified principles:
- Technical Stack: Added react-chatbot-kit requirement
- Features: Added Chatbot integration requirement
- Added new principle: Interactive AI Features
- Updated Governance: Added chatbot compliance requirement
Added sections: Interactive AI Features (Chatbot integration guidelines)
Removed sections: N/A
Templates requiring updates:
- .specify/templates/plan-template.md - ⚠ pending
- .specify/templates/spec-template.md - ⚠ pending
- .specify/templates/tasks-template.md - ⚠ pending
- README.md - ⚠ pending
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Book Project Constitution

## Core Principles

### AI-Driven Development
Use Spec-Kit Plus workflow with Qwen AI for code generation and content creation. Embrace AI-assisted development throughout. Follow Docusaurus best practices as documented at https://docusaurus.io/

### Excellence in Education
Clear, progressive, practical content. Working examples. Visual aids. Accessible to all.

### Professional Quality
Industry-standard tools. Production-ready code. Real-world applications. Technical accuracy required. All implementations must follow Docusaurus documentation and best practices (https://docusaurus.io/docs).

### User-Centric Design
Clean interface. Intuitive navigation. Fast performance. Mobile responsive. Professional dark theme.

### Technical Excellence
Must follow industry standards, be tested and working with clear comments, and ensure technical accuracy. Reference Docusaurus documentation (https://docusaurus.io/) for all technical decisions.

### Spec-Kit Plus & Qwen Workflow
Follow the Spec-Kit Plus methodology for all development tasks with Qwen AI assistance.

### Design System - Professional Dark Theme

#### Color Palette

Dark Mode (Default):

- Background Primary: #0F172A (dark slate)
- Background Secondary: #1E293B (elevated dark)
- Background Elevated: #334155 (cards/modals)
- Text Primary: #F8FAFC (soft white)
- Text Secondary: #CBD5E1 (light gray)
- Text Muted: #94A3B8 (muted gray)
- Border Color: #334155 (dark borders)
- Code Background: #1E293B (code blocks)

Accent Colors:

- Primary: #3B82F6 (bright blue)
- Secondary: #14B8A6 (teal)
- Accent: #A78BFA (light purple)
- Success: #10B981 (green)
- Warning: #F59E0B (orange)
- Error: #EF4444 (red)

#### Typography

- Headings/Body: Inter
- Code: JetBrains Mono
- Base: 16px

### Interactive AI Features

Integrate AI-powered chatbot functionality using react-chatbot-kit to enhance user experience and provide interactive Qwen AI capabilities. The chatbot must be:
- Positioned fixed at bottom right of screen with high z-index (9999)
- Initially hidden, with toggle button to activate
- Using CSS modules for styling (no global CSS)
- Lazy-loaded to avoid affecting page load performance
- Non-intrusive to existing content and functionality
- Mobile responsive

## Technical Stack & Features Required

Core: Docusaurus 3.x (https://docusaurus.io/), React 18+, MDX content, Qwen AI, Git/GitHub, GitHub Actions, Node.js 18+, react-chatbot-kit

Features: Responsive (320px+), Dark mode (default), Syntax highlighting, Mermaid diagrams, Navigation (breadcrumbs, TOC, prev/next), Chatbot integration

Note: Search functionality is NOT required. Follow Docusaurus documentation for all implementation details.

## Development Workflow

Spec-Kit Plus workflow: /sp.specify - Requirements, /sp.plan - Architecture, /sp.tasks - Task breakdown, /sp.implement - Execute with Qwen AI.

Deployment: GitHub → GitHub Actions → GitHub Pages.

Documentation Reference: Always consult https://docusaurus.io/docs for best practices, configuration options, and implementation patterns.

## Content Structure

Module 1 - ROS 2: 5 chapters
Module 2 - Digital Twin: 5 chapters
Module 3 - NVIDIA Isaac: 5 chapters
Module 4 - Vision-Language-Action: 5 chapters

Each chapter: Introduction, concepts, examples, code, exercises, summary.

## Governance

All PRs/reviews must verify compliance with Docusaurus best practices (https://docusaurus.io/); All development follows Spec-Kit Plus + Qwen workflow; Non-negotiables: Technical accuracy, Professional dark theme, Mobile responsive, Accessibility (WCAG 2.1 AA), GitHub Pages deployment, Spec-Kit Plus + Qwen workflow, Git version control, MIT license, Docusaurus documentation compliance, Chatbot functionality compliant with Interactive AI Features principle.

**Version**: 1.2.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-08