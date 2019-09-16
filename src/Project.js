/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Project.css';

function Project({ image, title, link, count, gitHubLink, gitlink }) {
  return (
    <div className="Project">
      <img className="Project-img" src={image} width="300" height="200" alt="content" />
      <div className="Parent">
        <h3 className="Child">{title}</h3>
        <h4 className="Child">Likes {count}</h4>
      </div>
      
      <div className="Project-links">
        <a href={link}>Link to project</a>
        <a href={gitlink}>
          <img alt="gitlogo" src={gitHubLink} />
        </a>
      </div>    
    </div>
  );
}

export default Project;
