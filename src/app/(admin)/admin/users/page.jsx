import React from "react";
import UsersTableHead from "./component";

const page = async () => {
  return (
    <div>
      <h1 className=" text-center font-light text-5xl my-20">Users</h1>
      <UsersTableHead />
    </div>
  );
};

export default page;
