import React from "react";

//css
import "./card.css"
function Card({cardData}) {
    return(
        <>
            {cardData?.map((contry,index)=>{
                
                const { name, population, region, flag}=contry;
       
                return(

                    <a key={index} href="http://google.com" className="card-link">

                    <div className="card">
                        <div className="card-img">
                            <img src={flag} alt="contry"></img>
                        </div>

                        <div className="card-subtitle">
                            <h5>{name}</h5>
                            <p>population:<span>{population}</span></p>
                            <p>region:{region}</p>
                            <p>capital: beijing</p>

                        </div>


                    </div>



                </a>
                )
            })}
           
       
        
        
        
        
        
        
        
        </>   
    );
    
}

export default Card;