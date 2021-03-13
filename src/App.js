import json from "./time_slots.json";
import Timeslots from "./TimeSlots";
import { useState } from "react";
import "./App.css";

function App() {
  const [daysArr, setDaysArr] = useState([]);

  const markup = json.map((x, i) => {
    const timeslots = x.time_slots
      .sort((a, b) => {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      })
      .map((timeslot, j) => (
        <Timeslots
          key={j}
          timeslot={timeslot}
          daysArr={daysArr}
          setDaysArr={setDaysArr}
        />
      ));

    return (
      <div key={i}>
        <div>{x.name}</div>
        <div>chosen time:</div>
        {timeslots}
      </div>
    );
  });

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {markup}
    </div>
  );
}

export default App;
