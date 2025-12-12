import { useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  // Load saved input when calculator opens
  useEffect(() => {
    const savedInput = localStorage.getItem("calc-input");
    if (savedInput) {
      setInput(savedInput);
    }
  }, []);

  // Save to localStorage every time input changes
  useEffect(() => {
    localStorage.setItem("calc-input", input);
  }, [input]);

  // Add number/operator
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear input + localStorage
  const clearInput = () => {
    setInput("");
    localStorage.removeItem("calc-input");
  };

  // Backspace
  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  // Calculate expression
  const calculate = () => {
    try {
      const result = eval(input);
      setInput(String(result));
    } catch {
      alert("Invalid Expression");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly className="display" />

      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={backspace}>⌫</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button className="clear" onClick={clearInput}>AC</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
