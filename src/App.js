import React, { useEffect } from "react";
import './App.css'
import Die from "./components/Die";

export default function App (){

    const [dice,setDice]= React.useState(generateAllNewDice().map(die=>({value:die, isHeld:false})))
    const [gameFinish,setGameFinish]=React.useState(false)

    function generateAllNewDice(){
        return Array.from({ length: 10 }, (_, index) => (
            Math.ceil(Math.random()*6)
        ));
    }

    useEffect(()=>{
        function checkGameOver(){
            const firstDieValue = dice[0].value;
            const allHeld =dice.every(die=>die.isHeld)
            const allSameValue= dice.every(die=>die.value===firstDieValue)
            console.log(firstDieValue,allHeld,allSameValue)
            if (allSameValue && allHeld){
                setGameFinish(true)
            }
        }
        checkGameOver()
    },[dice]
    )

    

    function rollDice(){
        const roll=generateAllNewDice()
        setDice(dice.map((prevDie,index)=>(prevDie.isHeld===false?{value:roll[index],isHeld:false}:{...prevDie})))
    }

    return (
    <main>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same<br/> Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            
                {dice
                .map((die,index)=>{
                    return (<Die key={index} value={die.value} dice={dice} setDice={setDice} index={index}></Die>)
                })}
            
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        {gameFinish && <div>Game Over</div>}
    </main>
    )
}