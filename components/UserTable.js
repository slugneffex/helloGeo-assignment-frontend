import React from "react";

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md bg-white">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 py-3 px-4 text-left font-semibold tracking-wide">
              User Name
            </th>
            <th className="w-1/3 py-3 px-4 text-left font-semibold tracking-wide">
              Email
            </th>
            <th className="w-1/3 py-3 px-4 text-left font-semibold tracking-wide">
              Permalink
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user) => (
            <tr key={user.userId} className="hover:bg-gray-100">
              <td className="py-3 px-4 text-left border-b border-gray-200">
                {user.userName}
              </td>
              <td className="py-3 px-4 text-left border-b border-gray-200">
                {user.userEmail}
              </td>
              <td className="py-3 px-4 text-left border-b border-gray-200">
                {user.permalink}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
