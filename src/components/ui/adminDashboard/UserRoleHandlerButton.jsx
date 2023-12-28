"use client"
import { makeAdmin, removeAdmin } from '@/app/(admin)/admin/users/serverAction';
import React from 'react'

import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonRemoveSharp } from "react-icons/io5";

const UserRoleHandlerButton = ({  userid, role}) => {
  return (
    <button onClick={ async() =>{ 
      if(role==="Admin"){
        const res = await removeAdmin(userid)
        console.log(res);
      } else if(role==="Client") {
        const res = await makeAdmin(userid)
        console.log(res)
      }
        
    }}>{
      role==="Admin" ? 
      <IoPersonRemoveSharp  className='w-4 h-4 hover:scale-125 transition-all text-gray-500 hover:text-gray-900'/> :
      <IoPersonAddSharp     className='w-4 h-4 hover:scale-125 transition-all text-gray-500 hover:text-gray-900'/> 
  }</button>
  )
}

export default UserRoleHandlerButton