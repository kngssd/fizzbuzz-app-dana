import { useState } from "react";
import "./App.css";
import { generateFizzBuzz } from "./FizzBuzz";
import React from "react";

export default function App() {
  const [count, setCount] = useState(1);

  function next() {
    let futureCount = count + 1;
    setCount(futureCount);
  }
  function reset() {
    let futureCount = 1;
    setCount(futureCount);
  }
  let fizzBuzzChecking = generateFizzBuzz(count);

  return (
    <>
      <header>
        <h1 className="heading">Dana&apos;s FizzBuzz</h1>
      </header>
      <div className="counter">
        <button className="counter--minus" onClick={reset}>
          Reset
        </button>
        <div className="counter--count">
          <h1>{fizzBuzzChecking}</h1>
        </div>
        <button className="counter--plus" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}
