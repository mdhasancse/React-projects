<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
=======
import logo from './logo.svg';
import {useState, useCallback,useEffect} from 'react';
import './App.css';

function App() {

  let [count, setCounter] = useState(5)
  // let count=5;
  const addValue = ()=>{
    count=count+1;
    // console.log("clicked",Math.random());
    setCounter(count)
  }

  const removeValue = ()=>{
    if(count<=0) 
      alert("You cant remove items Irs already zero");
    count=count-1;
    setCounter(count)

  }
  return (
    <>
      <div className='allItems'>
        <h1>Xenica with react</h1>
        <h2>counter number {count}</h2>
        <button onClick={addValue}>Add Value {count}</button>
        <br />
        <button onClick={removeValue}>Remove Value {count}</button>
        <p>footer {count}</p>
      </div>
    </>
>>>>>>> 14f1a127d1d82b570b8db021f62bac5b59977b8d
  );
}

export default App;
