import React from "react";

const Dot = ({active}) => {
    const dotStyle = {
        padding: 10 + "px",
        marginRight: 5 + "px",
        cursor: "pointer",
        borderRadius: 50 + "%",
        background: `${active ? "black" : "grey"}`
    };
    
    return (<span style={dotStyle}></span>);
};


const Dots = ({ slides, activeSlide}) => {
    const dotsStyle = {
    position: "absolute",
      bottom: 25 + "px",
      width: 100 + "%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } ;

    return (
    <div style={dotsStyle}>
    {slides.map((slide, i) => (
        <Dot key={slide} active={activeSlide === i}/>
    ))}
    </div>)
}

export default Dots;