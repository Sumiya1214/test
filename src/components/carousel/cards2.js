import React from "react";
import Slider from "react-slick";
import "../carousel/cards2.css";
import testData from "./json";

const Cards2 =()=>{
      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };
    return(
        <>
     <div className="cards-2">
                 <h2>Улирлын онцлох эрэгтэй</h2>
            <Slider {...settings}>
                        {
                            testData.map((row)=>(
                            <div className="cards2">
                                <div className="cards2-img">
                                    <img src ={row.img} alt = "/"/>
                                </div>
                                <div className="cards2-text">
                                    <p>{row.name}</p>
                                    <p>{row.une}₮</p>
                                </div>
                            </div>
                            ))
                        }
            </Slider>
    </div>

        
        </>

    )
}
export default Cards2
