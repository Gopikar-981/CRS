import { Routes, Route } from "react-router-dom";

/* Common */
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

/* Student */
import StudentLogin from "./pages/student/StudentLogin";
import StudentRegister from "./pages/student/StudentRegister";
import StudentDashboard from "./pages/student/StudentDashboard";
import ViewMenu from "./pages/student/ViewMenu";
import ViewRoom from "./pages/student/ViewRoom";
import PayFee from "./pages/student/PayFee";
import DummyBankPayment from "./pages/student/DummyBankPayment";
import RaiseComplaint from "./pages/student/RaiseComplaint";
import ApplyLeave from "./pages/student/ApplyLeave";

/* Admin */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AllocateWarden from "./pages/admin/AllocateWarden";  
import ViewWardens from "./pages/admin/ViewWardens";
import ViewStudents from "./pages/admin/ViewStudents";
import ControlLogin from "./pages/admin/ControlLogin";
import FoodMenu from "./pages/admin/FoodMenu";
import ViewComplaints from "./pages/admin/ViewComplaints";
import FeeStatus from "./pages/admin/FeeStatus";
import Announcements from "./pages/admin/Announcements";

/* Executive */
import ExecutiveWardenLogin from "./pages/executiveWarden/ExecutiveWardenLogin";
import ExecutiveDashboard from "./pages/executiveWarden/ExecutiveDashboard";
import ViewAnnouncementsEW from "./pages/executiveWarden/ViewAnnouncements";
import SendAnnouncementsEW from "./pages/executiveWarden/SendAnnouncements";
import ViewComplaintsEW from "./pages/executiveWarden/ViewComplaints";
import ViewMenuEW from "./pages/executiveWarden/ViewMenu";
import ViewWardensEW from "./pages/executiveWarden/ViewWardens";
import ViewStudentsEW from "./pages/executiveWarden/ViewStudents";
import FeeStatusEW from "./pages/executiveWarden/FeeStatus";
import AllocateRoomsEW from "./pages/executiveWarden/AllocateRooms";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      {/* Student */}
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-register" element={<StudentRegister />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/menu" element={<ViewMenu />} />
      <Route path="/student/room" element={<ViewRoom />} />
      <Route path="/student/fee" element={<PayFee />} />
      <Route path="/student/bank-payment" element={<DummyBankPayment />} />
      <Route path="/student/complaint" element={<RaiseComplaint />} />
      <Route path="/student/leave" element={<ApplyLeave />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/allocate-warden" element={<AllocateWarden />} /> 
      <Route path="/admin/view-wardens" element={<ViewWardens />} />
      <Route path="/admin/view-students" element={<ViewStudents />} />
      <Route path="/admin/control-login" element={<ControlLogin />} />
      <Route path="/admin/food-menu" element={<FoodMenu />} />
      <Route path="/admin/complaints" element={<ViewComplaints />} />
      <Route path="/admin/fee-status" element={<FeeStatus />} />
      <Route path="/admin/announcements" element={<Announcements />} />

      {/* Executive */}
      <Route path="/executive/login" element={<ExecutiveWardenLogin />} />
      <Route path="/executive/dashboard" element={<ExecutiveDashboard />} />
      <Route path="/executive/view-announcements" element={<ViewAnnouncementsEW />} />
      <Route path="/executive/send-announcements" element={<SendAnnouncementsEW />} />
      <Route path="/executive/view-complaints" element={<ViewComplaintsEW />} />
      <Route path="/executive/view-menu" element={<ViewMenuEW />} />
      <Route path="/executive/view-wardens" element={<ViewWardensEW />} />
      <Route path="/executive/view-students" element={<ViewStudentsEW />} />
      <Route path="/executive/fee-status" element={<FeeStatusEW />} />
      <Route path="/executive/allocate-rooms" element={<AllocateRoomsEW />} />

      {/* Common */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="*" element={<h2 style={{ textAlign: "center" }}>Page Not Found</h2>} />

    </Routes>
  );
}

export default App;
