import { useState } from "react";
import "../../styles/WardenPages.css";
import WardenSidebar from "../../components/WardenSidebar";

function ViewAttendance() {
  const [selectedYear, setSelectedYear] = useState("First Year");
  const [selectedDate, setSelectedDate] = useState("");

  const attendanceData = [
    {
      name: "Anitha",
      hostel: "Block A",
      year: "First Year",
      room: "101",
      status: "Present",
      date: "2026-02-16",
    },
    {
      name: "Priya",
      hostel: "Block B",
      year: "Second Year",
      room: "204",
      status: "Absent",
      date: "2026-02-16",
    },
    {
      name: "Megha",
      hostel: "Block C",
      year: "First Year",
      room: "110",
      status: "Present",
      date: "2026-02-16",
    },
  ];

  const filteredData = attendanceData.filter(
    (student) =>
      student.year === selectedYear &&
      (selectedDate === "" || student.date === selectedDate)
  );

  return (
    <div className="warden-layout">
      <WardenSidebar />

      <div className="warden-page">
        <div className="page-header">
          <h1>View Attendance</h1>

          <div className="attendance-filters">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
            </select>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="table-card">
          <table className="warden-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Hostel</th>
                <th>Year</th>
                <th>Room No</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.hostel}</td>
                    <td>{student.year}</td>
                    <td>{student.room}</td>
                    <td>
                      <span
                        className={
                          student.status === "Present"
                            ? "status-badge present"
                            : "status-badge absent"
                        }
                      >
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No attendance records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAttendance;
