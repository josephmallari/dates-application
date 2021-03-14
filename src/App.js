import TimeSlotWrapper from "./TimeSlotWrapper";
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

  const timeslotsWrapper = json.map((timeslotData, i) => {
    return (
      <TimeSlotWrapper
        timeslotData={timeslotData}
        key={i}
        setIndex={setIndex}
        chosenIndex={chosenIndex}
        clearIndex={clearIndex}
        clearedIndex={clearedIndex}
      />
    );
  });

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {timeslotsWrapper}
    </div>
  );
}

export default App;
