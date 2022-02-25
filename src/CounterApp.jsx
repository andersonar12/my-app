import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value); // useState retorna un arreglo por eso lo desestructuramos

  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <div>
      <h1>CounterApp</h1>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>Aumentar +1</button>
      <button onClick={handleReset}>Resetear</button>
      <button onClick={handleSubtract}>Sustraer -1</button>
    </div>
  );
};

CounterApp.propTypes = { value: PropTypes.number };

export default CounterApp;
