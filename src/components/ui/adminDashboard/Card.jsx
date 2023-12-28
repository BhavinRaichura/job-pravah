import React from "react";

const Card = ({ children }) => {
  return (
    <div className=" transition-all w-60 h-36 border  rounded-lg overflow-hidden drop-shadow-xl  hover:shadow-xl">
      {children}
    </div>
  );
};

export default Card;
