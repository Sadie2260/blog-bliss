import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import {  useCallback} from "react";

const Header=({slides})=>{
const [current,setCurrent]=useState(0);
const length=slides.length;
const autoScroll = true;
let slideInterval;
let intervalTime =5000;
useEffect(()=>{
    setCurrent(0)
}, [])
useEffect(()=>{
    if(autoScroll){
        tauto();
    }
    return()=> clearInterval(slideInterval);
}, [current])
const nextSlide=()=>{

    setCurrent(current=== length - 1 ? 0: current + 1);
}
const prevSlide=()=>{
    setCurrent(current === 0 ? length - 1 : current - 1);
}
const tauto = useCallback(() => {
  slideInterval =setInterval(nextSlide,intervalTime) ;
  }, [])

    return(
<section className="heroSectiion">
    <div className="heroWrapper">
        {slides.map((slide,index)=>{
         return(
            <div className="HeroSlide" key={ index }>
           { index === current && (
            <>
            <div className="HeroSlider">
                    <img className="Heroimg" src={slide.cover} alt="blog-img"/>
                    <div  className="Herocontent">
                        <h1>{slide.title}</h1>
                        <p>{slide.desc}</p>
                        <button className="Button">
                       <a href={slide.link} style={{textDecoration:"none" , color: "inherit"}}>  Read more </a>
                       <FontAwesomeIcon icon={faArrowRight }/>
                        </button>
                        </div>
                    </div>
                    </>
            )};
            </div> 
       )})}
        <div className="SliderButtons">
       <FontAwesomeIcon onClick={prevSlide} className="arrowButtons" icon={ faArrowAltCircleLeft }/>
       <FontAwesomeIcon onClick={nextSlide} className="arrowButtons" icon={ faArrowAltCircleRight }/>
        </div>
    </div>
</section>
    )
}
export default Header;