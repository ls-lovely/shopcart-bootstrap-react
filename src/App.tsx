import React, { useState } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Counters from "./Components/Counters";


function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const handleReset = () => {
    const countersCopy = [...counters];
    const resettedCounters = countersCopy.map((c) => ({ ...c, value: 0 }));
    setCounters(resettedCounters);
  };

  const handleIncrement = (id: number) => {
    const newCounters = [...counters];
    newCounters.find((c) => c.id === id)!.value++;
    console.log(newCounters);
    setCounters(newCounters);
  };

  const handleDecrement = (id: number) => {
    const newCounters = [...counters];
    newCounters.find((c) => c.id === id)!.value--;
    console.log(newCounters);
    setCounters(newCounters);
  };

  const handleDelete = (id: number) => {
    const countersCopy = [...counters];
    const remainingCounters = countersCopy.filter((c) => c.id !== id);
    setCounters(remainingCounters);
  };


  return (
    <>
      <Navbar
        totalCount={counters.filter((c) => c.value > 0).length}
        title="Items"
      />
      <Counters
        counters={counters}
        handleReset={handleReset}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
