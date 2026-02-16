import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import Topbar from "../../components/Topbar";
import "../../styles/Admin.css";

function AllocateWarden() {
  const [warden, setWarden] = useState("");
  const [hostel, setHostel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Warden ${warden} allocated to ${hostel}`);
  };

  return (
    <div className="dashboard-container">
      <AdminSidebar />

      <div className="main-content">
        <Topbar title="Allocate Warden" />

        <div className="dashboard-content">
          <h2 className="page-title">Allocate Warden</h2>
          <p className="page-subtitle">
            Assign hostel responsibility to a warden
          </p>

          <div className="form-card">
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Warden Name</label>
                <input
                  type="text"
                  placeholder="Enter warden name"
                  value={warden}
                  onChange={(e) => setWarden(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Hostel Name</label>
                <input
                  type="text"
                  placeholder="Enter hostel name"
                  value={hostel}
                  onChange={(e) => setHostel(e.target.value)}
                  required
                />
              </div>

              <button className="primary-btn">Allocate Warden</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllocateWarden;
