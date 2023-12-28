"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Logo from "../ui/Logo";
import { signIn, useSession, signOut, getProviders } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  const [open, setOpen] = useState(0);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      router.push(`/?q=${query}`);
      setOpen(0);
    }
  };

  useEffect(() => {
    setOpen(0);
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, [pathname]);

  return (
    <nav className={`h-16 border w-full flex items-center md:px-10 max-md:px-2 justify-between ${open ? " max-md:fixed top-0 bg-white " : " "}`} onMouseLeave={()=>setDropdown(0)}>
      <div className=" w-32">
        <Logo />
      </div>
      <div className="flex items-center">
        <div
          className={`flex gap-5 px-5 z-50 max-md:pt-8  backdrop-blur-2xl max-md:flex-col max-md:block max-md:fixed top-16 max-md:w-full max-md:left-0 max-md:h-full max-md:px-5 ${
            open ? "  " : " max-md:hidden "
          }`}
        >
          {/* urls */}
          <Link href={"/"} className={` border-b-2 border-transparent transition-all ${pathname==='/' ? "  border-gray-900 text-gray-900 " : " text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-400 "} `} onClick={()=>{ setDropdown(0); setOpen(0)}}>
            <li className={` list-none text-base font-bold p-2  rounded-md transition-all max-md:text-lg`}>
              Jobs
            </li>
          </Link>
          <Link href={"/exams"} className={` border-b-2 border-transparent transition-all ${pathname==='/exams' ? "  border-gray-900 text-gray-900 " : " text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-400 "} `} onClick={()=>{ setDropdown(0); setOpen(0)}}>
            <li className={` list-none text-base font-bold p-2  rounded-md transition-all max-md:text-lg`}>
              Exams
            </li>
          </Link>
          <Link href={"/download"} className={` border-b-2 border-transparent transition-all ${pathname==='/download' ? "  border-gray-900 text-gray-900 " : " text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-400 "} `} onClick={()=>{ setDropdown(0); setOpen(0)}}>
            <li className={` list-none text-base font-bold p-2  rounded-md transition-all max-md:text-lg`}>
              Download
            </li>
          </Link>
        </div>

        {/* check user is login */}
        {session ? (
          <div className="flex items-center">
            <button onClick={() => setDropdown((e) => !e)}>
              <img
                src={session?.user?.image}
                className="w-10 h-10 rounded-full loading-bg-ani "
                alt=""
                loading="lazy"
              />
            </button>
            <div>
              {dropdown ? (
                <div
                  className={`  w-52 absolute top-16 right-14 max-md:right-20 border  rounded-s-md rounded-b-md   z-50 backdrop-blur-3xl hover:shadow-lg drop-shadow-md bg-white`}
                >
                  <h1 className=" border-b py-4 px-4 text-xl font-medium capitalize ">
                    {session?.user?.name}
                  </h1>
                  <div className="py-2 px-2">
                    <Link href="#">
                      <div className="text-gray-500 text-base hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md" >
                        Profile
                      </div>
                    </Link>
                    {session?.user?.role === "Admin" ? (
                      <Link href="/admin">
                        <div className="text-gray-500 text-base hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md" >
                          Admin
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                    <div className="text-gray-500 text-base hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md" >
                      <Link href="#">Profile</Link>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setDropdown(0);
                      setOpen(0)
                      signOut();
                    }}
                    className="px-2"
                  >
                    <button className=" my-2 py-1 px-4 w-full rounded-md text-base border-2 border-black text-white font-medium bg-black hover:text-black hover:bg-white">
                      {" "}
                      logout
                    </button>
                  </div>
                </div>
              ) : ""}
            </div>
          </div>
        ) : (
          <div >
            {!session?.user
              ? providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="  py-1 px-3  rounded-md text-base border border-black text-white font-medium bg-black hover:text-black hover:bg-white"
                  >
                    SignIn
                  </button>
                ))
              : ""}
          </div>
        )}
        <button className="md:hidden" onClick={() => setOpen((e) => !e)}>
          {" "}
          {!open ? (
            <IoMenu className="w-10 h-8 p-1 m-2  rounded-md text-gray-500  hover:text-gray-800 " />
          ) : (
            <IoMdClose className="w-10 h-8 p-1 m-2 rounded-md text-gray-500  hover:text-gray-800 " />
          )}
        </button>
      </div>
    </nav>
  );

  
};

export default Navbar;
