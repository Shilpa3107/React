import React from 'react';
import "./index.css";

const time = new Date();
const t = time.getHours();
 
let k = " ";
const cstyle = {
    backgroundColor : "lightgoldenrodyellow"
};
 if(t>=1 && t<12){
    k = "Good Morning";
    cstyle.color = "green";
 }
 else if(t>=12 && t<7){
    k = "Good Afternoon";
    cstyle.color = "orange";
 }
 else{
    k = "Good Night";
    cstyle.color = "black";
 }

function Heading(){
    return (<h1 className = "heading">Hello sir,<span style = {cstyle}> {k} </span></h1>);
}

export default Heading;