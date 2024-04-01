import './ImageSlider.css';
import { useState } from 'react';

function ImageSlider({images}) {

const [current, setCurrent]= useState(0)

const clickLeft = () =>{
 if(current === 0 )
 {
  setCurrent(4)
 }
 else{
  setCurrent(current-1)
 }
}

const clickRight = () =>{
  if(current === 4 )
  {
   setCurrent(0)
  }
  else{
   setCurrent(current+1)
  }
 }
 


  return (
    
    <div className='carousel'>
        <div className='carousel_wrapper'>
      {images.map((slide,index)=>{
        return ( 
        <div key={index} className={index== current
        ? "carousel_card carousel_card-active" 
        : "carousel_card"
        }
        >
           <img src={slide.image} className="sliderimage" alt={slide.title}/>
           <div className="card_overlay">
            <h2 className="card-title">{slide.title}</h2>
           </div>
        </div>
        );
      })}
      <div className="carousel_arrow_left" onClick={clickLeft}>&lsaquo;</div>
      <div className="carousel_arrow_right" onClick={clickRight}>&rsaquo;</div>
      </div>
    </div>
  )
}

export default ImageSlider
