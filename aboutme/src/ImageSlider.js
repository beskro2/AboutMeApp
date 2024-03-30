import './ImageSlider.css';


function ImageSlider({images}) {
  return (
    
    <div className='carousel'>
        <div className='carousel_wrapper'>
      {images.map((slide,index)=>{
        return ( 
        <div key={index} className={index==2 ? "carousel_card carousel_card-active" : "carousel_card"}>
           <img src={slide.image} className="sliderimage" alt={slide.title}/>
           <div className="card_overlay">
            <h2 className="card-title">{slide.title}</h2>
           </div>
        </div>
        );
      })}
      </div>
    </div>
  )
}

export default ImageSlider
