import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

function Hardware() {
  return (
    <Layout title="Hardware" description="Hardware recommendations for Physical AI & Humanoid Robotics">
      <div className={clsx('container margin-vert--lg')}>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Recommended Hardware</h1>
            <p>
              This page provides recommendations for hardware platforms that are suitable for 
              implementing the concepts covered in the Physical AI & Humanoid Robotics book.
            </p>
            
            <h2>Robot Platforms</h2>
            <h3>TurtleBot3 (Beginner-Friendly)</h3>
            <p>
              The TurtleBot3 is an excellent platform for beginners to implement ROS 2 concepts:
            </p>
            <ul>
              <li>Open-source design with extensive documentation</li>
              <li>Supports both simulation and real-world testing</li>
              <li>Compatible with ROS 2 and Gazebo simulation</li>
              <li>Various configurations available (Burger, Waffle, Waffle Pi)</li>
            </ul>
            
            <h3>Unitree Robots (Advanced)</h3>
            <p>
              For more advanced implementations involving humanoid and quadruped robotics:
            </p>
            <ul>
              <li>Unitree Go Series for mobile manipulation</li>
              <li>Unitree H1 for humanoid robotics research</li>
              <li>Unitree A1 or Go-Mini for quadruped research</li>
            </ul>
            
            <h3>Custom Platforms</h3>
            <p>
              For specialized research, consider building custom platforms:
            </p>
            <ul>
              <li>Using ROS-compatible controllers (e.g., ROSbot series)</li>
              <li>Integration with NVIDIA Jetson for edge AI</li>
              <li>Custom manipulator arms for manipulation tasks</li>
            </ul>
            
            <h2>Computing Platforms</h2>
            <h3>Edge Computing</h3>
            <ul>
              <li>
                <strong>NVIDIA Jetson Series</strong>: Ideal for on-robot processing, 
                especially for vision-language-action applications
              </li>
              <li>
                <strong>Intel NUC</strong>: Good general-purpose robotics computer, 
                supports full ROS 2 installation
              </li>
            </ul>
            
            <h3>Workstation Requirements</h3>
            <p>
              For simulation and development work, we recommend:
            </p>
            <ul>
              <li>
                <strong>CPU</strong>: Multi-core processor (8+ cores recommended)
              </li>
              <li>
                <strong>RAM</strong>: 32GB or more for complex simulations
              </li>
              <li>
                <strong>GPU</strong>: NVIDIA RTX series for Isaac Sim and accelerated perception
              </li>
              <li>
                <strong>Storage</strong>: Fast SSD storage for simulation performance
              </li>
            </ul>
            
            <h2>Sensors</h2>
            <h3>Cameras</h3>
            <ul>
              <li>
                <strong>Intel RealSense</strong>: Excellent for depth perception and 
                RGB-D applications
              </li>
              <li>
                <strong>Logitech C920/C922</strong>: Good for basic RGB video capture
              </li>
              <li>
                <strong>FLIR/Point Grey cameras</strong>: Industrial-grade options
              </li>
            </ul>
            
            <h3>Other Sensors</h3>
            <ul>
              <li>
                <strong>LIDAR systems</strong>: 
                SICK Tim551, Hokuyo URG-04LX-UG01, or YDLIDAR for navigation
              </li>
              <li>
                <strong>Inertial Measurement Units</strong>: Pixhawk or VectorNav for 
                orientation estimation
              </li>
            </ul>
            
            <h2>Development Setup</h2>
            <p>
              For the best development experience with this book:
            </p>
            <ol>
              <li>
                <strong>Simulation first</strong>: Start with Gazebo or Isaac Sim before 
                implementing on real hardware
              </li>
              <li>
                <strong>Version control</strong>: Use Git to manage your code and experiments
              </li>
              <li>
                <strong>Containerization</strong>: Consider using Docker or ROS 2 containers 
                for consistent environments
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Hardware;