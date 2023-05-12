import React , {useState} from 'react';
import './index4.css';




const App4 = () =>{

  let time = new Date().toLocaleTimeString(); 

  const state = useState();

  const [count,setCount] = useState(time);

  
  const Inctime = () =>{
      
   let ctime = new Date().toLocaleTimeString();
    setCount(ctime);

  }

  return(
        <>
        <div>
        <h1 >{count}</h1>
        <button onClick = {Inctime}> GET TIME</button>
        </div>
        </>
  );

}
export default App4;