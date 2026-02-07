import { Routes, Route } from "react-router-dom";

/* Common */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

/* Student Auth */
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";

/* Student Pages */
import StudentDashboard from "./pages/student/StudentDashboard";
import ViewMenu from "./pages/student/ViewMenu";
import ViewRoom from "./pages/student/ViewRoom";
import PayFee from "./pages/student/PayFee";
import RaiseComplaint from "./pages/student/RaiseComplaint";
import ApplyLeave from "./pages/student/ApplyLeave";

/* Admin */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* COMMON */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* STUDENT AUTH */}
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-register" element={<StudentRegister />} />

      {/* STUDENT DASHBOARD ROUTES */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/menu" element={<ViewMenu />} />
      <Route path="/student/room" element={<ViewRoom />} />
      <Route path="/student/fee" element={<PayFee />} />
      <Route path="/student/complaint" element={<RaiseComplaint />} />
      <Route path="/student/leave" element={<ApplyLeave />} />

      {/* ADMIN */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* FALLBACK */}
      <Route path="*" element={<h2>Page Not Found</h2>} />

    </Routes>
  );
}

export default App;
