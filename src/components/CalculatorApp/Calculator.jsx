import Header from "./components/Header.jsx";
import Table from "./components/Table.jsx";
import "./Calculator.css";
import { CALCULATOR_DATA } from "./assets/CALCULATOR_DATA";
import { useState } from "react";
import calculatorResult from "./components/ResultFunction.jsx";

function Calculator() {
  const [headerInput, setHeaderInput] = useState(CALCULATOR_DATA.items);

  const handleInputChange = (index, value) => {
    const newHeaderInput = [...headerInput];
    newHeaderInput[index].value = parseFloat(value);
    setHeaderInput(newHeaderInput);
  };

  return (
    <main className="Calculator">
      <Header data={headerInput} onInputChange={handleInputChange} />
      <Table data={headerInput} />
    </main>
  );
}

export default Calculator;
