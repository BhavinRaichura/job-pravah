import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex gap-5 justify-center">
      <Link href="https://chat.whatsapp.com/Kos3QD8n1bz3RcU2XsSCvr">
        <FaWhatsapp        className=" hover:scale-105 transition-all w-10 h-10 cursor-pointer  rounded-full  text-white bg-lime-600"/>
      </Link>
      <Link href="https://t.me/+x-3u_5KFROVlZmJl">
        <FaTelegram        className=" hover:scale-105 transition-all w-10 h-10 cursor-pointer  rounded-full  text-blue-600 bg-white"/>
      </Link>
      <Link href="https://www.instagram.com/job_pravah?igsh=MXZ5OHNhcjhlaXhsNw==">
        <FaInstagram       className=" hover:scale-105 transition-all w-10 h-10 cursor-pointer  rounded-xl  text-white bg-gradient-to-tr from-yellow-500 from-10% via-rose-600 via-40% to-pink-600"/>
      </Link>
    </div>
  )
}

export default SocialButtons