import React from "react";
import Slider from "react-slick";

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
    <div>
        <h2>Улирлын онцлох эрэгтэй</h2>
            <Slider {...settings}>
                <div>
                    <div className="cards2">
                        <div className="cards2-img">
                            <img src = "https://cdnp.cody.mn/spree/images/1125562/product/open-uri20211020-2114564-66c9ex." alt = "/"/>
                        </div>
                        <div className="cards2-text">
                            <p>Малгай</p>
                            <p>99,000₮</p>
                        </div>
                    </div>
                </div>
            
            </Slider>
    </div>

    )
}
export default Cards2
