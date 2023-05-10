import React from 'react';
import './index1.css';

function SlotM(props){
    let {x,y,z} = props;
  
    if((x===y) && (y===z)){
      return(
          <>
          <div className = "slotinner">
          <h1> {x} {y} {z} </h1>
          <h1> THIS IS MATCHING</h1>
          <hr/> 
          </div>    
          </>
      );
    }
    else {
      return(
          <>
          <div className = "slotinner">
          <h1> {x} {y} {z} </h1>
          <h1> THIS IS NOT MATCHING</h1>
          <hr/> 
          </div>    
          </>
      );
    }
  }
  export default SlotM;