"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { generateInvoicePdf } from "@/utils/generateInvoicePdf";

type Tab = "dashboard" | "orders" | "profile" | "address" | "payment";

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
      setOrders(data?.data?.orders || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId: string) => {
    const reason = prompt("Enter cancel reason");
    if (!reason) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/orders/${orderId}/cancel`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cancelReason: reason,
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success("Order cancelled successfully");
        setOrders((prev) =>
          prev.map((o) =>
            o.orderId === orderId
              ? {
                ...o,
                status: "Cancelled",
              }
              : o
          )
        );
      } else {
        toast.error(data.message || "Failed to cancel order");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const downloadInvoice = async (order: any) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/orders/${order.orderId}/invoice`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!data.success) {
      throw new Error("Invoice API failed");
    }
    await generateInvoicePdf(order, data.data.invoice);
  } catch (error) {
    console.error(error);
    toast.error("Failed to generate invoice");
  }
};

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

  const [profileForm, setProfileForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [addresses, setAddresses] = useState<any[]>([]);
  const [addressForm, setAddressForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.success) {
        setProfileForm({
          name: data?.data?.user?.name || "",
          phone: data?.data?.user?.phone || "",
          email: data?.data?.user?.email || "",
        });
        setUserDetails(data?.data?.user || null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: profileForm.name,
            phone: profileForm.phone,
          }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Profile updated successfully");
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userDetails,
            name: profileForm.name,
          })
        );
        setUserDetails((prev: any) => ({
          ...prev,
          name: profileForm.name,
        }));
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const fetchAddresses = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/addresses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.success) {
        const allAddresses = data?.data?.addresses || [];
        setAddresses(allAddresses);
        if (allAddresses.length > 0) {
          const firstAddress = allAddresses[0];
          setSelectedAddressId(firstAddress._id);
          setAddressForm({
            firstName: firstAddress.firstName || "",
            lastName: firstAddress.lastName || "",
            email: firstAddress.email || "",
            phone: firstAddress.phone || "",
            street: firstAddress.street || "",
            city: firstAddress.city || "",
            state: firstAddress.state || "",
            zipcode: firstAddress.zipcode || "",
            country: firstAddress.country || "",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addAddress = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/addresses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(addressForm),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Address added successfully");
        setAddressForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
        });

        fetchAddresses();
      } else {
        toast.error(data.message || "Failed to add address");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const updateAddress = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/addresses/${selectedAddressId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(addressForm),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Address updated successfully");
        fetchAddresses();
      } else {
        toast.error(data.message || "Failed to update address");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchProfile();
    fetchAddresses();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8f9fa, #eef2ff)",
      }}
    >
      <div className="container py-5">
        <div className="row g-4">
          {/* Sidebar */}
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
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    background: "#4f46e5",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: "bold",
                    margin: "0 auto",
                  }}
                >
                  {user?.name?.charAt(0)}
                </div>

                <h5 className="mt-3 mb-1">{user.name}</h5>

                <small className="text-muted">{user.email}</small>
              </div>

              {["dashboard", "orders", "profile", "address", "payment"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as Tab)}
                    className="w-100 text-start mb-2"
                    style={{
                      padding: "12px 15px",
                      borderRadius: "12px",
                      border: "none",
                      background: activeTab === tab ? "#4f46e5" : "transparent",
                      color: activeTab === tab ? "#fff" : "#333",
                      fontWeight: 600,
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}

              <button
                onClick={handleLogout}
                className="w-100 text-start mt-3 border-0 bg-transparent text-danger fw-bold"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-9">
            {/* Dashboard */}
            {activeTab === "dashboard" && (
              <>
                <div className="p-4 bg-white rounded-4 shadow-sm mb-4">
                  <h3 className="fw-bold">Welcome back, {userDetails?.name}</h3>

                  <p className="text-muted mb-0">Member since {user.joined}</p>
                </div>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-4 bg-white rounded-4 shadow-sm text-center">
                      <h6>Total Orders</h6>
                      <h1 className="fw-bold text-primary">{orders.length}</h1>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Orders */}
            {activeTab === "orders" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h4 className="fw-bold mb-1">My Orders</h4>
                    <p className="text-muted mb-0">
                      Track and manage your orders
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#eef2ff",
                      padding: "10px 18px",
                      borderRadius: "12px",
                      color: "#4f46e5",
                      fontWeight: 700,
                    }}
                  >
                    {orders.length} Orders
                  </div>
                </div>

                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" />
                  </div>
                ) : orders.length === 0 ? (
                  <div className="text-center py-5">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                      width={120}
                    />

                    <h5 className="mt-4">No Orders Found</h5>

                    <p className="text-muted">
                      You haven't placed any orders yet.
                    </p>
                  </div>
                ) : (
                  <div className="row g-4">
                    {orders?.map((order: any) => (
                      <div className="col-12" key={order.orderId}>
                        <div
                          className="border rounded-4 p-4"
                          style={{
                            background: "#fff",
                          }}
                        >
                          <div className="row">
                            {/* Left */}
                            <div className="col-md-8">
                              <div className="d-flex flex-wrap gap-4 mb-4">
                                <div>
                                  <small className="text-muted">
                                    Order Number
                                  </small>

                                  <div className="fw-bold">
                                    {order.orderNumber}
                                  </div>
                                </div>

                                <div>
                                  <small className="text-muted">Date</small>

                                  <div className="fw-semibold">
                                    {new Date(
                                      order.createdAt
                                    ).toLocaleDateString()}
                                  </div>
                                </div>

                                <div>
                                  <small className="text-muted">Payment</small>

                                  <div className="fw-semibold">
                                    {order.paymentMethod}
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex flex-column gap-3">
                                {order.items?.map(
                                  (item: any, index: number) => (
                                    <div
                                      key={index}
                                      className="d-flex gap-3 align-items-center"
                                      style={{
                                        background: "#f8fafc",
                                        padding: "12px",
                                        borderRadius: "14px",
                                      }}
                                    >
                                      <img
                                        src={
                                          item.image?.[0] ||
                                          "https://via.placeholder.com/80"
                                        }
                                        width={80}
                                        height={80}
                                        style={{
                                          objectFit: "cover",
                                          borderRadius: "12px",
                                        }}
                                      />

                                      <div>
                                        <div className="fw-bold">
                                          {item.productId?.slice(-6)}
                                        </div>

                                        <div className="text-muted">
                                          Size: {item.size}
                                        </div>

                                        <div className="text-muted">
                                          Qty: {item.quantity}
                                        </div>

                                        <div className="fw-bold text-primary">
                                          ₹{item.price}
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* Right */}
                            <div className="col-md-4 text-md-end mt-4 mt-md-0">
                              <div className="mb-3">
                                <small className="text-muted">Total</small>

                                <h2 className="fw-bold">₹{order.total}</h2>
                              </div>

                              <div className="mb-3">
                                <span
                                  className={`badge rounded-pill px-3 py-2 ${order.status === "Delivered"
                                    ? "bg-success"
                                    : order.status === "Cancelled"
                                      ? "bg-danger"
                                      : "bg-warning text-dark"
                                    }`}
                                >
                                  {order.status}
                                </span>
                              </div>

                              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                                {order?.status === "Delivered" && (
                                  <button
                                    className="btn btn-outline-success btn-sm"
                                    onClick={() => {
                                      downloadInvoice(order)
                                    }}
                                  >
                                    Download Invoice
                                  </button>
                                )}
                                {order.status !== "Cancelled" && (
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => cancelOrder(order.orderId)}
                                  >
                                    Cancel
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>

                          <hr />

                          <div className="row">
                            <div className="col-md-8">
                              <small className="text-muted">
                                Shipping Address
                              </small>

                              <div className="fw-bold">
                                {order.shippingAddress?.name}
                              </div>

                              <div className="text-muted">
                                {order.shippingAddress?.address}
                              </div>

                              <div className="text-muted">
                                {order.shippingAddress?.city},{" "}
                                {order.shippingAddress?.state}
                              </div>

                              <div className="text-muted">
                                {order.shippingAddress?.country}
                                {" - "}
                                {order.shippingAddress?.pincode}
                              </div>
                            </div>

                            <div className="col-md-4 text-md-end mt-3 mt-md-0">
                              <small className="text-muted">
                                Payment Status
                              </small>

                              <div className="fw-bold">
                                {order.paymentStatus}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Profile */}
            {activeTab === "profile" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h4 className="fw-bold mb-4">Profile</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileForm.name}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileForm.phone}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={profileForm.email}
                      disabled
                    />
                  </div>
                </div>
                <button className="btn btn-primary" onClick={updateProfile}>
                  Save Changes
                </button>
              </div>
            )}

            {/* Address */}
            {activeTab === "address" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h4 className="fw-bold mb-4">Address</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      value={addressForm.firstName}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      value={addressForm.lastName}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="text"
                      placeholder="Street"
                      className="form-control"
                      value={addressForm.street}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          street: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      value={addressForm.city}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      placeholder="State"
                      className="form-control"
                      value={addressForm.state}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                      value={addressForm.zipcode}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          zipcode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="text"
                      placeholder="Country"
                      className="form-control"
                      value={addressForm.country}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary mb-4"
                  onClick={() => {
                    if (addresses.length > 0) {
                      updateAddress();
                    } else {
                      addAddress();
                    }
                  }}
                >
                  {addresses.length > 0 ? "Update Address" : "Add Address"}
                </button>

                <div className="row">
                  {addresses?.length === 0 && (
                    <div className="col-12">
                      <div className="alert alert-info">
                        No address added yet
                      </div>
                    </div>
                  )}
                  {addresses?.map((address, index) => (
                    <div key={index} className="col-md-6 mb-4">
                      <div className="border rounded-4 p-3">
                        <h6 className="fw-bold">
                          {address.firstName} {address.lastName}
                        </h6>

                        <p className="mb-1">{address.street}</p>

                        <p className="mb-1">
                          {address.city}, {address.state}
                        </p>

                        <p className="mb-1">{address.zipcode}</p>

                        <p className="mb-0">{address.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "payment" && (
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h4 className="fw-bold mb-3">Payment</h4>

                <p>Cash on Delivery</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}