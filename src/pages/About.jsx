import React from 'react';
import './PageStyles.css'; // Optional: shared styles for all pages

function About() {
  return (
    <div className="page">
      <h2>About React Chat App</h2>
      <p>
        React Chat App is a dynamic, multi-page chat interface built using modern React features like functional components, hooks, and React Router.
      </p>
      <p>
        This application demonstrates component-based architecture, styled UI, and a foundation for integrating real-time chat with bots or users.
      </p>
      <p>
        Features include:
        <ul>
          <li>Modular component structure</li>
          <li>Multiple pages: Home, Chat, About, Contact</li>
          <li>Responsive design and modern UI</li>
          <li>Dynamic message handling</li>
        </ul>
      </p>
    </div>
  );
}

export default About;
