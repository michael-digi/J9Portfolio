import React, { useState, useEffect } from 'react';
import { queensboro, harlem, _3M, bathbw, fortgreene, franklinst, xsre, marriot, sevenseven} from '../imageLinks';
import SliderDots from '../SliderDots';
import ProjectPreviewScroll from '../ProjectPreviewScroll';
import './Projects.css';
import SlideImage from '../SlideImage';
import SliderDot from '../SliderDot';

function Projects() {
  const [image, setImage] = useState(0)
  const [images, setImages] = useState([])
  const [dots, setDots] = useState([])
  const [project, setProject] = useState('queensboro')

  useEffect(() => {
    switch(project) {
      case 'queensboro':
        importImages(queensboro)
        break;
      case 'harlem':
        importImages(harlem)
        break;
      case '_3M':
        importImages(_3M)
        break;
      case 'bathbw':
        importImages(bathbw)
        break;
      case 'fortgreene':
        importImages(fortgreene)
        break;
      case 'franklin':
        importImages(franklinst)
        break;
      case 'xsre':
        importImages(xsre)
        break;
      case 'marriot':
        importImages(marriot)
        break;
      case 'sevenseven':
        importImages(sevenseven)
        break;
    }
  },[project])

  function importImages(r) {
    let images = [];
    let sliderDots = []
    //r.keys().forEach((item, index) => { images.push(<img src={r(item)}></img>) });
    r.keys().forEach((item, index) => { 
      images.push(r(item))
      if (index === 0) sliderDots.push(<SliderDot key={index} className='dotClicked' index={index}/>)
      else sliderDots.push(<SliderDot key={index} className='dot' index={index}/>)
    });
    setImages(images)
    setImage(0)
    setDots(sliderDots)
  }

  function nextImage() {
    if (image + 1 >= images.length || image >= images.length) {
      dots[image] = <SliderDot key={image} className='dot' index={image}/>
      dots[0] = <SliderDot key={0} className='dotClicked' index={0}/>
      setDots(dots)
      setImage(0)
      return
    }
    dots[image] = <SliderDot key={image} className='dot' index={image}/>
    dots[image + 1] = <SliderDot key={image + 1} className='dotClicked' index={image + 1}/>
    setDots(dots)
    setImage(image + 1)
  }
  
  function prevImage() {
    if (image - 1 <= - 1) {
      dots[image] = <SliderDot key={image} className='dot' index={image}/>
      dots[images.length - 1] = <SliderDot key={0} className='dotClicked' index={0}/>
      setImage(images.length - 1) 
      return
    }
    dots[image] = <SliderDot key={image} className='dot' index={image}/>
    dots[image - 1] = <SliderDot key={image - 1} className='dotClicked' index={image - 1}/>
    setDots(dots)
    setImage(image - 1)
  }

  function changeProject(newProject) {
    if (newProject === project) return
    setImages([])
    setDots([])
    setProject(newProject)
  }

  return (
    <div id='projectContainer'>
      {console.log(dots, ' this is dots')}
      <div class="itemFirstColumn"></div>
      <ProjectPreviewScroll changeProject={changeProject} />
      <div class="itemE"></div>
      <div class="itemF"></div>
      <div class="itemG"></div>
      <div class="itemH"></div>
      <div class="itemJ"></div>
      <div class="itemK"></div>
        <div id='slideShow'>
            <i className='fa fa-angle-right' onClick={() => nextImage()} 
              style={{
                zIndex: 3, 
                textAlign:'center', 
                backgroundColor: 'black', 
                position: 'absolute', 
                top: '50%',
                right: '5%',
                fontSize: '3rem',
                width: '3%',
                minWidth: '45px',
                borderRadius: '25%', 
                color: 'white'}}></i>
            <i className='fa fa-angle-left' onClick={() => prevImage()}
              style={{
                zIndex: 3, 
                textAlign:'center', 
                backgroundColor: 'black', 
                position: 'absolute',
                fontSize: '3rem',
                top: '50%',
                left: '5%',
                width: '3%',
                minWidth: '45px', 
                borderRadius: '25%', 
                color: 'white'}}></i>
          { dots.length !== 0 ? <SlideImage index={image} img={images[image]}/> : null }
          <SliderDots dots={dots}/>
        </div>
    </div>
  );
}

export default Projects