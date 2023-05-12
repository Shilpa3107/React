import React, {useState} from 'react';
import './index3.css';


const App3 = () => {
    const state = useState();
 
    const[count,setCount] = useState(0);
  
const IncNum = () =>{
     
    setCount(count + 1);

}

return(
    <> 
    <div>
        <h1 className = "element"> {count} </h1>
       <button onClick = {IncNum}> Click Me</button>
        </div>
    </>
);
}

export default App3;
