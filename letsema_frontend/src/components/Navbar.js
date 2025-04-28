// src/components/Navbar.js
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">{title}</h1>
      <button
        onClick={() => navigate("/")}
        className="flex items-center bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600"
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </nav>
  );
}
