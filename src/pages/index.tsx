import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import ChatbotUI from '../components/ChatbotUI';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Educational Book">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <ChatbotUI/>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">Module 1: ROS 2</Heading>
                  <p>Learn about Robot Operating System 2 fundamentals, communication patterns, building packages, and URDF.</p>
                  <Link
                    className="button button--primary button--outline"
                    to="/docs/module-1-ros2/chapter-1-intro-to-physical-ai">
                    Start Module
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">Module 2: Digital Twin</Heading>
                  <p>Explore simulation environments, Gazebo, sensor simulation, and Unity visualization.</p>
                  <Link
                    className="button button--primary button--outline"
                    to="/docs/module-2-digital-twin/chapter-6-simulation-intro">
                    Start Module
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">Modules 3-4: Isaac & VLA</Heading>
                  <p>NVIDIA Isaac platform, synthetic data, and Vision-Language-Action systems.</p>
                  <Link
                    className="button button--secondary button--outline"
                    to="/docs/module-3-isaac/chapter-11-isaac-platform-intro">
                    Start Modules
                  </Link>
                </div>
              </div>
              
            </div>
            
            <div className="row" style={{marginTop: '2rem'}}>
              <div className="col col--12">
                <div className="text--center padding-horiz--md">
                  <Heading as="h2">About This Book</Heading>
                  <p>This comprehensive educational resource uses Spec-Kit Plus and Qwen AI for content generation, providing a modern approach to learning Physical AI and Humanoid Robotics.</p>
                  <p>Each chapter includes learning objectives, code examples, diagrams, callouts, exercises, and key takeaways to ensure a thorough understanding of the material.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}