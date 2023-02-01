import React from "react";
import Slider from "react-slick";
import Cards1 from "../components/carousel/cards1";
import Cards2 from "../components/carousel/cards2";
import "./about.css"

 const About = () =>{
    const Settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
    return(
        <div>
            <Slider {...Settings}>
          <div className="banner">
            <img src = "https://cdn.cody.mn/img/154498/2400x800xwebp/1920x648.jpg?h=fda6abe64e233d042aead106c9570e393801cc7a"
            alt = "/"
            />
          </div>
          <div className="banner">
            <img src = "https://cdn.cody.mn/img/150571/2200x0xwebp/deed_lig_header_banner_web.jpg?h=1824d01684c2d7091c81f26afc0bd485e44fb70a"
            alt = "/"
            />
          </div>
          <div className="banner">
            <img src = "https://cdn.cody.mn/img/154702/2200x0xwebp/asia_cup_header_banner_web.jpg?h=1824d01684c2d7091c81f26afc0bd485e44fb70a"
            alt = "/"
            />
          </div>
          <div className="banner">
            <img src = "https://cdn.cody.mn/img/154797/2200x0xwebp/Lalaland_header_banner_web.jpg?h=1824d01684c2d7091c81f26afc0bd485e44fb70a"
            alt = "/"
            />
          </div>
          <div className="banner">
            <img src = "https://cdn.cody.mn/img/154702/2200x0xwebp/asia_cup_header_banner_web.jpg?h=1824d01684c2d7091c81f26afc0bd485e44fb70a"
            alt = "/"
            />
          </div>
        </Slider>
        <div>
            <Cards1/>
            <Cards2/>
        </div>
     </div>
    )
 }
 export default About;