import "../../styles/WardenPages.css";
import WardenSidebar from "../../components/WardenSidebar";
import { useState } from "react";

function Sanitization() {
  const [area, setArea] = useState("");
  const [areaType, setAreaType] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!area || !areaType || !date || !status) {
      setMessage("Please fill all required fields.");
      return;
    }

    const newRecord = {
      id: Date.now(),
      area,
      areaType,
      date,
      status,
      notes,
    };

    setRecords([...records, newRecord]);
    setMessage("Sanitization record added successfully!");

    setArea("");
    setAreaType("");
    setDate("");
    setStatus("");
    setNotes("");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="warden-layout">
      <WardenSidebar />

      <div className="page">
        <div className="page-header">
          <h1>Sanitization Management</h1>
          <p className="breadcrumb">Dashboard / Sanitization</p>
        </div>

        <div className="form-card">
          <form className="warden-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Area Name</label>
              <input
                type="text"
                placeholder="Enter Room No / Block Name"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Area Type</label>
              <select
                value={areaType}
                onChange={(e) => setAreaType(e.target.value)}
              >
                <option value="">-- Select Type --</option>
                <option value="Room">Room</option>
                <option value="Block">Block</option>
                <option value="Mess">Mess</option>
                <option value="Common Area">Common Area</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">-- Select Status --</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <div className="form-group full">
              <label>Additional Notes</label>
              <textarea
                rows="4"
                placeholder="Enter notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="primary-btn">
              Save Record
            </button>

            {message && <div className="success-message">{message}</div>}
          </form>
        </div>

        {records.length > 0 && (
          <div className="table-card">
            <h2>Sanitization History</h2>

            <table className="warden-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>

              <tbody>
                {records.map((rec) => (
                  <tr key={rec.id}>
                    <td>{rec.area}</td>
                    <td>{rec.areaType}</td>
                    <td>{rec.date}</td>
                    <td>
                      <span
                        className={`status-badge ${rec.status.toLowerCase()}`}
                      >
                        {rec.status}
                      </span>
                    </td>
                    <td>{rec.notes || "-"}</td>
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

export default Sanitization;
