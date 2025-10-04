import { useState,useEffect } from "react"

export default function Counter(){
    let [countx,setcountx]=useState(0);
    let [county,setcounty]=useState(0);
    let incCountx=()=>{
        setcountx(currCount=>currCount+1);
    }
    let incCounty=()=>{
        setcounty(currCount=>currCount+1);
    }
    useEffect(function printSomething(){
        console.log("this is side-effect");
        
    },[]);
    return (<div>
        <h3>count={countx}</h3>
        <button onClick={incCountx}>click</button>
          <h3>count={county}</h3>
        <button onClick={incCounty}>click</button>
    </div>)
}