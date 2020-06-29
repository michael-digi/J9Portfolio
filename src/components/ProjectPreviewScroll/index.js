import React from 'react';
import ProjectCard from '../ProjectCard';
import SectionTitleMobile from '../SectionTitleMobile';
import './ProjectPreviewScroll.css';

function ProjectPreviewScroll(props) {
  return (
    <div id='projectScroll'>
      {/* <SectionTitleMobile section='Projects' /> */}
      <ProjectCard 
        title='Fort Greene' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='fortgreene'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='Harlem' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='harlem'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='3M Booth 2012' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='_3M'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='Bath and Body Works' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='bathbw'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='Seven Seven' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='sevenseven'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='XSRE' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='xsre'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='Franklin St' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='franklin'
        changeProject={props.changeProject}
      />
      <ProjectCard 
        title='Queensboro' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        id='queensboro'
        changeProject={props.changeProject}
      />
    </div>
  )
}

export default ProjectPreviewScroll;