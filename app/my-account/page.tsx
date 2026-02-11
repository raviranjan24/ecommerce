"use client";
import Breadcrum from "@/components/common/breadcrum";
import { useState } from "react";

type Tab =
  | "dashboard"
  | "orders"
  | "profile"
  | "address"
  | "payment";

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  const user = {
    name: "Ravi Ranjan Singh",
    email: "ravi@gmail.com",
    phone: "+91 98765 43210",
    joined: "Jan 2024",
  };

  const orders = [
    { id: "#711", date: "28 Jan 2026", status: "Processing", total: "₹1,000" },
    { id: "#649", date: "26 Oct 2025", status: "Cancelled", total: "₹1,430" },
    { id: "#588", date: "04 Sep 2025", status: "Completed", total: "₹369" },
  ];

  return (
    <>
    <Breadcrum title={"My Account"}/>
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8f9fa, #eef2ff)",
      }}
    >
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-3">
            <div
              className="p-4"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div className="text-center mb-4">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#6366f1",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    margin: "0 auto",
                  }}
                >
                  RR
                </div>
                <h6 className="mt-3 mb-0">{user.name}</h6>
                <small className="text-muted">{user.email}</small>
              </div>

              {["dashboard", "orders", "profile", "address", "payment"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as Tab)}
                    className="w-100 text-start mb-2"
                    style={{
                      padding: "10px 15px",
                      borderRadius: "10px",
                      border: "none",
                      background:
                        activeTab === tab ? "#6366f1" : "transparent",
                      color:
                        activeTab === tab ? "#fff" : "#333",
                      fontWeight: 500,
                      transition: "0.3s",
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}

              <button className="w-100 text-start mt-3 text-danger border-0 bg-transparent">
                Logout
              </button>
            </div>
          </div>
          <div className="col-md-9">
            {activeTab === "dashboard" && (
              <>
                <div
                  className="p-4 mb-4"
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  <h4 className="fw-bold">
                    Welcome back, Ravi 👋
                  </h4>
                  <p className="text-muted mb-0">
                    Member since {user.joined}
                  </p>
                </div>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div
                      className="p-4 text-center"
                      style={{
                        background: "#fff",
                        borderRadius: "20px",
                        boxShadow:
                          "0 10px 30px rgba(99,102,241,0.1)",
                      }}
                    >
                      <h6>Total Orders</h6>
                      <h2 className="fw-bold text-primary">
                        {orders.length}
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "orders" && (
              <div
                className="p-4"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <h5 className="fw-bold mb-3">Orders</h5>

                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o) => (
                        <tr key={o.id}>
                          <td className="fw-semibold text-primary">
                            {o.id}
                          </td>
                          <td>{o.date}</td>
                          <td>
                            <span
                              className={`badge rounded-pill ${
                                o.status === "Completed"
                                  ? "bg-success"
                                  : o.status === "Cancelled"
                                  ? "bg-danger"
                                  : "bg-warning text-dark"
                              }`}
                            >
                              {o.status}
                            </span>
                          </td>
                          <td>{o.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === "profile" && (
              <div
                className="p-4"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <h5 className="fw-bold mb-3">Profile Information</h5>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control rounded-3"
                    defaultValue={user.name}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control rounded-3"
                    defaultValue={user.email}
                  />
                </div>

                <button className="btn btn-primary px-4 rounded-pill">
                  Save Changes
                </button>
              </div>
            )}
            {activeTab === "address" && (
              <div
                className="p-4"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <h5 className="fw-bold mb-3">Address</h5>
                <p>Ranchi, Jharkhand, India – 834001</p>
                <button className="btn btn-outline-primary rounded-pill">
                  Edit Address
                </button>
              </div>
            )}
            {activeTab === "payment" && (
              <div
                className="p-4"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <h5 className="fw-bold mb-3">Payment Methods</h5>
                <p className="fs-5">💳 **** **** **** 4242</p>
                <button className="btn btn-outline-primary rounded-pill">
                  Add New Card
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}