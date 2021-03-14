import React, { useState } from "react";
import TimeSlots from "./TimeSlots";
import styled from "styled-components";

const CompanyHeader = styled.h3`
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 10px;
`;

const ClearButton = styled.button`
  background: transparent;
  padding: 5px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  margin-left: 5px;
`;

const TimeText = styled.span`
  color: #0e86d4;
  font-weight: bold;
  font-size: 18px;
`;

const ChosenTimeText = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

const TimeSlotsContainer = styled.div`
  width: calc(100% / 3);
`;

const Times = styled.div`
  height: 100vh;
  overflow: scroll;
  width: 180px;
`;

export default function TimeSlotContainer(props) {
  const [chosenTime, setChosenTime] = useState();
  const [selectedIndex, setSelectedIndex] = useState();

  function selectTime(time, index) {
    setChosenTime(time);
    setSelectedIndex(index);
    props.setIndex(index);
  }

  // clear/reset selected time
  function clearTime() {
    setChosenTime(null);
    props.removeIndex(selectedIndex);
  }

  const timeslots = props.timeslotData.time_slots
    // json is already sorted but covering cases where it may not be
    .sort((a, b) => {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    })
    .map((timeslot, j) => (
      <TimeSlots
        key={j}
        timeslot={timeslot}
        selectTime={selectTime}
        index={j}
        chosenIndexes={props.chosenIndexes}
        indexToRemove={props.indexToRemove}
      />
    ));

  return (
    <TimeSlotsContainer>
      <CompanyHeader className="companyName">
        {props.timeslotData.name}
      </CompanyHeader>
      <ChosenTimeText className="chosenTime">
        <span>
          Chosen time: <TimeText>{chosenTime}</TimeText>
        </span>
        {chosenTime ? (
          <ClearButton onClick={clearTime}>Clear Time</ClearButton>
        ) : null}
      </ChosenTimeText>
      <Times>{timeslots}</Times>
    </TimeSlotsContainer>
  );
}
