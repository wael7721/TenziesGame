import React from "react";

import './Die.css'



export default function Die({dice,setDice,index,value}){
    const styles={
        backgroundColor:dice[index].isHeld?"#59E391":"white"
    }

    function handleClick(){
        setDice(prev=>prev.map((Die,idx)=>idx===index?{value:Die.value,isHeld:!Die.isHeld}:{...Die}))
    }
    return (
        <div className="Die" style={styles} onClick={()=>handleClick()}>{value}</div>
    )
}