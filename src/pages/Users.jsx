import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <div className="text-2xl font-semibold mb-4 text-center">User List</div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left border border-green-600">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Gender</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-5">Loading...</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="even:bg-green-50 odd:bg-green-100 border-b border-green-200"
                >
                  <td className="py-2 px-4">USR-{user.id.toString().padStart(4, "0")}</td>
                  <td className="py-2 px-4">{user.firstName} {user.lastName}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                  <td className="py-2 px-4 capitalize">{user.gender}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
