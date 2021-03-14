import TimeSlotContainer from "./TimeSlotContainer";
import { useState } from "react";
import json from "./time_slots.json";
import "./App.css";

function App() {
  const [chosenIndexes, setChosenIndex] = useState([]);

  function setIndex(index) {
    setChosenIndex((prevState) => [...prevState, index]);
  }

  function removeIndex(index) {
    const indexToRemove = chosenIndexes.indexOf(index);

    chosenIndexes.splice(indexToRemove, 1);
    setChosenIndex(() => [...chosenIndexes]);
  }

  const timeslotsContainer = json.map((timeslotData, i) => {
    return (
      <TimeSlotContainer
        key={i}
        setIndex={setIndex}
        chosenIndexes={chosenIndexes}
        timeslotData={timeslotData}
        removeIndex={removeIndex}
      />
    );
  });

  return <div className="App">{timeslotsContainer}</div>;
}

export default App;
