import Link from "next/link"

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
                                        <li className="menu-item">
                                            <a href="#" className="item-link">
                                                Furniture
                                                <i className="icon icon-down" />
                                            </a>
                                            <div className="sub-menu mega-menu mega-menu-1">
                                                <div className="container">
                                                    <div className="row-demo-1">
                                                        <div className="mega-menu-list">
                                                            <div className="mega-menu-item">
                                                                <div className="list-categories-inner">
                                                                    <div className="menu-heading text-title">
                                                                        Browse Categories
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary "
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Ergonomic Furniture(2)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary "
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Storage Solutions(11)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary "
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Office Supplies(7)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary "
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Tech Accessories(4)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary "
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Office Furniture(20)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary "
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Ergonomic Equipment(4)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="box-cate-bottom">
                                                                        <a
                                                                            href="shop-default.html"
                                                                            className="btn-line"
                                                                        >
                                                                            <span>View All Products </span>
                                                                            <i className="icon-arrow-up-right" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="menu-heading text-title">
                                                                    Shop Layout
                                                                </div>
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="shop-default.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shop Default
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-list.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shop List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-full-grid.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shop Full Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-full-list.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shop Full List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-sidebar-left.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shop Sidebar Left
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-sidebar-right.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shop Sidebar Right
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="menu-heading text-title">
                                                                    Shop Filter
                                                                </div>
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="shop-filter-canvas.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Filter Canvas
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-filter-dropdown.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Filter Dropdown
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-filter-sidebar.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Filter Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="menu-heading text-title">
                                                                    Shop Pagination
                                                                </div>
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="shop-pagination.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Pagination
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-load-button.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Load Button
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="shop-infinite-scrolling.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Infinite Scrolling
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="menu-heading text-title">
                                                                    Product Style
                                                                </div>
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="product-style-01.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Style 1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-style-02.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Style 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-style-03.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Style 3
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-style-04.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Style 4
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-style-05.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Style 5
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="menu-heading">My Pages</div>
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="shopping-cart.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Shopping Cart
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="checkout.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Check Out
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="order.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Order Tracking
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="login.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Login/Register
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="wish-list.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Wish List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="search-result.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Search
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="my-account.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            My Account
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="collection-position style-2">
                                                                    <div className="img-style ">
                                                                        <img
                                                                            className="lazyload effect-paralax opacity-100"
                                                                            data-src="images/banner/banner-1.jpg"
                                                                            src="images/banner/banner-1.jpg"
                                                                            alt="banner-cls"
                                                                        />
                                                                    </div>
                                                                    <div className="content cls-content">
                                                                        <div className="cls-heading">
                                                                            <h4 className="text_white">
                                                                                Elevate Your Office
                                                                            </h4>
                                                                            <p className="text_white">
                                                                                Stylish office decor
                                                                            </p>
                                                                        </div>
                                                                        <a
                                                                            href="shop-default.html"
                                                                            className="tf-btn btn-white "
                                                                        >
                                                                            Explore Collection{" "}
                                                                            <i className="icon-arrow-up-right" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#" className="item-link">
                                                Household
                                                <i className="icon icon-down" />
                                            </a>
                                            <div className="sub-menu mega-menu mega-menu-1">
                                                <div className="container">
                                                    <div className="row-demo-1">
                                                        <div className="mega-menu-list">
                                                            <div className="mega-menu-item">
                                                                <div className="list-categories-inner">
                                                                    <div className="menu-heading text-title">
                                                                        Browse Categories
                                                                    </div>
                                                                    <ul>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary"
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Lighting Solutions(9)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary"
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Cleaning Supplies(15)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary"
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Printing &amp; Paper(2)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary"
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Top 100 Offers(100)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary"
                                                                            >
                                                                                <span className="inner-left">
                                                                                    New Arrivals(30)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="shop-default.html"
                                                                                className="categories-item text_secondary"
                                                                            >
                                                                                <span className="inner-left">
                                                                                    Value of the Day(31)
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="box-cate-bottom">
                                                                        <a
                                                                            href="shop-default.html"
                                                                            className="btn-line"
                                                                        >
                                                                            <span>View All Products </span>
                                                                            <i className="icon-arrow-up-right" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="product-detail.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Detail
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-thumbnails-right.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Thumbnails Right
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-thumbnails-bottom.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Thumbnails Bottom
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-grid-1.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Grid 1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-grid-2.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Grid 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-stacked.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Stacked
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-description-accordion.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Description Accordion
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-description-list.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Description List
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="product-swatch-image.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Swatch Image
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-swatch-image-rounded.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Swatch Image Rounded
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-swatch-dropdown.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Swatch Dropdown
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-swatch-dropdown-color.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Swatch Dropdown Color
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a
                                                                            href="product-bought-together.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Bought Together
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-bought-together-2.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Bought Together 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-up-sell.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Up Sell
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-pre-order.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Pre Order
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-grouped.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Grouped
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-out-of-stock.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Out Of Stock
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-pickup-available.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product Pickup Available
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="product-external.html"
                                                                            className="menu-link-text text_secondary link"
                                                                        >
                                                                            Product External
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-item">
                                                                <div className="collection-position hover-img style-4">
                                                                    <a
                                                                        href="product-detail.html"
                                                                        className="img-style w-100"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            data-src="images/banner/collections-1.jpg"
                                                                            src="images/banner/collections-1.jpg"
                                                                            alt="banner-cls"
                                                                        />
                                                                    </a>
                                                                    <div className="content cls-content">
                                                                        <h6>
                                                                            {" "}
                                                                            <a
                                                                                href="product-detail.html"
                                                                                className="link"
                                                                            >
                                                                                Desks
                                                                            </a>
                                                                        </h6>
                                                                        <h6>25 products</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item position-relative">
                                            <Link href="/categories/100" className="item-link">
                                                Kids
                                            </Link>
                                        </li>
                                        <li className="menu-item position-relative">
                                            <Link href="/categories/100" className="item-link">
                                                Baby
                                            </Link>
                                        </li>

                                        <li className="menu-item position-relative">
                                            <Link href="/categories/100" className="item-link">
                                                New Arrivals
                                            </Link>
                                        </li>
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