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
                                        {/* ================= BATH & LAUNDRY ================= */}
                                        <li className="menu-item">
                                            <Link href="#" className="item-link">
                                                Bath &amp; Laundry <i className="icon icon-down" />
                                            </Link>
                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-menu-list">
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Bath Linen</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/100">Towels</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/101">Robes</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/102">Bathmats</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Bath Accessories</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/103">Holders &amp; Tumblers</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/104">Soap Dispensers</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/105">Soap Dishes</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/106">Bath Sets</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/107">Towel Holders</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/108">Toilet Accessories</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/109">Shower Curtains</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/110">Bath Stools</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Laundry</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/111">Laundry Storage &amp; Baskets</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/112">Cleaning Accessories</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/113">Cloth Dryers</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/114">Hangers &amp; Hooks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= BEDROOM ================= */}
                                        <li className="menu-item">
                                            <Link href="#" className="item-link">
                                                Bedroom <i className="icon icon-down" />
                                            </Link>
                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-menu-list">
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Beds</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/120">King Beds</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/121">Queen Beds</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/122">Single Beds</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/123">Bunk Beds</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Wardrobes</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/124">2 Door Wardrobes</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/125">3 Door Wardrobes</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/126">4 Door Wardrobes</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/127">Sliding Wardrobes</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Mattresses</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/128">King Mattresses</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/129">Queen Mattresses</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/130">Single Mattresses</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Bedroom Furniture</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/131">Bed Side Tables</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/132">Chest of Drawers</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/133">Dresser Mirrors</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= DINING ROOM ================= */}
                                        <li className="menu-item">
                                            <Link href="#" className="item-link">
                                                Dining Room <i className="icon icon-down" />
                                            </Link>
                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-menu-list">
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Dining Sets</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/140">4 Seater</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/141">6 Seater</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/142">8 Seater</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Dining Tables</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/143">4 Seater Tables</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/144">6 Seater Tables</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/145">8 Seater Tables</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Bar Furniture</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/146">Bar Cabinets</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/147">Bar Stools &amp; Chairs</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/148">Serving Trolleys</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>More</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/149">Dining Chairs</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/150">Dining Benches</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/151">Crockery Units</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= DECOR ================= */}
                                        <li className="menu-item">
                                            <Link href="#" className="item-link">
                                                Decor <i className="icon icon-down" />
                                            </Link>
                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-menu-list">
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Home Accessories</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/160">Figurines</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/161">Vases</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/162">Clocks</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/163">Gift Accessories</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Lighting</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/164">Table Lamps</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/165">Wall Lamps</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/166">Floor Lamps</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/167">String Lights</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Wall Decor</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/168">Wall Accents</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/169">Decorative Mirrors</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/170">Photo Frames</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/171">Posters &amp; Paintings</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Garden</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/172">Artificial Plants</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/173">Pots &amp; Planters</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/174">Fountains</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= KITCHEN ================= */}
                                        <li className="menu-item">
                                            <Link href="#" className="item-link">
                                                Kitchen <i className="icon icon-down" />
                                            </Link>
                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-menu-list">
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Storage &amp; Containers</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/180">Containers &amp; Jars</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/181">Bottles</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/182">Lunch Boxes</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Cookware</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/183">Cookware Sets</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/184">Pots &amp; Pans</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/185">Pressure Cookers</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Kitchenware</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/186">Knives &amp; Scissors</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/187">Casseroles</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/188">Chopping Boards</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/189">Dish Racks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>More</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/190">Kitchen Linens</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/191">Bakeware</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/192">Kitchen Appliances</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= LIVING ROOM ================= */}
                                        <li className="menu-item">
                                            <Link href="#" className="item-link">
                                                Living Room <i className="icon icon-down" />
                                            </Link>
                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-menu-list">
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Recliners</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/200">1 Seater</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/201">2 Seater</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/202">3 Seater</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/203">Recliner Sets</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>Tables</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/204">Centre Tables</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/205">End Tables</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/206">Console Tables</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/207">Nesting Tables</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>TV &amp; Media</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/208">TV Consoles</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/209">TV Units</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-item">
                                                            <ul className="menu-list">
                                                                <li>
                                                                    <strong>More</strong>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/210">Book Cases</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/211">Shoe Racks</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/categories/212">Outdoor Furniture</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-4 col-2 d-xl-none">
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

                            <div className="col-xl-4 col-md-4 col-2">
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
                                        <Link
                                            href="#shoppingCart"
                                            data-bs-toggle="modal"
                                            className="nav-icon-item"
                                        >
                                            <span className="icon icon-cart" />
                                            <span className="count-box text-button-small">1</span>
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