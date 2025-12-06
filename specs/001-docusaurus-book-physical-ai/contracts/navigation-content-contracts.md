# Contract Documentation: Physical AI & Humanoid Robotics Book

## Overview
This project is a static documentation site built with Docusaurus. As such, there are no traditional API contracts. The site provides static content that is served directly to users' browsers.

## Navigation Schema
The site's navigation follows the Docusaurus sidebar configuration to organize the 20 chapters across 4 modules.

## Content Schema
Content is structured as MDX files following this template:

```markdown
---
title: Chapter Title
---

import Callout from '@site/src/components/Callout';

# Chapter Title

## Learning Objectives

- Objective 1
- Objective 2

## Content

<Callout type="info">Informational callout</Callout>

### Code Examples

\`\`\`language
// Code example
\`\`\`

### Diagrams

\`\`\`mermaid
graph TD;
    A-->B;
\`\`\`

## Exercises

1. Exercise 1
2. Exercise 2

## Key Takeaways

- Takeaway 1
- Takeaway 2
```

## Site Configuration Contract
The site configuration in `docusaurus.config.js` defines the following contract:

- Site title: "Physical AI & Humanoid Robotics"
- Base URL: "/physical-ai-robotics-book/"
- Theme: Dark mode only, with the specified color palette
- Navbar items: Docs, About, Hardware, GitHub
- Mobile responsive design from 320px width
- No search functionality