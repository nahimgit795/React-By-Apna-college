import { useState, useEffect } from "react";

export default function LudoBoard() {
  let [moves, setMove] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, setArr] = useState(["no moves"]);

  // function to update any color
  function updateMove(color) {
    setMove((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }));

    setArr((prevArr) => {
      return [...prevArr, `${color} moves`];
    });
  }

  // log latest array whenever it changes
  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div>
      <p>Game begins</p>
      <p>{arr.join(", ")}</p> {/* render as a readable string */}
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ background: "blue", color: "white" }}
          onClick={() => updateMove("blue")}
        >
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ background: "yellow" }}
          onClick={() => updateMove("yellow")}
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button
          style={{ background: "green", color: "white" }}
          onClick={() => updateMove("green")}
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button
          style={{ background: "red", color: "white" }}
          onClick={() => updateMove("red")}
        >
          +1
        </button>
      </div>
    </div>
  );
}
