import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2>ADMIN</h2>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/students">Students</Link>
      <Link to="/admin/wardens">Wardens</Link>
      <Link to="/admin/allocate-warden">Allocate Warden</Link>
      <Link to="/admin/complaints">Complaints</Link>
      <Link to="/admin/fees">Fee Status</Link>
      <Link to="/admin/food-menu">Food Menu</Link>
      <Link to="/admin/announcements">Announcements</Link>
      <Link to="/admin/control-login">Control Login</Link>
    </div>
  );
}

export default AdminSidebar;
