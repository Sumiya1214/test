import React from "react";
import Slider from "react-slick";
import "../carousel/cards1.css";

const Cards1 = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return(
        <div className="cards">
        <h2 className="ulirliin-ontslog">Улирлын онцлох</h2>
        <Slider {...settings}>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150349/300x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
                <p>Өвлийн Спорт</p>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150350/300x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150351/300x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150352/300x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150866/300x0xwebp/huuhdiin_dulaan_tsamts.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150354/300x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150349/300x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150350/300x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          <div className="cards1">
                <img src = "https://cdn.cody.mn/img/150351/300x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59"
                alt = "/"/>
          </div>
          
        </Slider>
      </div>
    )
}

export default Cards1