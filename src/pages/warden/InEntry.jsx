import { useState } from "react";
import "../../styles/WardenPages.css";
import WardenSidebar from "../../components/WardenSidebar";

function InEntry() {

  const [entries, setEntries] = useState([
    {
      id: 1,
      studentName: "Arun Kumar",
      regNo: "21CS001",
      outDate: "2026-02-16 09:30 AM",
      expectedReturn: "2026-02-16 06:00 PM",
      status: "Out",
      actualReturn: null
    },
    {
      id: 2,
      studentName: "Meena Devi",
      regNo: "21EC014",
      outDate: "2026-02-16 08:00 AM",
      expectedReturn: "2026-02-16 05:00 PM",
      status: "Out",
      actualReturn: null
    }
  ]);

  const markIn = (id) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id
        ? {
            ...entry,
            status: "Returned",
            actualReturn: new Date().toLocaleString()
          }
        : entry
    );

    setEntries(updatedEntries);
  };

  return (
    <div className="warden-layout">
      <WardenSidebar />

      <div className="warden-page">

        <div className="page-header">
          <h1>In Entry Management</h1>
          <p className="breadcrumb">Dashboard / In Entry</p>
        </div>

        <div className="table-card">
          <h2>Students Currently Outside</h2>

          <table className="warden-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Reg No</th>
                <th>Out Time</th>
                <th>Expected Return</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.studentName}</td>
                  <td>{entry.regNo}</td>
                  <td>{entry.outDate}</td>
                  <td>{entry.expectedReturn}</td>

                  <td>
                    <span className={`status-badge ${entry.status.toLowerCase()}`}>
                      {entry.status}
                    </span>
                  </td>

                  <td>
                    {entry.status === "Out" ? (
                      <button
                        className="in-btn"
                        onClick={() => markIn(entry.id)}
                      >
                        Mark In
                      </button>
                    ) : (
                      <span className="returned-text">
                        ✔ Returned at {entry.actualReturn}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default InEntry;
