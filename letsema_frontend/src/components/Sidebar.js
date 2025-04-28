// src/components/Sidebar.js
import { Link } from "react-router-dom";

export default function Sidebar({ links }) {
  return (
    <aside className="w-60 bg-gray-800 text-white min-h-screen p-4">
      <ul>
        {links.map((link) => (
          <li key={link.path} className="mb-3">
            <Link
              to={link.path}
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
