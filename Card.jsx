import React from 'react';
import './index.css';

function Card(props){
   
    return(
        <>
        <div className ="cards">
           <div className = "card">
                <img 
                   src = {props.imgsrc}
                   alt = "pic" 
                   className = "card__image"
                 />
                <div className = "card__info">
                    <span className = "card__category">A NETFLIX ORIGINAL SERIES</span>
                    <h3 className = "card__title"> {props.sernam}</h3>
                    <a href = {props.link} target = "_blank">
                         <button> WATCH NOW</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;
