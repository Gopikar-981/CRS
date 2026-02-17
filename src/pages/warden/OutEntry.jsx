import { useState } from "react";
import "../../styles/WardenPages.css";
import WardenSidebar from "../../components/WardenSidebar";

function OutEntry() {

  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [parentMobile, setParentMobile] = useState("");
  const [outDate, setOutDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [reason, setReason] = useState("");
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !regNo || !parentMobile || !outDate || !returnDate) {
      setMessage("Please fill all required fields.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      studentName,
      regNo,
      parentMobile,
      outDate,
      returnDate,
      reason
    };

    setEntries([...entries, newEntry]);

    console.log(`SMS Sent to ${parentMobile}`);

    setMessage("Out entry recorded & Parent notified successfully!");

    setStudentName("");
    setRegNo("");
    setParentMobile("");
    setOutDate("");
    setReturnDate("");
    setReason("");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="warden-layout">
      <WardenSidebar />

      <div className="warden-page">

        <div className="page-header">
          <h1>Out Entry Management</h1>
          <p className="breadcrumb">Dashboard / Out Entry</p>
        </div>

        {/* FORM */}
        <div className="form-card">
          <form className="warden-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Student Name</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
              />
            </div>

            <div className="form-group">
              <label>Register Number</label>
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Enter register number"
              />
            </div>

            <div className="form-group">
              <label>Parent Mobile</label>
              <input
                type="tel"
                value={parentMobile}
                onChange={(e) => setParentMobile(e.target.value)}
                placeholder="Enter mobile number"
              />
            </div>

            <div className="form-group">
              <label>Out Date & Time</label>
              <input
                type="datetime-local"
                value={outDate}
                onChange={(e) => setOutDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Return Date & Time</label>
              <input
                type="datetime-local"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>

            <div className="form-group full">
              <label>Reason</label>
              <textarea
                rows="4"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason (optional)"
              />
            </div>

            <button type="submit" className="primary-btn">
              Save & Notify Parent
            </button>

            {message && (
              <div className="success-message">{message}</div>
            )}

          </form>
        </div>

        {/* HISTORY */}
        {entries.length > 0 && (
          <div className="table-card">
            <h2>Out Entry Records</h2>

            <table className="warden-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Reg No</th>
                  <th>Out Time</th>
                  <th>Return Time</th>
                  <th>Parent Mobile</th>
                </tr>
              </thead>

              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.studentName}</td>
                    <td>{entry.regNo}</td>
                    <td>{entry.outDate}</td>
                    <td>{entry.returnDate}</td>
                    <td>{entry.parentMobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default OutEntry;
