const MobileMenu = () => {
    return (
        <>
            <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
                <span
                    className="icon-close icon-close-popup"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
                <div className="mb-canvas-content">
                    <div className="mb-body">
                        <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                            <li className="nav-mb-item active">
                                <a
                                    href="#dropdown-menu-one"
                                    className="collapsed mb-menu-link"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="dropdown-menu-one"
                                >
                                    <span>Home</span>
                                    <span className="btn-open-sub" />
                                </a>
                                <div id="dropdown-menu-one" className="collapse">
                                    <ul className="sub-nav-menu">
                                        <li>
                                            <a href="index-2.html" className="sub-nav-link active">
                                                Homepage 01
                                            </a>
                                        </li>
                                        <li>
                                            <a href="home-2.html" className="sub-nav-link">
                                                Homepage 02
                                            </a>
                                        </li>
                                        <li>
                                            <a href="home-3.html" className="sub-nav-link">
                                                Homepage 03
                                            </a>
                                        </li>
                                        <li>
                                            <a href="home-4.html" className="sub-nav-link">
                                                Homepage 04
                                            </a>
                                        </li>
                                        <li>
                                            <a href="home-5.html" className="sub-nav-link">
                                                Homepage 05
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-mb-item">
                                <a
                                    href="#dropdown-menu-two"
                                    className="collapsed mb-menu-link"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="dropdown-menu-two"
                                >
                                    <span>Shop</span>
                                    <span className="btn-open-sub" />
                                </a>
                                <div id="dropdown-menu-two" className="collapse">
                                    <ul className="sub-nav-menu">
                                        <li>
                                            <a
                                                href="#sub-shop-one"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-shop-one"
                                            >
                                                <span>Shop Layout</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-shop-one" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a href="shop-default.html" className="sub-nav-link">
                                                            Shop Default
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list.html" className="sub-nav-link">
                                                            Shop List
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-full-grid.html" className="sub-nav-link">
                                                            Shop Full Grid
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-full-list.html" className="sub-nav-link">
                                                            Shop Full List
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="shop-sidebar-left.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Shop Sidebar Left
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="shop-sidebar-right.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Shop Sidebar Right
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="#sub-shop-two"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-shop-two"
                                            >
                                                <span>Shop Filter</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-shop-two" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a
                                                            href="shop-filter-canvas.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Filter Canvas
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="shop-filter-dropdown.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Filter Dropdown
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="shop-filter-sidebar.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Filter Sidebar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="#sub-shop-three"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-shop-three"
                                            >
                                                <span>Shop Pagination</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-shop-three" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a href="shop-pagination.html" className="sub-nav-link">
                                                            Pagination
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="shop-load-button.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Load Button
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="shop-infinite-scrolling.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Infinite Scrolling
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="#sub-shop-four"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-shop-four"
                                            >
                                                <span>Product Style</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-shop-four" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a
                                                            href="product-style-01.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Style 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-style-02.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Style 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-style-03.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Style 3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-style-04.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Style 4
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-style-05.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Style 5
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="#sub-shop-five"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-shop-five"
                                            >
                                                <span>My Pages</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-shop-five" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a href="shopping-cart.html" className="sub-nav-link">
                                                            Shopping Cart
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html" className="sub-nav-link">
                                                            Check Out
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="order.html" className="sub-nav-link">
                                                            Order Tracking
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html" className="sub-nav-link">
                                                            Login/Register
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wish-list.html" className="sub-nav-link">
                                                            Wish List
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="search-result.html" className="sub-nav-link">
                                                            Search
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html" className="sub-nav-link">
                                                            My Account
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-mb-item">
                                <a
                                    href="#dropdown-menu-three"
                                    className="collapsed mb-menu-link"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="dropdown-menu-three"
                                >
                                    <span>Products</span>
                                    <span className="btn-open-sub" />
                                </a>
                                <div id="dropdown-menu-three" className="collapse">
                                    <ul className="sub-nav-menu">
                                        <li>
                                            <a
                                                href="#sub-products-one"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-products-one"
                                            >
                                                <span>Products Layout</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-products-one" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a href="product-detail.html" className="sub-nav-link">
                                                            Product Detail
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-thumbnails-right.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Thumbnails Right
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-thumbnails-bottom.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Thumbnails Bottom
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="product-grid-1.html" className="sub-nav-link">
                                                            Product Grid 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="product-grid-2.html" className="sub-nav-link">
                                                            Product Grid 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="product-stacked.html" className="sub-nav-link">
                                                            Product Stacked
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-description-accordion.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Description Accordion
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-description-list.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Description List
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="#sub-products-two"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-products-two"
                                            >
                                                <span>Colors Swatched</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-products-two" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a
                                                            href="product-swatch-image.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Swatch Image
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-swatch-image-rounded.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Swatch Image Rounded
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-swatch-dropdown.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Swatch Dropdown
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-swatch-dropdown-color.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Swatch Dropdown Color
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="#sub-products-three"
                                                className="sub-nav-link collapsed"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="sub-products-three"
                                            >
                                                <span>Products Features</span>
                                                <span className="btn-open-sub" />
                                            </a>
                                            <div id="sub-products-three" className="collapse">
                                                <ul className="sub-nav-menu sub-menu-level-2">
                                                    <li>
                                                        <a
                                                            href="product-bought-together.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Bought Together
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-bought-together-2.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Bought Together 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="product-up-sell.html" className="sub-nav-link">
                                                            Product Up Sell
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-pre-order.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Pre Order
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="product-grouped.html" className="sub-nav-link">
                                                            Product Grouped
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-out-of-stock.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Out Of Stock
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-pickup-available.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product Pickup Available
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-external.html"
                                                            className="sub-nav-link"
                                                        >
                                                            Product External
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-mb-item">
                                <a
                                    href="#dropdown-menu-four"
                                    className="collapsed mb-menu-link"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="dropdown-menu-four"
                                >
                                    <span>Blog</span>
                                    <span className="btn-open-sub" />
                                </a>
                                <div id="dropdown-menu-four" className="collapse">
                                    <ul className="sub-nav-menu">
                                        <li>
                                            <a href="blog-list.html" className="sub-nav-link">
                                                Blog List
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html" className="sub-nav-link">
                                                Blog Grid
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html" className="sub-nav-link">
                                                Blog Detail
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-mb-item">
                                <a
                                    href="#dropdown-menu-five"
                                    className="collapsed mb-menu-link"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="dropdown-menu-five"
                                >
                                    <span>Page</span>
                                    <span className="btn-open-sub" />
                                </a>
                                <div id="dropdown-menu-five" className="collapse">
                                    <ul className="sub-nav-menu">
                                        <li>
                                            <a href="about.html" className="sub-nav-link">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faqs.html" className="sub-nav-link">
                                                Faqs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="store-list.html" className="sub-nav-link">
                                                Store List
                                            </a>
                                        </li>
                                        <li>
                                            <a href="term-of-use.html" className="sub-nav-link">
                                                Term Of Use
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html" className="sub-nav-link">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className="mb-other-content">
                            <div className="group-icon">
                                <a href="wish-list.html" className="site-nav-icon">
                                    <svg
                                        className="icon"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                                            stroke="#181818"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Wishlist
                                </a>
                                <a href="search-result.html" className="site-nav-icon">
                                    <svg
                                        className="icon"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                            stroke="#181818"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21.35 21.0004L17 16.6504"
                                            stroke="#181818"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Search
                                </a>
                                <a href="login.html" className="site-nav-icon">
                                    <svg
                                        className="icon"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                            stroke="#181818"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                            stroke="#181818"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Login
                                </a>
                            </div>
                            <div className="mb-notice">
                                <a href="contact.html" className="text-need">
                                    Need help ?
                                </a>
                            </div>
                            <ul className="mb-info">
                                <li>
                                    Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001
                                </li>
                                <li>
                                    Email: <b>example@example.com</b>
                                </li>
                                <li>
                                    Phone: <b>(212) 555-1234</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-bottom">
                        <div className="bottom-bar-language">
                            <div className="tf-currencies">
                                <select className="image-select center style-default type-currencies">
                                    <option data-thumbnail="images/country/us.svg">
                                        USD
                                    </option>
                                    <option data-thumbnail="images/country/vn.svg">VND</option>
                                </select>
                            </div>
                            <div className="tf-languages">
                                <select className="image-select center style-default type-languages">
                                    <option>English</option>
                                    <option>Vietnam</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu