import React from "react";
import styles from "./counter.module.css";

interface CounterProps {
    counter: { id: number; value: number };
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  const Counter: React.FunctionComponent<CounterProps> = (props) => {
    const { counter, onIncrement, onDecrement, onDelete } = props;
  
    const getCountText = () => {
      if (counter.value === 0) return "Zero";
      else {
        return counter.value;
      }
    };
  
    const getClasses = () => {
      let classes = "badge bg-";
  
      if (counter.value === 0) classes += "warning text-dark";
      else classes += "primary text-light";
  
      return classes;
    };
  
    return (
      <div className={styles.counter}>
        <div className={getClasses()}>
          {counter.value === 0 ? "Zero" : counter.value}
        </div>
        <div className={styles.buttons}>
          <button
            className="btn btn-secondary"
            onClick={() => onIncrement(counter.id)}
          >
            +
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => onDecrement(counter.id)}
            disabled={counter.value === 0}
          >
            -
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(counter.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  };
  export default Counter;