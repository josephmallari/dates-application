import React, { useRef, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

const Button = styled.button`
  color: green;
  cursor: pointer;
  padding: 10px;
  border: 1px solid green;
  background: none;
  margin-bottom: 5px;
  font-size: 15px;
`;

const DayText = styled.h4`
  margin-bottom: 10px;
`;

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

  let dayMarkup = days[day - 1];

  useEffect(() => {
    if (props.chosenIndexes.includes(props.index)) {
      timeRef.current.classList.add("indexChosen");
    } else {
      timeRef.current.classList.remove("indexChosen");
    }
  });

  return (
    <div className={`dayNum${day}`}>
      <DayText className="dayText">
        {dayMarkup} {props.timeslot.start_time.split("T")[0]}
      </DayText>
      <Button
        onClick={() =>
          props.selectTime(timeRef.current.textContent, props.index)
        }
        ref={timeRef}
      >
        {moment.utc(props.timeslot.start_time).format("HH:mm")} -{" "}
        {moment.utc(props.timeslot.end_time).format("HH:mm")}
      </Button>
    </div>
  );
}
