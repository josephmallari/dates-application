import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

export default function TimeSlots(props) {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  // const [time, setTime] = useState();
  const day = moment(props.timeslot.start_time.split("T")[0]).day();
  const timeRef = useRef();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function selectTime() {
    // setTime("time selected");
    console.log(timeRef.current.textContent);
  }

  let dayMarkup = days[day - 1];

  return (
    <div key={props.index} className={`day-num-${day}`}>
      <div className="day-text">{dayMarkup}</div>
      <div onClick={selectTime} ref={timeRef}>
        {moment.utc(props.timeslot.start_time).format("HH:mm")} -{" "}
        {moment.utc(props.timeslot.end_time).format("HH:mm")}
      </div>
    </div>
  );
}
