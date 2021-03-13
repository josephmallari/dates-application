import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

export default function Example(props) {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  // const [time, setTime] = useState();
  const timeRef = useRef();
  const day = moment(props.timeslot.start_time.split("T")[0]).day();

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
    console.log("select time");
    // setTime("time selected");
    console.log(timeRef.current);
  }

  return (
    <div key={props.index}>
      <div>{days[day - 1]}</div>
      <div onClick={selectTime} ref={timeRef}>
        {moment.utc(props.timeslot.start_time).format("HH:mm")} -{" "}
        {moment.utc(props.timeslot.end_time).format("HH:mm")}
      </div>
    </div>
  );
}
