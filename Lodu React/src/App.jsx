import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ticket from './Ticket'
import TicketNum from './TicketNum'
// import TodoList from './Todo'
// import LudoBoard from './LudoBoard'
import Lottery from './Lottery'
function App() {
  let winCondition=(ticket)=>{
    
  }

  return (
    <>
   <Lottery n={3} winningSum={15}/>
    </>
  )
}

export default App
