import { useState } from "react";
import "./Lottery.css";   // make sure this file exists in same folder
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=3,winningSum=15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning =sum(ticket)===winningSum;
  function generateNewTicket() {
    setTicket(genTicket(n));
  }

  return (
    <div className="lottery">
      <h1>Lottery Game 🎰</h1>
      <Ticket ticket={ticket}/>
      <h3>{isWinning && "Congratulation ,You won!"}</h3>
      <button onClick={generateNewTicket}>Generate Ticket</button>
    </div>
  );
}
