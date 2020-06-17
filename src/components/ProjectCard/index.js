import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className='projectContainer' onClick={() => props.changeProject(props.id)}>
      <div className='projectInfo'>
        <div className='titleAndDesc'>
          <div className='title'>
            {props.title}
          </div>
          <div className='description'>
            {props.description}
          </div>
        </div>
      </div>
      <div className='thumbnailContainer'>
        <div className='thumbnail' id={props.id}>
        </div>
        <div className='projectTitle'>{props.title}</div>
      </div>
    </div>
  )
}

export default ProjectCard