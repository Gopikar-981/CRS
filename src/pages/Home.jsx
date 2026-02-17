import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>Campus Residence System</h1>
          <p>Smart Hostel Management Solution</p>
        </div>
      </div>

      {/* LOGIN CARDS */}
      <div className="card-container">

        <div className="card1">
          <h3>Admin</h3>
          <p>Manage wardens, students & system</p>
           <Link to="/admin/login" className="btn">Login</Link>
        </div>

        <div className="card1">
          <h3>Executive Warden</h3>
          <p>Allocate rooms & manage hostel</p>
          <Link to="/executive/login" className="btn">Login</Link>
        </div>

        <div className="card1">
          <h3>Local Warden</h3>
          <p>Attendance & student monitoring</p>
           <Link to="/warden/login" className="btn">Login</Link>
        </div>

        <div className="card1">
          <h3>Student</h3>
          <p>Room, fee & leave management</p>
           <Link to="/student-login" className="btn">Login</Link>
        </div>

      </div>
    </>
  );
}

export default Home;
