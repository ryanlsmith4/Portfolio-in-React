/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Project from './Project';
import './PageContent.css';
import githubLogo from './svg/GitHub-Mark.png'

function PageContent() {

  const projects = [
    {
      title: 'Drone Swarmy', image: 'PlaceHolder', link: '#', gitHubLink: githubLogo, glink: 'https://github.com/dmcg89/otherdrone'
    },
    {
      title: 'onTrack', image: '/images/aerial-architecture-buildings-2346006.jpg', link: '#', gitHubLink: githubLogo, glink: 'https://github.com/ryanlsmith4/onTrack',
    },
    {
      title: 'Strings Library', image: '/images/colorful-colourful-string-110876.jpg', link: '#', giHhubLink: githubLogo, glink: 'https://github.com/ryanlsmith4/strings_lib',
    },
    {
      title: 'AR-Hunt', image: '/images/branches-bright-colors-957024.jpg', link: '#', giHhubLink: githubLogo, gitlink: 'https://github.com/ar-hunt/backend',
    },
    {
      title: 'Be Heard', image: '/images/activist-background-blue-2559747.jpg', link: 'https://be-heard-rs.herokuapp.com/', gitHubLink: githubLogo, glink: 'https://github.com/ryanlsmith4/be_heard',
    },
    {
      title: 'PlaceHolder', image: 'https://media.giphy.com/media/NqZn5kPN8VVrW/giphy.gif', link: '#', gitHubLink: githubLogo, glink: 'Nothing',
    },
  ];

  const mapProjects = () => {
    return (
      <div className="content-grid">
        {projects.map((item, i) => {
          return (
            <div key={`project-${i}`}>
              <Project title={item.title} image={item.image} link={item.link} gitHubLink={item.gitHubLink} gitlink={item.glink}/>
            </div>
          );
        })}
      </div>
    )
  };

  const stuff = mapProjects();
  return stuff;
}

export default PageContent;

