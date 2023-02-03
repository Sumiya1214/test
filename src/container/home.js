import React from "react";
import "./home.css"
import Zurag1 from "../assets/sale.webp";
import Zurag2 from "../assets/angilal-geriin-tawilga.webp";
import Zurag3 from "../assets/angilal-tsahilgaan-heregsel.webp";
import Zurag4 from "../assets/angilal-togloom.webp";
import Zurag5 from "../assets/angilal-aris-archilgaa.webp";
import Zurag6 from "../assets/angilal-technology.webp";
import Zurag7 from "../assets/angilal-togloom.webp";
import Zurag8 from "../assets/angilal-unet-edlel.webp";
import Zurag9 from "../assets/angilal-sport.webp";
import Zurag10 from "../assets/angilal-tejeewer-amitnii-hangamj.webp";

 const Home = () =>{
    const data = [
        {
            key:1,
            description:"Хямдрал",
            img: Zurag1,
        },
         {
            key:2,
            description:"Гэрийн тавилга",
            img: Zurag2,
         },
         {
            key:3,
            description:"Цахилгаан хэрэгсэл",
            img: Zurag3,
         },
         {
            key:4,
            description:"Тоглооом",
            img: Zurag4,
         },
         {
            key:5,
            description:"Арьс арчилгаа",
            img: Zurag5,
         },
         {
            key:6,
            description:"Технологи",
            img: Zurag6,
         },
         {
            key:7,
            description:"Эрүүл мэнд",
            img: Zurag7,
         },
         {
            key:8,
            description:"Үнэт эдлэл",
            img: Zurag8,
         },
         {
            key:9,
            description:"Спорт",
            img: Zurag9,
         },
         {
            key:10,
            description:"Тэжээвэр амьтаны хангамж",
            img: Zurag10,
         }

    ]
    return(
        <div>
            <h2 className="ontsloh">Онцлох ангилал</h2>
            <div className="rowimg">
            {
                data.map((row)=>(
                    <div className="zuragnuud">
                       <img src={row.img} alt="."/>
                       <p>{row.description}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
 }
 export default Home