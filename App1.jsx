import React from 'react';
import './index1.css';
import SlotM from './SlotMach';

const App1 =() => {
    return (
        <>
        <h1 className = "heading"> WELCOME TO SLOT MACHINE GAME</h1>
        <div className = "slotmachine">
    <SlotM x = '😄' y = '😄' z = '😄' />
    <SlotM x = '🍎' y = '❤️' z = '🍎'/>
    <SlotM x = '🐌' y = '🐌' z =  '🐍'/>
    <SlotM x = '🥪' y = '🥪' z = '🥪' />
    <SlotM x = '🛺' y = '🛺' z = '🛺'/>
    </div>
    </>
    );
}
export default App1;
