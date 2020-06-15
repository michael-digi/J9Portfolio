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
  const [project, setProject] = useState('queensboro')
  const [dots, setDots] = useState([])

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
      if (index === 0) sliderDots.push(<SliderDot key={index} dotClick={dotClick} className='dotClicked' index={index}/>)
      else sliderDots.push(<SliderDot key={index} dotClick={dotClick} className='dot' index={index}/>)
    });
    setDots(sliderDots)
    setImages(images)
  }

  function nextImage() {
    if (image + 1 >= images.length || image >= images.length) {
      dots[image] = <SliderDot key={image} dotClick={dotClick} className='dot' index={image}/>
      dots[0] = <SliderDot key={0} dotClick={dotClick} className='dotClicked' index={0}/>
      setDots(dots)
      setImage(0)
      return
    }
    dots[image] = <SliderDot key={image} dotClick={dotClick} className='dot' index={image}/>
    dots[image + 1] = <SliderDot key={image + 1} dotClick={dotClick} className='dotClicked' index={image + 1}/>
    setDots(dots)
    setImage(image + 1)
  }
  
  function prevImage() {
    if (image - 1 <= - 1) {
      dots[image] = <SliderDot key={image} dotClick={dotClick} className='dot' index={image}/>
      dots[images.length - 1] = <SliderDot key={0} dotClick={dotClick} className='dotClicked' index={0}/>
      setImage(images.length - 1) 
      return
    }
    dots[image] = <SliderDot key={image} dotClick={dotClick} className='dot' index={image}/>
    dots[image - 1] = <SliderDot key={image - 1} dotClick={dotClick} className='dotClicked' index={image - 1}/>
    setDots(dots)
    setImage(image - 1)
  }

  function dotClick(index) {
    
    console.log(image, ' image')
    console.log(dots)
    console.log(images)
    // let newDots = dots
    // newDots[image] = <SliderDot key={image} dotClick={dotClick} className='dot' index={image}/>
    // console.log(dots, newDots)
    // // dots[index] = <SliderDot key={index} dotClick={dotClick} className='dotClicked' index={index}/>
    // setDots(dots)
  }

  function changeProject(project) {
    setProject(project)
    setImage(0)
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
          <SlideImage index={image} img={images[image]}/>
          <SliderDots dots={dots}/>
        </div>
    </div>
  );
}

export default Projects