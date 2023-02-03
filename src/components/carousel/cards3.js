import React from "react";
import Irgendata from "./json2"

const Cards3 = () => {
    return(
        <>
            <h1>Иргэний боловсрол ном</h1>
               {Irgendata.map((nom) => (
                 
                    <div className="irgen-1">
                        <div className="irgen-zurag">
                            <img src ={nom.img} alt = "/"/>
                            <p>{nom.name}</p>
                        </div>
                        <div className="irgen-button">
                            <button></button>
                        </div>
                    </div>
                
            ))}
            
        </>
    )
}
export default Cards3