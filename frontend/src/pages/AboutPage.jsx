import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Summit Dance</h1>
      <p>
        <strong>Summit Dance</strong> is a community-driven platform and digital archive that celebrates the rich cultural heritage of Himalayan music and dance — focusing on traditions from Tibet, Bhutan, and Nepal.
      </p>
      <p>
        The platform provides a space for users to explore the history, meaning, and beauty of these art forms. Recognizing that many traditional folk songs and dances are difficult to find online, Summit Dance creates a specialized environment where users can easily access and contribute to a growing collection of music, dance videos, and cultural information.
      </p>
      <p>
        Users can upload videos, music, and descriptions — offering background stories or meanings behind the performances. With an integrated discussion forum, the platform also encourages community engagement through posts, comments, and voting features. Whether you're a performer, researcher, or cultural enthusiast, Summit Dance is a place to connect, learn, and share.
      </p>

      <h2>Project Goals</h2>
      <ul>
        <li>Design a front-end interface for showcasing music and dance content.</li>
        <li>Build an intuitive and attractive user experience highlighting traditions of Tibet, Bhutan, and Nepal.</li>
        <li>Implement a Reddit-style discussion forum for sharing and interacting with cultural content.</li>
        <li>Create responsive layouts that work well on all devices.</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>Backend:</strong> Django</li>
        <li><strong>Database:</strong> PostgreSQL</li>
        <li><strong>Wireframes:</strong> Excalidraw</li>
        <li><strong>Future Feature:</strong> Zoom API integration for live dance sessions</li>
      </ul>

      <p>
        This project was developed by <strong>Tenzin Palden</strong> as part of a semester-long initiative to support cultural preservation through technology.
      </p>
    </div>
  );
};

export default About;