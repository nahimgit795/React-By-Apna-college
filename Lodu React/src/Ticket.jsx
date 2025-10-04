import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      {ticket.map((num, idx) => (
        <TicketNum key={idx} num={num} />
      ))}
    </div>
  );
}
