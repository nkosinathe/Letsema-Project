// src/pages/LoginPage.js
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Mock user data
const mockUsers = [
  { email: "borrower@example.com", password: "Borrower@123", role: "borrower" },
  { email: "loanofficer@example.com", password: "LoanOfficer@123", role: "loan_officer" },
  { email: "admin@example.com", password: "Admin@123", role: "admin" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }

    // Find matching user
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      // Redirect based on role
      if (role === "borrower") navigate("/borrower");
      else if (role === "loan_officer") navigate("/loan_officer");
      else if (role === "admin") navigate("/admin");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 text-center"
      >
        <p className="text-gray-500 mb-6">Please log in to continue</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-5 text-left"
          >
            <label className="block text-gray-600 text-sm mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-100"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-5 text-left"
          >
            <label className="block text-gray-600 text-sm mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-100"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          {/* Role Selection Dropdown */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-6 text-left"
          >
            <label className="block text-gray-600 text-sm mb-2 font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select role</option>
              <option value="borrower">Borrower</option>
              <option value="loan_officer">Loan Officer</option>
              <option value="admin">Admin</option>
            </select>
          </motion.div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition hover:bg-blue-700 shadow-md"
          >
            Login
          </motion.button>
        </form>

        {/* Sign Up Section */}
        <div className="mt-6">
          <p className="text-gray-500 text-sm">Don't have an account?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-lg transition hover:bg-gray-400 shadow-md"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
