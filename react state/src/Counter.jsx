import { useState } from "react";

function initi(){
        console.log("initi was executed");
        return Math.random();
    }

export default function Counter() {
    const [count, setCount] = useState(initi); // initialization
    console.log("component was rendered");
    
    let inCount=()=>{
       setCount((curCount)=>{
        return curCount+1;
       });
    }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    );
}
