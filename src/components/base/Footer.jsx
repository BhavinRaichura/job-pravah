import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../ui/Logo";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <section className="bg-zinc-950">
        <div className="max-w-lg bg-zinc-950 px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          
          <h1 className=" text-6xl font-semibold text-gray-300 my-2 text-center">Connect</h1>
          <h2 className=" text-base text-white font-light text-center">With Us</h2>

          <div className="mx-auto rounded-lg font-zinc-950 mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
         
            <div className="flex gap-5 justify-center">
              <IoLogoWhatsapp    className=" hover:scale-110 transition-all w-10 h-10 cursor-pointer  text-gray-300 hover:text-white active:text-gray-200"/>
              <FaTelegram        className=" hover:scale-110 transition-all w-10 h-10 cursor-pointer  text-gray-300 hover:text-white active:text-gray-200"/>
              <RiInstagramFill   className=" hover:scale-110 transition-all w-10 h-10 cursor-pointer  text-gray-300 hover:text-white active:text-gray-200"/>
            </div>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-zinc-950 pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Logo/>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
