import React from "react";

function ImgComp({src}) {

    const imgStyle = {
        width: 100 + "%",
        height: "auto"
    };
    
    return <img src={src} alt="slider-img" style={imgStyle}></img>; 
}

export default ImgComp;