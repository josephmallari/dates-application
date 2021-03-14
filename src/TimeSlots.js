import React, { useRef, useEffect } from "react";
import moment from "moment";

export default function TimeSlots(props) {
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

  useEffect(() => {
    if (props.chosenIndex === props.index) {
      timeRef.current.classList.add("index-chosen");
    }

    if (props.clearedIndex && props.clearedIndex == props.index) {
      timeRef.current.classList.remove("index-chosen");
    }
  });

  let dayMarkup = days[day - 1];

  return (
    <div className={`day-num-${day}`}>
      <div className="day-text">{dayMarkup}</div>
      <div
        onClick={() =>
          props.selectTime(timeRef.current.textContent, props.index)
        }
        ref={timeRef}
      >
        {moment.utc(props.timeslot.start_time).format("HH:mm")} -{" "}
        {moment.utc(props.timeslot.end_time).format("HH:mm")}
      </div>
    </div>
  );
}
