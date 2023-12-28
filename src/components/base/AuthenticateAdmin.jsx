"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Logo from "../ui/Logo";

const AuthenticateAdmin = ({ children}) => {
  const {status, data: session} = useSession()
  const router = useRouter()
  
  //console.log("auth: ",session)

  if(status==="loading"){
    return (
      <div className="flex justify-center items-center my-56">
        <div className=" my-auto">
          <div className="flex justify-center">
            <Logo className=""/>
          </div>
          <div className=" w-80 p-1 text-center m-10 text-base loading-bg-ani rounded-full text-gray-500">Loading...</div>
        </div>
      </div>
    )
  }
  else if(status !== "loading" && status==="authenticated" && session.user.role==='Admin'){
   // console.log("auth status: ",status)
    return <div>{children}</div>;
  }else{ 
    router.push('/')
  }
  
};

export default AuthenticateAdmin;
