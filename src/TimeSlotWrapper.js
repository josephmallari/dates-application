import React, { useState, useEffect, useRef } from "react";
import TimeSlots from "./TimeSlots";

export default function TimeSlotWrapper(props) {
  const [chosenTime, setChosenTime] = useState();
  const [selectedIndex, setSelectedIndex] = useState();

  const timeslots = props.timeslotData.time_slots
    .sort((a, b) => {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    })
    .map((timeslot, j) => (
      <TimeSlots
        key={j}
        timeslot={timeslot}
        selectTime={selectTime}
        index={j}
        chosenIndex={props.chosenIndex}
        clearedIndex={props.clearedIndex}
      />
    ));

  function selectTime(time, index) {
    setChosenTime(time);
    setSelectedIndex(index);
    props.setIndex(index);
  }

  function clearTime() {
    setChosenTime(null);
    props.clearIndex(selectedIndex);
  }

  return (
    <div className="timeslotWrapper">
      <div>{props.timeslotData.name}</div>
      <div>chosen time: {chosenTime}</div>
      <div onClick={clearTime}>clear time</div>
      {timeslots}
    </div>
  );
}
