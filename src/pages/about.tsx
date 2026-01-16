import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

function About() {
  return (
    <Layout title="About" description="About the Physical AI & Humanoid Robotics Book">
      <div className={clsx('container margin-vert--lg')}>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>About This Book</h1>
            <p>
              This educational resource, "Physical AI & Humanoid Robotics," is designed to provide 
              comprehensive coverage of Physical AI concepts, from foundational ROS 2 principles to 
              advanced topics like vision-language action models and cognitive planning.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              Our mission is to make advanced robotics education accessible to a global audience, 
              bridging the gap between theoretical knowledge and practical implementation. We aim to 
              provide both the theoretical foundations and hands-on examples using leading frameworks 
              and platforms.
            </p>
            
            <h2>Development Approach</h2>
            <p>
              This book was developed using:
            </p>
            <ul>
              <li>
                <strong>Spec-Kit Plus methodology</strong> for structured development
              </li>
              <li>
                <strong>Qwen AI</strong> for content generation and enhancement
              </li>
              <li>
                <strong>Docusaurus 3.x</strong> for modern documentation experience
              </li>
              <li>
                <strong>GitHub Actions</strong> for automated deployment
              </li>
            </ul>
            
            <h2>Target Audience</h2>
            <p>
              This book is designed for:
            </p>
            <ul>
              <li>Graduate students and researchers in robotics and AI</li>
              <li>Engineers developing robotic systems</li>
              <li>Developers interested in AI-physical world interactions</li>
              <li>Anyone curious about the future of intelligent physical systems</li>
            </ul>
            
            <h2>Contributing</h2>
            <p>
              This is an open educational resource. We welcome contributions in the form of:
            </p>
            <ul>
              <li>Corrections and improvements to existing content</li>
              <li>New chapters or modules on relevant topics</li>
              <li>Code examples and exercises</li>
              <li>Translations to other languages</li>
            </ul>
            <p>
              To contribute, please visit our <a href="https://github.com/your-username/book_with_qwen">GitHub repository</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;