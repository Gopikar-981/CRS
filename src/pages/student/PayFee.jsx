import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/PayFee.css";

function PayFee() {
  const [paid, setPaid] = useState(false);

  const feeDetails = {
    hostelFee: 25000,
    messFee: 15000,
    maintenanceFee: 5000,
  };

  const totalFee =
    feeDetails.hostelFee +
    feeDetails.messFee +
    feeDetails.maintenanceFee;

  const handlePayment = () => {
    setPaid(true);
    alert("✅ Fee Payment Successful");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Topbar title="Fee Payment" />

        <div className="content">
          <h2>Fee Payment</h2>
          <p className="breadcrumb">Home / Fee Payment</p>

          <div className="fee-card">
            <h3>Hostel Fee Details</h3>

            <table className="fee-table">
              <tbody>
                <tr>
                  <td>Hostel Fee</td>
                  <td>₹ {feeDetails.hostelFee}</td>
                </tr>
                <tr>
                  <td>Mess Fee</td>
                  <td>₹ {feeDetails.messFee}</td>
                </tr>
                <tr>
                  <td>Maintenance Fee</td>
                  <td>₹ {feeDetails.maintenanceFee}</td>
                </tr>
                <tr className="total-row">
                  <td>Total Amount</td>
                  <td>₹ {totalFee}</td>
                </tr>
              </tbody>
            </table>

            <div className="payment-status">
              Status :
              <span className={paid ? "paid" : "pending"}>
                {paid ? " Paid" : " Pending"}
              </span>
            </div>

            {!paid && (
              <button className="pay-btn" onClick={handlePayment}>
                Pay Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayFee;
