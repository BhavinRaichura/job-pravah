import React from "react";

const DateFormateElement = ({ date }) => {
  const d = new Date(date);
  const dateString = d.toDateString()

  return (
    <span className="">
      {" "}
      {dateString}
    </span>
  );
};

export default DateFormateElement;
