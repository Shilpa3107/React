import React, {useState} from 'react';
import './index5.css';
const App5 = () => {

     let time = new Date().toLocaleTimeString();

     const [ctime, setCTime] = useState(time);
   
     const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
     }
   
     setInterval(updateTime,1000);
     return(
       <>
       <div>
               <h1> {ctime} </h1>
              
        </div>
       </>
    );
}

export default App5;