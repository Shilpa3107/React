import React from 'react';
import './index.css';
import Image from './Image';

function Card(props){
   
    return(
        <>
        <div className ="cards">
           <div className = "card">
                <Image imgsrc={props.imgsrc}/>
                <div className = "card__info">
                    <span className = "card__category">{props.sr}</span>
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
