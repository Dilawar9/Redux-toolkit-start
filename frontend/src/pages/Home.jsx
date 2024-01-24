import React from 'react'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,incrementByAmount } from '../features/counterSlice';



function Home() {
    const counter = useSelector( (state) => state.counter);
    const dispatcher = useDispatch();
    const [amount, setAmount] = useState("");
  
    const incrementValue = () => {
      dispatcher( increment() )
    }
    const decrementValue = () => {
        dispatcher( decrement() )
      }
  
    const updateAmount = () => {
      dispatcher(incrementByAmount(amount));
    }
  return (
    <>

    <h1>Redux Counter</h1>
    <h1>Counter:{counter.value}</h1>
    <button onClick={incrementValue} >Increament </button>
    
    <button onClick={decrementValue}>Decrement </button>
    <br/>
    <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} />
    <br/>
    <button onClick={updateAmount}>Edit </button>


    </>
  )
}


export default Home;