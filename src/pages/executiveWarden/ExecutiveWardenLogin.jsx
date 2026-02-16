import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

function ExecutiveWardenLogin() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (captchaInput !== captcha) {
      setError("Invalid captcha");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    const executiveData = {
      name: "Executive Warden",
      email: email,
      role: "ExecutiveWarden"
    };

    localStorage.setItem(
      "executiveWarden",
      JSON.stringify(executiveData)
    );

    navigate("/executive/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay">
          <h1>Campus Residence System</h1>
          <p>Executive Warden Panel</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <h2>Executive Warden Login</h2>

          <label>Email ID</label>
          <input
            type="email"
            value={email}
            placeholder="Enter warden email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

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

export default ExecutiveWardenLogin;
