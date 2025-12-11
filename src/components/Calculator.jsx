import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    // state to store input /expression 
    const [input, setInput] = useState("")
    
    // add value to input
    const handleClick = (value) => {
        setInput(input + value);
    };

    // clear screen
    const clearInput = () => {
        setInput("");
    };

    // backspace
    const backspace = () => {
        setInput(input.slice(0, -1));
    };
    // calculate final result 
    const calculate = () => {
        try {
            const result = eval(input);      //safe here because you control input
            setInput(String(result));
        }catch {
            alert("Invalid Expression");
        }
    };

    return (
        <div className="calculator">
            <h2>Calculator</h2>
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
            <button onClick={() => handleClick("/")}></button>
        </div>
        </div>

    );
}

export default Calculator;