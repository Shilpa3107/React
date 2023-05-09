import React from 'react';
import './index.css';

function Card(props){
    return(
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
    );
}
function Netflixseries(){
    return(
        <>
        <div className='cstyle'>
<Card 
    imgsrc= "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw=="
    sernam = "STRANGER THINGS"
    link = "https://www.netflix.com/title/80057281"
/>

<Card
imgsrc = "https://upload.wikimedia.org/wikipedia/en/6/66/Wednesday_Netflix_series_poster.png"
sernam = "WEDNESDAY"
link = "https://www.netflix.com/browse?jbv=81231974"
    
/>
<Card
    imgsrc = "https://i.ytimg.com/vi/QdG2mrnodcw/maxresdefault.jpg"
    sernam = "THE CROWN"
    link = "https://www.netflix.com/search?q=the%20crown&jbv=80025678"
/>

<Card 
imgsrc = "https://m.media-amazon.com/images/M/MV5BMDJiZGE5NzYtZGU3Zi00NDQwLWFhMjAtNTM0MDM2ZTljMjAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
sernam = "RATCHED"
link = "https://www.netflix.com/search?q=ratched&jbv=80213445"
/>

<Card 
imgsrc = "https://m.media-amazon.com/images/M/MV5BODNiNWQxMmMtMjIwNC00NDU2LTgwYzctNTI1ZDcyODBjZTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
sernam = "FUBAR"
link = "https://www.netflix.com/search?q=fubar&jbv=81397077"
/>

</div>
</>

    );
}
export default Netflixseries;
