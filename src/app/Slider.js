import React, {useState} from 'react';
import ImgComp from "../app/ImgComp";
import images from '../images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import Dots from "./Dots";
import { useSwipeable } from 'react-swipeable';

function Slider() {

    

    const [activeSlide, setActive] = useState(0);
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (images.length-1)) : setX(x + 100);
        activeSlide === 0 ? setActive(images.length-1) : setActive(activeSlide - 1);
          console.log(activeSlide);
          
        
    };
    const goRight = () => {
        x === -100 * (images.length-1) ? setX(0) : setX(x - 100);
        activeSlide === (images.length-1) ? setActive(0) : setActive(activeSlide + 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => goRight(),
        onSwipedRight: () => goLeft(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });


    return (
    <div className="slider" {...handlers}>
    {images.map((item, index) => {
        return (
            <div
            key={index} 
            className="slide" 
            style={{transform: `translateX(${x}%)`}}
            >
            <ImgComp src={item} />
            </div>
            );
    })}
    <button id="goLeft" onClick={goLeft}>
    <FontAwesomeIcon className="icon" icon={faStepBackward} />
    </button>
    <button id="goRight" onClick={goRight}>
    <FontAwesomeIcon className="icon" icon={faStepForward} />
    </button>
    <Dots slides={images} activeSlide={activeSlide}/>
    </div>
    );
}

export default Slider;