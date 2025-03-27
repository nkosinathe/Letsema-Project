import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Loan Officer", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Borrower", status: "Inactive" },
    { id: 3, name: "Alice Johnson", role: "Admin", status: "Active" }
  ]);

  const navigate = useNavigate();

  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    ));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.role}</td>
              <td className="p-2 border">{user.status}</td>
              <td className="p-2 border">
                <button 
                  className={`px-3 py-1 rounded ${user.status === "Active" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status === "Active" ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back to Admin Dashboard Button */}
      <button
        onClick={() => navigate("/admin")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Admin Dashboard
      </button>
    </div>
  );
}
