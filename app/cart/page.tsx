"use client";
import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  updateCart,
  removeCart,
  clearCart,
} from "@/redux/slices/cartSlice";
import { getToken } from "@/utils/auth";

export default function Cart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state: any) => state.cart);
  const cart = cartState?.items?.cart || {};
  const items = cart?.items || [];
  const subtotal = cart?.subtotal || 0;
  const total = cart?.total || 0;

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(fetchCart(token) as any);
    }
  }, [dispatch]);

  const refreshCart = () => {
    const token = getToken();
    if (token) {
      dispatch(fetchCart(token) as any);
    }
  };

  const token = getToken();
  return (
    <>
      <Breadcrum title={"Cart"} />
      {!token ? (
        <section className="flat-spacing">
          <div className="container">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "70vh" }}
            >
              <div className="cart-login-box text-center">
                <div className="cart-icon-wrapper">
                  <span className="icon icon-cart"></span>
                </div>
                <h3 className="mt-4 mb-3">
                  Your Cart Awaits 🛒
                </h3>
                <p className="cart-login-text mb-4">
                  Please login to view your cart items,
                  manage products and continue checkout.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link
                    href="/auth/login"
                    className="tf-btn btn-fill"
                  >
                    Login
                  </Link>
                  <Link
                    href="/"
                    className="tf-btn btn-outline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
      .cart-login-box {
        max-width: 500px;
        width: 100%;
        background: #fff;
        border-radius: 20px;
        padding: 50px 35px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.08);
      }

      .cart-icon-wrapper {
        width: 90px;
        height: 90px;
        margin: 0 auto;
        border-radius: 50%;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cart-icon-wrapper .icon {
        font-size: 42px;
      }

      .cart-login-text {
        color: #666;
        font-size: 16px;
        line-height: 1.7;
      }

      .tf-btn {
        min-width: 180px;
        height: 52px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-weight: 600;
        transition: 0.3s;
      }

      .btn-fill {
        background: #000;
        color: #fff;
      }

      .btn-fill:hover {
        background: #222;
      }

      .btn-outline {
        border: 1px solid #ddd;
        color: #000;
        background: #fff;
      }

      .btn-outline:hover {
        background: #f7f7f7;
      }

      @media (max-width: 767px) {
        .cart-login-box {
          padding: 35px 20px;
        }

        .cart-icon-wrapper {
          width: 75px;
          height: 75px;
        }

        .cart-icon-wrapper .icon {
          font-size: 34px;
        }

        .cart-login-text {
          font-size: 15px;
        }

        .tf-btn {
          width: 100%;
        }
      }
    `}</style>

        </section>

      ) : (

        <section className="flat-spacing pb-0">
          <div className="container">
            <div className="row">

              <div className="col-xl-8">
                <table className="tf-table-page-cart">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Total</th>
                      <th />
                    </tr>
                  </thead>

                  <tbody>
                    {items?.length > 0 ? (
                      items.map((item: any, index: number) => (
                        <tr key={index} className="tf-cart-item">

                          <td className="tf-cart-item_product">
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                src={item?.image || "/images/placeholder.jpg"}
                                width={70}
                                height={70}
                                alt="product"
                              />

                              <div>
                                <p className="mb-1">
                                  Product ID: {item?.productId}
                                </p>

                                <small>Size: {item?.size}</small>
                              </div>
                            </div>
                          </td>

                          <td className="text-center">
                            ₹{item?.price}
                          </td>

                          <td>
                            <div className="d-flex align-items-center gap-2 justify-content-center">

                              <button
                                onClick={async () => {
                                  if (item.quantity > 1) {
                                    await dispatch(
                                      updateCart({
                                        productId: item.productId,
                                        size: item.size,
                                        quantity: item.quantity - 1,
                                        token: getToken(),
                                      }) as any
                                    );

                                    refreshCart();
                                  }
                                }}
                                className="btn btn-sm btn-light"
                              >
                                -
                              </button>

                              <span>{item.quantity}</span>

                              <button
                                onClick={async () => {
                                  await dispatch(
                                    updateCart({
                                      productId: item.productId,
                                      size: item.size,
                                      quantity: item.quantity + 1,
                                      token: getToken(),
                                    }) as any
                                  );

                                  refreshCart();
                                }}
                                className="btn btn-sm btn-light"
                              >
                                +
                              </button>

                            </div>
                          </td>

                          <td className="text-center">
                            ₹{item.price * item.quantity}
                          </td>

                          <td className="text-center">
                            <button
                              onClick={async () => {
                                await dispatch(
                                  removeCart({
                                    productId: item.productId,
                                    size: item.size,
                                    token: getToken(),
                                  }) as any
                                );

                                refreshCart();
                              }}
                              className="btn btn-sm btn-danger"
                            >
                              ✕
                            </button>
                          </td>

                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="text-center py-5"
                        >
                          Your cart is empty 🛒
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {items.length > 0 && (
                  <div className="mt-3 text-end">
                    <button
                      onClick={async () => {
                        await dispatch(
                          clearCart(getToken() || "") as any
                        );

                        refreshCart();
                      }}
                      className="btn btn-danger"
                    >
                      Clear Cart
                    </button>
                  </div>
                )}
              </div>

              <div className="col-xl-4">

                {items?.length > 0 && (
                  <div className="fl-sidebar-cart">
                    <div className="box-order bg-surface">

                      <h5 className="title">
                        Order Summary
                      </h5>

                      <div className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                      </div>

                      <div className="mt-2">
                        <span>Shipping</span>
                        <div>Free</div>
                      </div>

                      <h5 className="d-flex justify-content-between mt-3">
                        <span>Total</span>
                        <span>₹{total}</span>
                      </h5>

                      <div className="mt-3">

                        <Link
                          href="/checkout"
                          className="tf-btn btn-onsurface w-100"
                        >
                          Proceed To Checkout
                        </Link>

                        <Link
                          href="/"
                          className="text-center d-block mt-2"
                        >
                          Continue Shopping
                        </Link>

                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </section>

      )}
    </>
  );


}

// "use client";
// import Breadcrum from "@/components/common/breadcrum";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchCart,
//   updateCart,
//   removeCart,
//   clearCart,
// } from "@/redux/slices/cartSlice";
// import { getToken } from "@/utils/auth";

// export default function Cart() {
//   const dispatch = useDispatch();
//   const cartState = useSelector((state: any) => state.cart);
//   const cart = cartState?.items?.cart || {};
//   const items = cart?.items || [];
//   const subtotal = cart?.subtotal || 0;
//   const total = cart?.total || 0;

//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       dispatch(fetchCart(token) as any);
//     }
//   }, [dispatch]);

//   const refreshCart = () => {
//     const token = getToken();
//     if (token) {
//       dispatch(fetchCart(token) as any);
//     }
//   };

//   return (
//     <>
//       <Breadcrum title={"Cart"} />

//       <section className="flat-spacing pb-0">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-8">
//               <table className="tf-table-page-cart">
//                 <thead>
//                   <tr>
//                     <th>Products</th>
//                     <th className="text-center">Price</th>
//                     <th className="text-center">Quantity</th>
//                     <th className="text-center">Total</th>
//                     <th />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {items?.length > 0 ? (
//                     items.map((item: any, index: number) => (
//                       <tr key={index} className="tf-cart-item">
//                         <td className="tf-cart-item_product">
//                           <div className="d-flex gap-3 align-items-center">
//                             <img
//                               src={item?.image || "/images/placeholder.jpg"}
//                               width={70}
//                               height={70}
//                               alt="product"
//                             />
//                             <div>
//                               <p className="mb-1">
//                                 Product ID: {item?.productId}
//                               </p>
//                               <small>Size: {item?.size}</small>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="text-center">
//                           ₹{item?.price}
//                         </td>
//                         <td>
//                           <div className="d-flex align-items-center gap-2 justify-content-center">
//                             <button
//                               onClick={async () => {
//                                 if (item.quantity > 1) {
//                                   await dispatch(
//                                     updateCart({
//                                       productId: item.productId,
//                                       size: item.size,
//                                       quantity: item.quantity - 1,
//                                       token: getToken(),
//                                     }) as any
//                                   );
//                                   refreshCart();
//                                 }
//                               }}
//                               className="btn btn-sm btn-light"
//                             >
//                               -
//                             </button>

//                             <span>{item.quantity}</span>
//                             <button
//                               onClick={async () => {
//                                 await dispatch(
//                                   updateCart({
//                                     productId: item.productId,
//                                     size: item.size,
//                                     quantity: item.quantity + 1,
//                                     token: getToken(),
//                                   }) as any
//                                 );
//                                 refreshCart();
//                               }}
//                               className="btn btn-sm btn-light"
//                             >
//                               +
//                             </button>

//                           </div>
//                         </td>

//                         <td className="text-center">
//                           ₹{item.price * item.quantity}
//                         </td>

//                         <td className="text-center">
//                           <button
//                             onClick={async () => {
//                               await dispatch(
//                                 removeCart({
//                                   productId: item.productId,
//                                   size: item.size,
//                                   token: getToken(),
//                                 }) as any
//                               );
//                               refreshCart();
//                             }}
//                             className="btn btn-sm btn-danger"
//                           >
//                             ✕
//                           </button>
//                         </td>

//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={5} className="text-center py-5">
//                         Your cart is empty 🛒
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>

//               {items.length > 0 && (
//                 <div className="mt-3 text-end">
//                   <button
//                     onClick={async () => {
//                       await dispatch(clearCart(getToken()||"") as any);
//                       refreshCart();
//                     }}
//                     className="btn btn-danger"
//                   >
//                     Clear Cart
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="col-xl-4">
//               {items?.length > 0 ?
//                 <>
//                   <div className="fl-sidebar-cart">
//                     <div className="box-order bg-surface">

//                       <h5 className="title">Order Summary</h5>

//                       <div className="d-flex justify-content-between">
//                         <span>Subtotal</span>
//                         <span>₹{subtotal}</span>
//                       </div>

//                       <div className="mt-2">
//                         <span>Shipping</span>
//                         <div>Free</div>
//                       </div>

//                       <h5 className="d-flex justify-content-between mt-3">
//                         <span>Total</span>
//                         <span>₹{total}</span>
//                       </h5>

//                       <div className="mt-3">
//                         <Link
//                           href="/checkout"
//                           className="tf-btn btn-onsurface w-100"
//                         >
//                           Proceed To Checkout
//                         </Link>

//                         <Link
//                           href="/"
//                           className="text-center d-block mt-2"
//                         >
//                           Continue Shopping
//                         </Link>
//                       </div>

//                     </div>
//                   </div>
//                 </>
//                 : ''}
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }