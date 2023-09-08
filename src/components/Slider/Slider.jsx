import React, { useState } from 'react';
import { hotel,big_house,villa } from '../assets/Pics';
import "../Slider/Slider.css"
const Slider = () => {
    let [slidindex,setSlide]=useState(0)
   
    const pics=[{
        url:hotel},
        {url:big_house},
        {url:villa}
    
    
    ]
    const gotonext=()=>{
        let isFirst=slidindex===0
        let newindex=isFirst?pics.length-1:slidindex-1

        setSlide(newindex)
    }
    const gotoprev=()=>{
        let islast=slidindex===pics.length-1
        let newindex=islast?0:slidindex+1

        setSlide(newindex)
    }
    
    return (
        
        <>
        <div className="slideshow-container">
            <div className="myslides fade">
                <img src={pics[slidindex].url} alt="" className='sliseimg' />
            </div>
            <a className='prev' href onClick={gotoprev}>&#10094;</a>
            <a className='next' href onClick={gotonext}>&#10095;</a>
        </div>
        </>
    );
}

export default Slider;

