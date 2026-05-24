"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const Header = () => {
  const cartCount = useSelector(
    (state: any) => state?.cart?.items?.cart?.items?.length
  );

  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("token");
      setToken(t);
    }
  }, []);

  return (
    <>
      <header id="header" className="header-default">
        <div className="main-header">
          <div className="container-fluid px-3 px-xl-4">
            <div className="header-wrapper">
              <div className="header-left">
                <Link href="/" className="logo-header">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="logo"
                  />
                </Link>
              </div>
              <div className="header-center d-none d-xl-flex">
                <Navbar />
              </div>
              <div className="header-right">
                <Link
                  href="#search"
                  data-bs-toggle="modal"
                  className="nav-icon-item"
                >
                  <span className="icon icon-search" />
                </Link>
                <Link
                  href={token ? "/my-account" : "/auth/login"}
                  className="nav-icon-item"
                >
                  <span className="icon icon-user" />
                </Link>

                {/* Cart */}
                <Link
                  href="/cart"
                  className="nav-icon-item cart-icon"
                >
                  <span className="icon icon-cart" />

                  <span className="count-box">
                    {cartCount || 0}
                  </span>
                </Link>
                <Link
                  href="#mobileMenu"
                  className="mobile-menu d-xl-none"
                  data-bs-toggle="offcanvas"
                  aria-controls="mobileMenu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="#000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                  </svg>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </header>
      <style jsx>{`
        .main-header {
          width: 100%;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 80px;
        }

        .header-left {
          flex: 0 0 auto;
        }

        .header-center {
          flex: 1;
          justify-content: center;
          padding: 0 20px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 0 0 auto;
        }

        .logo {
          width: 120px;
          height: auto;
          object-fit: contain;
        }

        .nav-icon-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #000;
          font-size: 20px;
        }

        /* CART */
        .cart-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          min-height: 28px;
        }

        .count-box {
          position: absolute;
          top: 21px;
          right: 8px;
          min-width: 18px;
          height: 18px;
          padding: 0 4px;
          border-radius: 50px;
          background: #000;
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          z-index: 9;
        }

        .mobile-menu {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1199px) {
          .header-wrapper {
            min-height: 70px;
          }

          .logo {
            width: 90px;
          }

          .header-right {
            gap: 14px;
          }

          .nav-icon-item {
            font-size: 18px;
          }
        }

        @media (max-width: 767px) {
          .container-fluid {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }

          .header-wrapper {
            min-height: 65px;
          }

          .logo {
            width: 80px;
          }

          .header-right {
            gap: 12px;
          }

          .nav-icon-item {
            font-size: 17px;
          }

          .count-box {
            top: 20px;
            right: 34px;
            min-width: 16px;
            height: 16px;
            font-size: 9px;
          }
        }
      `}
      </style>
    </>
  );
};

export default Header;

// "use client";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Navbar from "./navbar";

// const Header = () => {
//     const cartCount = useSelector((state: any) => state?.cart?.items?.cart?.items?.length);
//     const [token, setToken] = useState<any>(null);
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const t = localStorage.getItem("token");
//             setToken(t);
//         }
//     }, []);
//     return (
//         <>
//             <header id="header" className="header-default">
//                 <div className="main-header">
//                     <div className="container-full">
//                         <div className="row wrapper-header align-items-center">
//                             <div className="col-xl-2 col-md-4 col-8 text-center">
//                                 <Link href="/" className="logo-header">
//                                     <img src="/images/logo.png" alt="logo" className="logo" />
//                                 </Link>
//                             </div>
//                             <div className="col-xl-9 d-none d-xl-block">
//                                 <Navbar />
//                             </div>
//                             <div className="col-md-2 col-2 d-xl-none">
//                                 <Link
//                                     href="#mobileMenu"
//                                     className="mobile-menu"
//                                     data-bs-toggle="offcanvas"
//                                     aria-controls="mobileMenu"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width={24}
//                                         height={24}
//                                         fill="#000000"
//                                         viewBox="0 0 256 256"
//                                     >
//                                         <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
//                                     </svg>
//                                 </Link>
//                             </div>

//                             <div className="col-xl-1 col-md-4 col-2">
//                                 <ul className="nav-icon">
//                                     <li className="nav-search">
//                                         <Link
//                                             href="#search"
//                                             data-bs-toggle="modal"
//                                             className="nav-icon-item"
//                                         >
//                                             <span className="icon icon-search" />
//                                         </Link>
//                                     </li>
//                                     {token ?
//                                         <li className="nav-account">
//                                             <Link href="/my-account" className="nav-icon-item">
//                                                 <span className="icon icon-user" />
//                                             </Link>
//                                         </li>
//                                         :
//                                         <li className="nav-account">
//                                             <Link href="/auth/login" className="nav-icon-item">
//                                                 <span className="icon icon-user" />
//                                             </Link>
//                                         </li>
//                                     }
//                                     <li className="nav-cart">
//                                         <Link
//                                             href="/cart"
//                                             className="nav-icon-item"
//                                         >
//                                             <span className="icon icon-cart" />
//                                             <span className="count-box text-button-small">
//                                                 {cartCount || 0}
//                                             </span>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }

// export default Header