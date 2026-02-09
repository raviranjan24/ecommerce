import Link from "next/link";
import { finalCategory, LINK } from "@/utils/finalCategory";

const Header = () => {
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
                            <div className="col-xl-6 d-none d-xl-block">
                                <nav className="box-navigation text-center">
                                    <ul className="box-nav-ul justify-content-start">
                                        <li className="menu-item">
                                            <Link href="/" className="item-link active">
                                                HOME
                                            </Link>
                                        </li>
                                        {finalCategory.map((dept, deptIndex) => (
                                            <li key={deptIndex} className="menu-item">
                                                <a href="#" className="item-link">
                                                    {dept.department} {dept.categories && dept.categories.length > 0 && <i className="icon icon-down" />}
                                                </a>
                                                {dept.categories && dept.categories.length > 0 && (
                                                    <div className="sub-menu mega-menu mega-menu-1">
                                                        <div className="container">
                                                            <div className="row d-flex">
                                                                <div className="mega-menu-list d-flex flex-wrap justify-content-start">
                                                                    {/* For each department's dropdown, show its categories in a single column */}
                                                                    <div className="mega-menu-item" style={{ flex: '0 0 100%' }}> {/* Full width for single dropdown */}
                                                                        <div className="menu-heading text-title">
                                                                            {dept.department}
                                                                        </div>
                                                                        <ul className="menu-list">
                                                                            {dept.categories.map((cat, catIndex) => (
                                                                                <li key={catIndex}>
                                                                                    <Link href={LINK} className="menu-link-text text_secondary link">
                                                                                        {cat.title}
                                                                                    </Link>
                                                                                    {cat.items.length > 0 && (
                                                                                        <ul>
                                                                                            {cat.items.map((item, itemIndex) => (
                                                                                                <li key={itemIndex}>
                                                                                                    <Link href={LINK} className="text_secondary">
                                                                                                        {item}
                                                                                                    </Link>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    )}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-4 col-2 d-xl-none">
                                <a
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
                                </a>
                            </div>

                            <div className="col-xl-4 col-md-4 col-2">
                                <ul className="nav-icon">
                                    <li className="nav-search">
                                        <a
                                            href="#search"
                                            data-bs-toggle="modal"
                                            className="nav-icon-item"
                                        >
                                            <span className="icon icon-search" />
                                        </a>
                                    </li>
                                    <li className="nav-account">
                                        <Link href="/auth/login" className="nav-icon-item">
                                            <span className="icon icon-user" />
                                        </Link>
                                    </li>
                                    <li className="nav-wishlist">
                                        <Link href="/wishlist" className="nav-icon-item">
                                            <span className="icon icon-heart" />
                                        </Link>
                                    </li>
                                    <li className="nav-cart">
                                        <a
                                            href="#shoppingCart"
                                            data-bs-toggle="modal"
                                            className="nav-icon-item"
                                        >
                                            <span className="icon icon-cart" />
                                            <span className="count-box text-button-small">1</span>
                                        </a>
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