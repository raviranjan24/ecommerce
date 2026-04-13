"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const Header = () => {
    const cartCount = useSelector((state: any) => state?.cart?.items?.cart?.items?.length);
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
                    <div className="container-full">
                        <div className="row wrapper-header align-items-center">
                            <div className="col-xl-2 col-md-4 col-8 text-center">
                                <Link href="/" className="logo-header">
                                    <img src="/images/logo.jpeg" alt="logo" className="logo" />
                                </Link>
                            </div>
                            <div className="col-xl-9 d-none d-xl-block">
                                <Navbar />
                            </div>
                            <div className="col-md-2 col-2 d-xl-none">
                                <Link
                                    href="#mobileMenu"
                                    className="mobile-menu"
                                    data-bs-toggle="offcanvas"
                                    aria-controls="mobileMenu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="#000000"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                                    </svg>
                                </Link>
                            </div>

                            <div className="col-xl-1 col-md-4 col-2">
                                <ul className="nav-icon">
                                    <li className="nav-search">
                                        <Link
                                            href="#search"
                                            data-bs-toggle="modal"
                                            className="nav-icon-item"
                                        >
                                            <span className="icon icon-search" />
                                        </Link>
                                    </li>
                                    {token ?
                                        <li className="nav-account">
                                            <Link href="/my-account" className="nav-icon-item">
                                                <span className="icon icon-user" />
                                            </Link>
                                        </li>
                                        :
                                        <li className="nav-account">
                                            <Link href="/auth/login" className="nav-icon-item">
                                                <span className="icon icon-user" />
                                            </Link>
                                        </li>
                                    }
                                    <li className="nav-cart">
                                        <Link
                                            href="/cart"
                                            className="nav-icon-item"
                                        >
                                            <span className="icon icon-cart" />
                                            <span className="count-box text-button-small">
                                                {cartCount || 0}
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header