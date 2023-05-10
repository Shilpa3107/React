import React from 'react';
import Data from './Data';
import Card from './Card';

const Netflix = () =>{

   return ( 
    <>
   <Card 
    key = {Data[0].id}
    imgsrc = {Data[0].imgsrc}
    sr = {Data[0].sr}
    sernam = {Data[0].sernam}
    link = {Data[0].link}
    />
    <Card 
    key = {Data[1].id}
    imgsrc = {Data[1].imgsrc}
    sr = {Data[1].sr}
    sernam = {Data[1].sernam}
    link = {Data[1].link}
    />
    </>
   );

}
export default Netflix;