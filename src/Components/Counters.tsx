import React from "react";
import Counter from "./Counter";

interface CountersProps {
  counters: { id: number; value: number }[];
  handleReset: () => void;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Counters: React.FunctionComponent<CountersProps> = (props) => {
  const {
    counters,
    handleReset,
    handleIncrement,
    handleDecrement,
    handleDelete,
  } = props;

  return (
    <div className="p-2">
      <button className="btn btn-primary mt-2 mx-2" onClick={handleReset}>
        Reset
      </button>
      {counters.map((counter, index) => {
        return (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};
export default Counters;