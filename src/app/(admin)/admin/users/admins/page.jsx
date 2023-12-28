import React from "react";
import { getAllAdmin } from "./serverAction";
import UserRoleHandlerButton from "../component";
import UserTableRow from "@/components/ui/adminDashboard/UserTableRow";

const page = async () => {
  const users = await getAllAdmin()
  if (users.status !== 200) {
    return (
      <h1 className=" text-center font-light text-5xl my-20">Loading...</h1>
    );
  }
  return (
    <div>
      <h1 className=" text-center font-light text-5xl my-20">Admins</h1>
      <div class="flex  mt-6 justify-center">
        <div class=" w-full -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div class=" w-full inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-scroll border-b border-gray-200 rounded-md shadow-md">
              <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {users.data.map((user, key) => {
                    return (
                      <UserTableRow
                        key={key}
                        userid={user._id}
                        username={user.username}
                        role={user.role}
                        image={user.image}
                        email={user.email}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
