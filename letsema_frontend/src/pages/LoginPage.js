import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // Your API handler
import { jwtDecode } from "jwt-decode"; // Import jwt-decode to decode the JWT token
import "./LoginPage.css"; // Your CSS file for styling

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State to manage role selection (only for sign-up)
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up forms
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || (!isLogin && !role)) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      let response;

      if (isLogin) {
        // Login logic
        response = await API.post("/auth/login/", {
          username: username,
          password: password,
        });

        const accessToken = response.data.access;
        const refreshToken = response.data.refresh;

        // Store tokens in localStorage
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);

        // Decode the JWT token to get the role
        const decodedToken = jwtDecode(accessToken);
        const userRole = decodedToken.role;

        // Redirect based on the role
        if (userRole === "borrower") {
          navigate("/borrower");
        } else if (userRole === "loan_officer") {
          navigate("/loan_officer");
        } else if (userRole === "admin") {
          navigate("/admin");
        } else {
          setError("Role not found, please contact support.");
        }
      } else {
        // Sign-up logic
        response = await API.post("/auth/signup/", {
          username,
          password,
          role, // Include the role in the sign-up request
        });

        // On success, switch to login form
        setIsLogin(true);
        setError("Registration successful! Please log in.");
      }
    } catch (err) {
      setError(isLogin ? "Invalid credentials. Please try again." : "Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Show role selection only if the form is for sign-up */}
          {!isLogin && (
            <div className="form-group">
              <label>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="borrower">Borrower</option>
                <option value="loan_officer">Loan Officer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between login and sign-up forms */}
        <div className="toggle-section">
          {isLogin ? (
            <>
              <p>Don't have an account?</p>
              <button className="toggle-button" onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <button className="toggle-button" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

