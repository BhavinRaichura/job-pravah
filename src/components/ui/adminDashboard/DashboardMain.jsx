"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import DashboardHeading from "./DashbaordHeading";

import { FaHome } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { HiDocumentAdd } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { PiBooksFill } from "react-icons/pi";
import { BiLogOut, BiSolidBookAdd } from "react-icons/bi";

const DashboardMain = ({ children }) => {
  const [open, setOpne] = useState(0);
  const path = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    setOpne(0);
  }, [path]);
  return (
    <div className="w-full ">
      <div className=" w-full h-16 items-center  flex border-b pl-5 gap-2 max-md:justify-between ">
        <button onClick={() => setOpne((e) => !e)}>
          {" "}
          {open ? (
            <IoMdClose className="w-10 h-8 p-1  rounded-md text-gray-500  hover:text-gray-800 " />
          ) : (
            <IoMenu className="w-10 h-8 p-1  rounded-md text-gray-500  hover:text-gray-800 " />
          )}{" "}
        </button>
        <div className=" w-36">
          <Logo />
        </div>
      </div>

      <div className="w-full  flex">
        {/*navbar*/}
        <div
          className={`
            border-r-2
            border-gray-100 transition-all max-md:fixed
             md:sticky h-screen top-0 z-50 
             md:p-2 shadow-lg flex flex-col justify-between
            ${
              open
                ? " w-2/5  max-2xl:w-1/3 max-md:backdrop-blur-3xl max-md:w-full max-md:p-2 "
                : "   w-20 max-md:w-0 overflow-hidden "
            }

        `}
        >
          <div>
            <div
              className={`px-3 items-center py-2 w-full  mb-8 flex gap-5 h-20 text-lg border-b overflow-hidden capitalize`}
            >
              {" "}
              <img
                src={session?.user?.image}
                className="w-8 h-8 rounded-full"
              />{" "}
              <span className={` ml-2 w-full ${!open ? " hidden " : "  "}`}>
                {session?.user?.name}{" "}
              </span>
              <button className="md:hidden float-right" onClick={()=>setOpne(0)}>
                <IoMdClose className="w-10 h-8 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
              </button>
            </div>
          
            <Link className="" href="/admin ">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin" ? " bg-gray-100 " : ""
                }`}
              >
                {" "}
                <span>
                  <FaHome className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 " />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>Home </p>
              </div>
            </Link>
            <Link className="" href="/admin/articles">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin/articles" ? " bg-gray-100 " : ""
                }`}
              >
                {" "}
                <span>
                  <FaListUl className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>Posts </p>
              </div>
            </Link>
            <Link className="" href="/admin/articles/new">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin/articles/new" ? " bg-gray-100 " : ""
                }`}
              >
                {" "}
                <span>
                  <HiDocumentAdd className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>New Posts </p>
              </div>
            </Link>
            <Link className="" href="/admin/users">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin/users" ? " bg-gray-100 " : ""
                }`}
              >
                {" "}
                <span>
                  <FaUsers className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>Users </p>
              </div>
            </Link>
            <Link className="" href="/admin/users/admins">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin/users/admins" ? " bg-gray-100 " : ""
                }`}
              >
                {" "}
                <span>
                  <FaUserShield className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>Admins</p>
              </div>
            </Link>
            <Link className="" href="/admin/books">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin/books" ? " bg-gray-100 " : ""
                }`}
              >
                {" "}
                <span>
                  <PiBooksFill className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>Books </p>
              </div>
            </Link>
            <Link className="" href="/admin/books/new">
              <div
                className={`px-4 items-center py-2 w-full hover:bg-gray-100  rounded-md flex gap-5  font-normal text-base h-10 ${
                  path === "/admin/books/new" ? " bg-gray-100 " : ""
                }`}
              >
                <span>
                  <BiSolidBookAdd className="w-7 h-7 p-1  rounded-md text-gray-500  hover:text-gray-800 "  />
                </span>{" "}
                <p className={`ml-4 ${!open ? " hidden " : " "}`}>New Book</p>
              </div>
            </Link>
          </div>
          <div className="  w-full bottom-10 my-2 relative ">
            <button
              className=" h-10 text-white w-full bg-gray-900 rounded-md py-2 px-5 gap-5 flex items-center"
              onClick={() => {
                signOut();
              }}
            >
              <BiLogOut className="w-4 h-4" />{" "}
              <p className={` m-auto text-center ${!open ? " hidden " : " "}`}>
                Logout
              </p>
            </button>
          </div>
        </div>

        {/* main window */}

        <div
          className={` w-full p-10 max-md:p-2 ${
            open ? " w-3/5 max-2xl:w-2/3 max-md:w-full" : " "
          }`}
        >
          <DashboardHeading heading={path} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
