import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialButtons = ({noText}) => {
  return (
    <div className={`flex ${noText ? " gap-10 " : " flex-col gap-5 " }  justify-center`}>
      <Link href={process.env.WHATSAPP_URI} className={noText ? " " : 'bg-green-500 text-white py-1 px-2 rounded-md'}>
        <IoLogoWhatsapp        className={` inline-block hover:scale-105 transition-all w-9 h-9 cursor-pointer  rounded-lg  text-white p-1 bg-green-500 `}/>
        <span className={`px-2 text-base rounded-md  font-semibold ${noText ? " hidden" : " "}`}>Join Whatsapp Group</span>
      </Link>
      <Link href={process.env.TELEGRAM_URI} className={noText ? " ": 'bg-blue-600 text-white py-1 px-2 rounded-md' }>
        <FaTelegramPlane        className=" inline-block hover:scale-105 transition-all w-9 h-9 cursor-pointer  rounded-lg p-1 bg-blue-600 text-white"/>
      <span className={`px-2 text-base rounded-md  font-semibold ${noText ? " hidden" : " "}`}>Join Telegram Channel</span>
      </Link>
      <Link href={process.env.INSTAGRAM_URI} className={noText ? " " : 'bg-rose-600 text-white py-1 px-2 rounded-md'}>
        <FaInstagram       className=" inline-block hover:scale-105 transition-all w-9 h-9 cursor-pointer  rounded-lg  text-white bg-gradient-to-tr from-yellow-500 from-10% via-rose-600 via-40% to-pink-600"/>
        <span className={`px-2 text-base rounded-md  font-semibold ${noText ? " hidden" : " "}`}>Follow on Instagram</span>
      </Link>
    </div>
  )
}

export default SocialButtons