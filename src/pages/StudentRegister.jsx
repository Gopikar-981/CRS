import { useState, useEffect } from "react";
import "../styles/StudentRegistration.css";

function StudentRegister() {
  const [step, setStep] = useState(1);

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  // Generate captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let cap = "";
    for (let i = 0; i < 5; i++) {
      cap += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(cap);
  };

  useEffect(() => {
    if (step === 6) generateCaptcha();
  }, [step]);

  return (
    <div className="reg-container">

      {/* HEADER */}
      <div className="reg-header">
        🎓 Campus Residence System – Student Registration
        <p>Please fill all required information accurately</p>
      </div>

      {/* STEPS */}
      <div className="reg-steps">
        <span className={step === 1 ? "active" : ""}>Basic</span>
        <span className={step === 2 ? "active" : ""}>Academic</span>
        <span className={step === 3 ? "active" : ""}>Address</span>
        <span className={step === 4 ? "active" : ""}>Documents</span>
        <span className={step === 5 ? "active" : ""}>Disclaimer</span>
        <span className={step === 6 ? "active" : ""}>Register</span>
      </div>

      {/* CARD */}
      <div className="reg-card">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h3>Basic Details</h3>
            <div className="grid">
              <input placeholder="Student Name" />
              <input placeholder="Aadhaar Number" />
              <input placeholder="Email ID" />
              <input placeholder="Confirm Email ID" />
              <input placeholder="Mobile Number" />
              <input type="date" />
              <select><option>Gender</option></select>
              <select><option>Blood Group</option></select>
            </div>

            <h4>Guardian Information</h4>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Local Guardian</td>
                  <td><input /></td>
                  <td><input /></td>
                </tr>
                <tr>
                  <td>Father</td>
                  <td><input /></td>
                  <td><input /></td>
                </tr>
                <tr>
                  <td>Mother</td>
                  <td><input /></td>
                  <td><input /></td>
                </tr>
              </tbody>
            </table>

            <div className="btn-row">
              <button className="btn next" onClick={next}>Next</button>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h3>Academic Details</h3>
            <div className="grid">
              <select><option>Admission Year</option></select>
              <select><option>School / Center</option></select>
              <select><option>Programme Level</option></select>
              <select><option>Programme</option></select>
              <select><option>Semester</option></select>
            </div>

            <div className="btn-row">
              <button className="btn prev" onClick={prev}>Previous</button>
              <button className="btn next" onClick={next}>Next</button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h3>Address Details</h3>
            <div className="grid">
              <input placeholder="Address Line 1" />
              <input placeholder="Address Line 2" />
              <input placeholder="Post" />
              <input placeholder="District" />
              <input placeholder="State" />
              <input placeholder="Pin Code" />
            </div>

            <div className="btn-row">
              <button className="btn prev" onClick={prev}>Previous</button>
              <button className="btn next" onClick={next}>Next</button>
            </div>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h3>Document Upload</h3>
            <div className="grid">
              <input type="file" />
              <input type="file" />
            </div>

            <div className="btn-row">
              <button className="btn prev" onClick={prev}>Previous</button>
              <button className="btn next" onClick={next}>Next</button>
            </div>
          </>
        )}

        {/* STEP 5 — FIXED ALIGNMENT */}
        {step === 5 && (
          <>
            <h3>Disclaimer</h3>

            <div className="disclaimer-container">
              <label className="disclaimer-row">
                <input type="checkbox" />
                <span>I confirm all details are correct</span>
              </label>

              <label className="disclaimer-row">
                <input type="checkbox" />
                <span>I agree to hostel rules</span>
              </label>
            </div>

            <div className="btn-row">
              <button className="btn prev" onClick={prev}>Previous</button>
              <button className="btn next" onClick={next}>Next</button>
            </div>
          </>
        )}

        {/* STEP 6 — CAPTCHA */}
        {step === 6 && (
          <>
            <h3>Security Verification</h3>

            <div className="captcha-row">
              <div className="captcha-text">{captcha}</div>
              <button onClick={generateCaptcha}>⟳</button>
            </div>

            <input
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <div className="btn-row">
              <button className="btn prev" onClick={prev}>Previous</button>
              <button
                className="btn register"
                onClick={() => {
                  if (captchaInput !== captcha) {
                    setError("Invalid captcha");
                    generateCaptcha();
                    setCaptchaInput("");
                  } else {
                    alert("Student Registered Successfully 🎉");
                  }
                }}
              >
                Register
              </button>
              <button className="btn reset" onClick={() => setCaptchaInput("")}>
                Reset
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default StudentRegister;
