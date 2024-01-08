import Logo from "@/components/ui/Logo";
import SocialButtons from "@/components/ui/SocialButtons";

const Footer = () => {
  return (
    <div>
      <section className="bg-zinc-950">
        <div className="max-w-lg bg-zinc-950 px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          
          <h1 className=" text-6xl font-semibold text-gray-300 my-2 text-center">Connect</h1>
          <h2 className=" text-base text-white font-light text-center">With Us</h2>

          <div className="mx-auto rounded-lg font-zinc-950 mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
         
            <SocialButtons noText={true} />
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
