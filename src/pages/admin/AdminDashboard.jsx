import AdminSidebar from "../../components/AdminSidebar";
import Topbar from "../../components/Topbar";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <AdminSidebar />

      <div className="main-content">
        <Topbar title="Admin Dashboard" />

        <div className="content">
          <h2>Welcome Admin</h2>

          <div className="admin-cards">
            <div className="card">👮 Allocate Warden</div>
            <div className="card">👨‍🎓 View Students</div>
            <div className="card">🍽 Food Menu</div>
            <div className="card">📢 Announcements</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
