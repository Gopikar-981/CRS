import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");   // ✅ REDIRECT
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login">
      <div className="login-box">
        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
