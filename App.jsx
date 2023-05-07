import {add,sub,div,mult} from './Calc';

function App(){
    return (
        <>
     <ul>
    <li>Sum of two no is {add(40,4)}</li>
    <li>Sub of two no is {sub(30,3)}</li>
    <li>Div of two no is {div(10,3)}</li>
    <li>Mult of two no is {mult(10,3)}</li>
     </ul>
        
        </>
    );
}
export default App;
