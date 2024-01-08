"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  
  FaTelegram,

} from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoWhatsapp } from "react-icons/io";

import ShareAnywhereButton from "./ShareAnywhereButton";

const ShareButtons = ({width, height}) => {

  const [url, setUrl] = useState()
  const [title, setTitle] = useState()

  useEffect(()=>{
    setUrl(document.baseURI)
    setTitle(document.title)
  }, [])

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
      "_blank"
    );
  };

  const shareOnTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  

  return (
    <Suspense fallback={() => <span className={` ${width} ${height}  loading-bg-ani `}></span>}>
      <div className="flex gap-4">
        <FaFacebook
          onClick={shareOnFacebook}
          className={`text-blue-500 hover:scale-110 transition-all bg-white ${width} ${height} cursor-pointer`}
        />

        <LiaLinkedinIn
          onClick={shareOnLinkedIn}
          className={`bg-blue-800 hover:scale-110 transition-all border-2 border-blue-800 rounded-full text-white   ${width} ${height} cursor-pointer`}
        />
        
        <IoLogoWhatsapp
          onClick={shareOnWhatsApp}
          className={`text-green-500 hover:scale-110 transition-all bg-white ${width} ${height} cursor-pointer`}
          />
       

        <FaTelegram
          onClick={shareOnTelegram}
          className={`text-blue-600 hover:scale-110 transition-all bg-white ${width} ${height} cursor-pointer`}
        />
        
        <ShareAnywhereButton  url={url} title={title} width={width} height={height}  />
        
        
      </div>
    </Suspense>
  );
};

export default ShareButtons;
