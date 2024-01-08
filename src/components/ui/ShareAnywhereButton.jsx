"use client";
import React, { Suspense } from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareAnywhereButton = ({ url, title, width, height }) => {
  const shareViaBrowser = () => {
    const customMessage = "";
    const fullMessage = `${customMessage}\n\n${title} \n`;

    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: fullMessage,
          url: url,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert(
        "Sharing is not supported on this browser. You can manually copy and share the following message:\n\n" +
          fullMessage
      );
    }
  };

  return (
    <Suspense
      fallback={() => (
        <span className={` ${width} ${height}  loading-bg-ani `}></span>
      )}
    >
      <FaShareAlt
        onClick={shareViaBrowser}
        className={`text-gray-600 cursor-pointer  hover:scale-110 transition-all  bg-white ${width} ${height}`}
      />
    </Suspense>
  );
};

export default ShareAnywhereButton;
