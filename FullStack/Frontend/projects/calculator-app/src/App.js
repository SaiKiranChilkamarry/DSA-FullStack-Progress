import React, { useState } from "react";
import "./App.css";

function CalculatorApp() {
  const [inputValue, setInputValue] = useState(""); // Stores the input
  const [result, setResult] = useState(null); // Stores the result

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInputValue("");
      setResult(null);
    } else if (value === "X") {
      setInputValue((prev) => prev.slice(0, -1)); // Remove last character
    } else if (value === "=") {
      try {
        let evalResult = eval(inputValue); // Evaluate the expression

        // If result is a float, round to 3 decimal places
        if (!Number.isInteger(evalResult)) {
          evalResult = parseFloat(evalResult.toFixed(3));
        }

        setInputValue(String(evalResult)); // Set input to result
        setResult(evalResult); // Store result
      } catch {
        setInputValue("Error");
      }
    } else {
      setInputValue((prev) => prev + value); // Append value to input
    }
  };

  return (
    <div className="App">
      <div className="header-container">
        <h1>Calculator App</h1>
      </div>

      {/* Input Field: Always visible when something is typed */}
      {inputValue && (
        <input
          type="text"
          value={inputValue}
          readOnly
          className="popup-input"
        />
      )}

      {/* Calculator Grid */}
      <div className="calculator">
        <button className="operator" onClick={() => handleButtonClick("AC")}>
          AC
        </button>
        <button className="operator" onClick={() => handleButtonClick("X")}>
          ⌫
        </button>
        <button className="operator" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button className="operatornull"></button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button className="operator" onClick={() => handleButtonClick("*")}>
          ×
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button className="operator" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className="operator" onClick={() => handleButtonClick("/")}>
          ÷
        </button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button className="operator" onClick={() => handleButtonClick("=")}>
          =
        </button>
      </div>
    </div>
  );
}

export default CalculatorApp;
