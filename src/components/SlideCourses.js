import React from 'react'
import {Carousel} from '3d-react-carousal';
function SlideCourses() {
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" /> ]
        
    return (
        <div className="course-wrapper">
            <div className="row course">
               <div className="col-md-12">
                  <h1>Courses</h1>
                 </div>
                 </div>
                 <div className="row slide-area">
                     <div className="col-md-12">
                     <Carousel slides={slides} autoplay={true} interval={3000}/>
                     
                     </div>
                 </div>
            
        </div>
    )
}

export default SlideCourses
