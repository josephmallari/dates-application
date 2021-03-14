import TimeSlotContainer from "./TimeSlotContainer";
import { useState } from "react";
import json from "./time_slots.json";
import "./App.css";

function App() {
  const [chosenIndex, setChosenIndex] = useState();
  const [clearedIndex, setClearedIndex] = useState();

  function setIndex(index) {
    setChosenIndex(index);
  }

  function clearIndex(index) {
    setClearedIndex(index);
  }

  const timeslotsContainer = json.map((timeslotData, i) => {
    return (
      <TimeSlotContainer
        key={i}
        setIndex={setIndex}
        clearIndex={clearIndex}
        chosenIndex={chosenIndex}
        clearedIndex={clearedIndex}
        timeslotData={timeslotData}
      />
    );
  });

  return <div className="App">{timeslotsContainer}</div>;
}

export default App;
