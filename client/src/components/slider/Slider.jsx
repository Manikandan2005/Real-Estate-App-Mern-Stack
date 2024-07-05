import { useState } from "react"
import "./slider.scss"

function Slider({images}) {

  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction)=>{
    if(direction==="left")
    {
      imageIndex===0?setImageIndex(images.length-1):setImageIndex(imageIndex-1)
    }
    else{
      imageIndex<images.length-1?setImageIndex(imageIndex+1):setImageIndex(0)
    }
  }

  return (
    <div className='slider'>
     {imageIndex!==null? <div className="fullSlider">
        <div className="arrow">
          <img src='./arrow.png' alt="" onClick={()=>changeSlide("left")}></img>
        </div>
        <div className="imageContainer">
          <img src={images[imageIndex]} alt=""></img>
        </div>
        <div className="arrow">
          <img src="./arrow.png" className="right" alt="" onClick={()=>changeSlide("Right")}></img>
        </div>
        <div className="close" onClick={()=>setImageIndex(null)}>
          X
        </div>
      </div>:<></>}
        <div className="bigImage">
            <img src={images[0]} alt='Room' onClick={()=>setImageIndex(0)}></img>
        </div>
        <div className="smallImages">
            {images.slice(1).map((image,index)=>{
              return <img
              src={image} 
              alt=""
              key={index}
              onClick={()=>setImageIndex(index+1)}
              />
            })}
        </div>
    </div>
  )
}

export default Slider