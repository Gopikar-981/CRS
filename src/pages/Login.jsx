import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let cap = "";
    for (let i = 0; i < 5; i++) {
      cap += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(cap);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    if (captchaInput !== captcha) {
      setError("Invalid captcha");
      setCaptchaInput("");
      generateCaptcha();
      return;
    }

    setError("");

    // 👇 TEMP LOGIN LOGIC
    const email = document.getElementById("email").value;

    if (email === "admin@gmail.com") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      localStorage.setItem("student", "true");
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="overlay">
          <h1>Campus Residence System</h1>
          <p>Smart Hostel Management Solution</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-box">

          <label>Email ID</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
          />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="captcha-row">
            <div className="captcha-text">{captcha}</div>
            <button
              type="button"
              className="refresh-btn"
              onClick={generateCaptcha}
            >
              ⟳
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;
