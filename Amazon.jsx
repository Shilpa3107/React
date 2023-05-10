import React from 'react';
import Data from './Data';
import Card from './Card';

const Amazon = () =>{

   return ( 
    <>
   <Card 
    key = {Data[2].id}
    imgsrc = {Data[2].imgsrc}
    sr = {Data[2].sr}
    sernam = {Data[2].sernam}
    link = {Data[2].link}
    />
    <Card 
    key = {Data[3].id}
    imgsrc = {Data[3].imgsrc}
    sr = {Data[3].sr}
    sernam = {Data[3].sernam}
    link = {Data[3].link}
    />
    <Card 
    key = {Data[4].id}
    imgsrc = {Data[4].imgsrc}
    sr = {Data[4].sr}
    sernam = {Data[4].sernam}
    link = {Data[4].link}
    />
    </>
   );

}
export default Amazon;