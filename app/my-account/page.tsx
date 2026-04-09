"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Tab =
  | "dashboard"
  | "orders"
  | "profile"
  | "address"
  | "payment";

export default function MyAccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [userDetails, setUserDetails] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUserDetails(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        // console.log("Orders API:", data);
        setOrders(data?.data || data?.orders || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/auth/login");
    }
  };

  const user = {
    name: userDetails?.name,
    email: userDetails?.email,
    joined: "April 2026",
  };

  return (
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
                  {user?.name?.charAt(0)}
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
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}

              <button
                onClick={handleLogout}
                className="w-100 text-start mt-3 text-danger border-0 bg-transparent"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="col-md-9">
            {activeTab === "dashboard" && (
              <>
                <div className="p-4 mb-4 bg-white rounded-4 shadow-sm">
                  <h4 className="fw-bold">
                    Welcome back, {userDetails?.name}
                  </h4>
                  <p className="text-muted mb-0">
                    Member since {user.joined}
                  </p>
                </div>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-4 text-center bg-white rounded-4 shadow-sm">
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
              <div className="p-4 bg-white rounded-4 shadow-sm">
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
                      {loading ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : orders.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            No orders found
                          </td>
                        </tr>
                      ) : (
                        orders.map((o: any) => (
                          <tr key={o._id}>
                            <td className="fw-semibold text-primary">
                              #{o._id?.slice(-5)}
                            </td>

                            <td>
                              {new Date(o.createdAt).toLocaleDateString()}
                            </td>

                            <td>
                              <span
                                className={`badge rounded-pill ${
                                  o.status === "DELIVERED"
                                    ? "bg-success"
                                    : o.status === "CANCELLED"
                                    ? "bg-danger"
                                    : "bg-warning text-dark"
                                }`}
                              >
                                {o.status || "Processing"}
                              </span>
                            </td>

                            <td>₹{o.total}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h5 className="fw-bold mb-3">Profile</h5>

                <input
                  className="form-control mb-2"
                  defaultValue={user.name}
                />
                <input
                  className="form-control mb-3"
                  defaultValue={user.email}
                />

                <button className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === "address" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h5>Address</h5>
                <p>India</p>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h5>Payment</h5>
                <p>Cash on Delivery</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}