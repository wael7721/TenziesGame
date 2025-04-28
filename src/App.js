import React, { useEffect } from "react";
import "./App.css";
import Die from "./components/Die";
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice);
  const [gameFinish, setGameFinish] = React.useState(false);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }
  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => generateNewDie());
  }

  function rollDice() {
    const roll = generateAllNewDice();
    if (gameFinish) {
      setDice(roll);
    } else {
      setDice(
        dice.map((prevDie, index) =>
          prevDie.isHeld === false
            ? { value: roll[index].value, isHeld: false }
            : { ...prevDie }
        )
      );
    }
  }

  useEffect(() => {
    function checkGameOver() {
      const firstDieValue = dice[0].value;
      const allHeld = dice.every((die) => die.isHeld);
      const allSameValue = dice.every((die) => die.value === firstDieValue);
      console.log(firstDieValue, allHeld, allSameValue);
      if (allSameValue && allHeld) {
        setGameFinish(true);
      } else {
        setGameFinish(false);
      }
    }
    checkGameOver();
  }, [dice]);

  return (
    <main>
      {gameFinish && <Confetti numberOfPieces={1000}/>}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same
        <br /> Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">
        {dice.map((die, index) => {
          return (
            <Die
              key={index}
              value={die.value}
              dice={dice}
              setDice={setDice}
              index={index}
            ></Die>
          );
        })}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {gameFinish ? "New Game" : "Roll Dice"}
      </button>
      {gameFinish && <div>Game Over</div>}
    </main>
  );
}
