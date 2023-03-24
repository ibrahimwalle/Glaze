function ImageSlider({slideShow}){
    return(
      <>
        {/* Image slider, repeated 3 times to keep the viewport full while animation loops, so it simulates an infinite loop */}
        <div className='imageSlider'>
          <div className="imageContainer">
          {slideShow.map((el,i) =><img key={i} className='slideShowImg' src={el}/>)}
          </div> 
          <div className="imageContainer">
          {slideShow.map((el,i) =><img key={i} className='slideShowImg' src={el}/>)}
          </div>
          <div className="imageContainer">
          {slideShow.map((el,i) =><img key={i} className='slideShowImg' src={el}/>)}
          </div>
        </div>
        {/* image slider position is absolute, so it sits the space of this empty section. (each section has a min height of 50vh) */}
        {/* <section></section> */}
      </>
)}

export default ImageSlider