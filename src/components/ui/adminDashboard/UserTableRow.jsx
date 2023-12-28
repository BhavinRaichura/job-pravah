import React from "react";
import UserRoleHandlerButton from "./UserRoleHandlerButton";

const UserTableRow = ({userid, image, username, role, email}) => {
  return (
    <tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-10 h-10 rounded-full"
              src={image}
              alt=""
            />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-800 hover:text-gray-900 capitalize">{username}</div>
            <div class="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          Active
        </span>
      </td>
      <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{role}</td>
      <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <UserRoleHandlerButton userid={userid.toString()} role={role}/>
      </td>
    </tr>
  );
};

export default UserTableRow;
