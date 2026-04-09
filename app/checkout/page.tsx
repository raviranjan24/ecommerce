"use client";

import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { placeOrder, clearCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Checkout() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [token, setToken] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<any>(null);

  const [formData, setFormData] = useState({
    phone: "",
    city: "",
    state: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    const t = localStorage.getItem("token");
    setToken(t);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUserDetails(JSON.parse(stored));
    }
  }, []);

  const cartData = useSelector((state: any) => state.cart.items || {});
  const cartItems = Array.isArray(cartData?.cart?.items) ? cartData?.cart?.items: [];

  console.log("cartItemsjjjjjj======>", cartData.cart.items);

  const totalAmount = cartItems.reduce(
    (acc: number, item: any) =>
      acc + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e: any) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login first");
      router.push("/auth/login");
      return;
    }

    if (!cartItems.length) {
      toast.error("Cart is empty");
      return;
    }

    const orderData = {
      items: cartItems.map((item: any) => ({
        productId: item.productId,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      })),
      shippingAddress: {
        name: userDetails?.name,
        email: userDetails?.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
        country: "India",
        address: formData.address,
        pincode: formData.pincode,
      },
      paymentMethod: "COD",
      subtotal: totalAmount,
      shippingFee: 0,
      total: totalAmount,
    };

    try {
      const res: any = await dispatch(
        placeOrder({ orderData, token })
      );

      if (res?.payload?.success) {
        toast.success("Order placed successfully");
        dispatch(clearCart(token));
        router.push("/my-account");
      } else {
        toast.error("Order failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Breadcrum title={"Checkout"} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="flat-spacing tf-page-checkout">

                {!token && (
                  <div className="wrap">
                    <div className="title-login">
                      <p>Already have an account?</p>
                      <Link href="/auth/login" className="text-button link">
                        Login Here
                      </Link>
                    </div>
                  </div>
                )}

                <form onSubmit={handlePlaceOrder}>
                  <div className="wrap">
                    <h5 className="title">Information</h5>
                    <div className="info-box">
                      <div className="grid-2">
                        <input
                          type="text"
                          value={userDetails?.name || ""}
                          readOnly
                        />
                        <input
                          type="text"
                          value={userDetails?.email || ""}
                          readOnly
                        />
                      </div>

                      <div className="grid-2">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number*"
                          onChange={handleChange}
                          required
                        />

                        <select style={{ border: "2px solid #eee", borderRadius: "7px", padding: "0px 10px" }}>
                          <option>India</option>
                        </select>
                      </div>

                      <div className="grid-2">
                        <input
                          type="text"
                          name="city"
                          placeholder="City*"
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address*"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid-2">
                        <select
                          name="state"
                          onChange={handleChange}
                          required
                          style={{ border: "2px solid #eee", borderRadius: "7px", padding: "0px 10px" }}
                        >
                          <option value="">Choose State</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Gujarat">Gujarat</option>
                        </select>

                        <input
                          type="text"
                          name="pincode"
                          placeholder="Pincode*"
                          onChange={handleChange}
                          required
                        />
                      </div>

                    </div>
                  </div>

                  <div className="wrap">
                    <h5 className="title">Payment Method</h5>
                    <div className="payment-item">
                      <label>
                        <input type="radio" checked readOnly />
                        <span>&nbsp;Cash on Delivery</span>
                      </label>
                    </div>
                    <br />
                    <button type="submit" className="tf-btn btn-onsurface">
                      Place Order
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}