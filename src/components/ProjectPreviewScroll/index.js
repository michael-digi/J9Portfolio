import React from 'react';
import './ProjectPreviewScroll.css';

function ProjectPreviewScroll(props) {
  return (
    <div className="itemSecondColumn">
      
      <div className='box' onClick={() => props.changeProject('fortgreene')}>
        <div className='projectTitle'>
          Fort Greene
        </div>
        <div className='thumbnail' id='fortgreene'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('harlem')}>
        <div className='projectTitle'>
          Harlem
        </div>
        <div className='thumbnail' id='harlem'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('_3M')}> 
        <div className='projectTitle'>
          3M Booth 2012
        </div>
        <div className='thumbnail' id='_3M'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('bathbw')}>
        <div className='projectTitle'>
          Bath and Body Works
        </div>
        <div className='thumbnail' id='bathbw'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('marriot')}>
        <div className='projectTitle'>
          Marriot
        </div>
        <div className='thumbnail' id='marriot'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('sevenseven')}>
        <div className='projectTitle'>
          Seven Seven
        </div>
        <div className='thumbnail' id='sevenseven'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('xsre')}>
        <div className='projectTitle'>
          XSRE
        </div>
        <div className='thumbnail' id='xsre'></div>
      </div>
      
      <div className='box' onClick={() => props.changeProject('franklin')}>
        <div className='projectTitle'>
          Franklin St
        </div>
        <div className='thumbnail' id='franklin'></div>
      </div>

      <div className='box' onClick={() => props.changeProject('queensboro')}>
        <div className='projectTitle'>
          Queensboro
        </div>
        <div className='thumbnail' id='queensboro'></div>
      </div>
    
    </div>
  )
}

export default ProjectPreviewScroll;