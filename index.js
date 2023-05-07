import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const time = new Date();
let t  = time.getHours();
let k = " ";

const cstyle ={ 
    backgroundColor: "lightgoldenrodyellow"
};
if(t>= 1 && t<12){
k = "Good Morning";
cstyle.color = "green";
}
else if(t>=12 && t<19)
{
    k = "Good Afternoon";
    cstyle.color = "orange";
}
else {
    k = "Good Night";
    cstyle.color = "black";
}
ReactDOM.render(
<>
<h1 className = "heading"> Hello Sir, <span style = {cstyle}> {k} </span></h1>

</>,
document.getElementById("root")
);