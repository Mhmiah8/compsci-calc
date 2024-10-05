import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("basic");
  const [theme, setTheme] = useState("light");
  const [isCompsciMode, setIsCompsciMode] = useState(false);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const toggleMode = () => {
    setIsCompsciMode(!isCompsciMode);
    setMode(isCompsciMode ? "basic" : "comp sci");
    setInput("");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const convertToHex = () => {
    try {
      const decimal = parseInt(input, 10);
      setInput(decimal.toString(16).toUpperCase());
    } catch (error) {
      setInput("Error");
    }
  };

  const convertToBinary = () => {
    try {
      const decimal = parseInt(input, 10);
      setInput(decimal.toString(2));
    } catch (error) {
      setInput("Error");
    }
  };

  const convertHexToDecimal = () => {
    try {
      const decimal = parseInt(input, 16);
      setInput(decimal.toString(10));
    } catch (error) {
      setInput("Error");
    }
  };

  const convertBinaryToDecimal = () => {
    try {
      const decimal = parseInt(input, 2);
      setInput(decimal.toString(10));
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <h1>React Calculator by mhmiah8</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {!isCompsciMode ? (
          <>
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button>
            <button onClick={() => handleInput("+")}>+</button>
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button>
            <button onClick={() => handleInput("-")}>-</button>
            <button onClick={() => handleInput("7")}>7</button>
            <button onClick={() => handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button>
            <button onClick={() => handleInput("*")}>*</button>
            <button onClick={() => clearInput()}>C</button>
            <button onClick={() => handleInput("0")}>0</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => handleInput("/")}>/</button>
          </>
        ) : (
          <>
            <div className="input-buttons">
              <button onClick={() => handleInput("0")}>0</button>
              <button onClick={() => handleInput("1")}>1</button>
              <button onClick={() => handleInput("2")}>2</button>
              <button onClick={() => handleInput("3")}>3</button>
              <button onClick={() => handleInput("4")}>4</button>
              <button onClick={() => handleInput("5")}>5</button>
              <button onClick={() => handleInput("6")}>6</button>
              <button onClick={() => handleInput("7")}>7</button>
              <button onClick={() => handleInput("8")}>8</button>
              <button onClick={() => handleInput("9")}>9</button>
              <button onClick={() => handleInput("A")}>A</button>
              <button onClick={() => handleInput("B")}>B</button>
              <button onClick={() => handleInput("C")}>C</button>
              <button onClick={() => handleInput("D")}>D</button>
              <button onClick={() => handleInput("E")}>E</button>
              <button onClick={() => handleInput("F")}>F</button>
            </div>
            <button onClick={convertToHex}>to Hex</button>
            <button onClick={convertToBinary}>to Bin</button>
            <button onClick={convertHexToDecimal}>Hex to Dec</button>
            <button onClick={convertBinaryToDecimal}>Bin to Dec</button>
            <button onClick={clearInput}>C</button>
          </>
        )}
      </div>
      <div className="toggle">
        <button onClick={toggleMode}>
          {isCompsciMode ? "Switch to Basic" : "Switch to Comp Sci"}
        </button>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;

             