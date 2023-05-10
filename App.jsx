import './index.css';
import Data from './Data';
import Card from './Card';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favpro = "NETFLIX";

// const Favprog = () =>{
//     if(favpro === "NETFLIX"){
//        return <Netflix/>;
//     }
//     else {
//         return <Amazon/>;
//     }
// };

function App(){
    return(
        <>
        <h1 className = "heading">LIST OF 5 WEB SERIES ON NETFLIX</h1>
        
         {favpro === "NETFLIX" ? <Netflix/> : <Amazon/>};
    </>
    );
}
export default App;
