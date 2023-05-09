import './index.css';
import Data from './Data';
import Card from './Card';

function App(){
    return(
        <>
        <h1 className = "heading">LIST OF 5 WEB SERIES ON NETFLIX</h1>
         {Data.map((val) => {
            return(
        <Card 
        imgsrc = {val.imgsrc}
        sernam = {val.sernam}
        link = {val.link}
        />
    );
         }) }
    </>
    );
}
export default App;