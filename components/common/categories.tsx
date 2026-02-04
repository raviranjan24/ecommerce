const Category = () => {
    return (
        <>
            <div
                className="offcanvas offcanvas-start canvas-filter canvas-categories"
                id="shopCategories"
            >
                <div className="canvas-wrapper">
                    <div className="canvas-header">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="#000000"
                            viewBox="0 0 256 256"
                        >
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                        </svg>
                        <h5>Categories</h5>
                        <span
                            className="icon-close icon-close-popup"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="canvas-body">
                        <div className="wd-facet-categories">
                            <div
                                role="dialog"
                                className="facet-title collapsed"
                                data-bs-target="#forChair"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="forChair"
                            >
                                <img className="avt" src="images/shop/product-1.jpg" alt="avt" />
                                <span className="title">Chair</span>
                                <span className="icon icon-down" />
                            </div>
                            <div id="forChair" className="collapse">
                                <ul className="facet-body">
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/shop/product-1.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Saddle Chair
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/shop/product-1.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Ergonomic Chair
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="wd-facet-categories">
                            <div
                                role="dialog"
                                className="facet-title collapsed"
                                data-bs-target="#forDesk"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="forDesk"
                            >
                                <img
                                    className="avt"
                                    src="images/shop/popup-slidebar-item-2.jpg"
                                    alt="avt"
                                />
                                <span className="title">Desk</span>
                                <span className="icon icon-down" />
                            </div>
                            <div id="forDesk" className="collapse">
                                <ul className="facet-body">
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/shop/popup-slidebar-item-2.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Office Desk
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/shop/popup-slidebar-item-2.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Standing Desk
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="wd-facet-categories">
                            <div
                                role="dialog"
                                className="facet-title collapsed"
                                data-bs-target="#forPhone"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="forPhone"
                            >
                                <img className="avt" src="images/shop/product-5.jpg" alt="avt" />
                                <span className="title">Phone</span>
                                <span className="icon icon-down" />
                            </div>
                            <div id="forPhone" className="collapse">
                                <ul className="facet-body">
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/shop/product-5.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Charging Pad
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/shop/product-5.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Charging Stand
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="wd-facet-categories">
                            <div
                                role="dialog"
                                className="facet-title collapsed"
                                data-bs-target="#forLamp"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="forLamp"
                            >
                                <img className="avt" src="images/gallery/gallery-3.jpg" alt="avt" />
                                <span className="title">Lamp</span>
                                <span className="icon icon-down" />
                            </div>
                            <div id="forLamp" className="collapse">
                                <ul className="facet-body">
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/gallery/gallery-3.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Reflection Lamp
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-default.html" className="item link">
                                            <img
                                                className="avt"
                                                src="images/gallery/gallery-3.jpg"
                                                alt="avt"
                                            />
                                            <span className="title-sub text-caption-1 text-secondary">
                                                Shore Lamp
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category