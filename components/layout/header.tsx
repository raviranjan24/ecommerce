"use client";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
// import { finalCategory, LINK } from "@/utils/finalCategory";

const Header = () => {
    const cartCount = useSelector((state: any) => state?.cart?.count);
    const token = localStorage.getItem("user.data.token");
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
                            <div className="col-xl-8 d-none d-xl-block">
                                <nav className="box-navigation text-center">
                                    <ul className="box-nav-ul justify-content-start">
                                        {/* ================= BEDROOM ================= */}

                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Bedroom <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid bedroom-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Beds</h6>
                                                            <ul>
                                                                <li><Link href="/categories/120">King Beds</Link></li>
                                                                <li><Link href="/categories/121">Queen Beds</Link></li>
                                                                <li><Link href="/categories/122">Single Beds</Link></li>
                                                                <li><Link href="/categories/123">Bunk Beds</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Wardrobes</h6>
                                                            <ul>
                                                                <li><Link href="/categories/124">2 Door Wardrobes</Link></li>
                                                                <li><Link href="/categories/125">3 Door Wardrobes</Link></li>
                                                                <li><Link href="/categories/126">4 Door Wardrobes</Link></li>
                                                                <li><Link href="/categories/127">Sliding Wardrobes</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Mattresses</h6>
                                                            <ul>
                                                                <li><Link href="/categories/128">King Mattresses</Link></li>
                                                                <li><Link href="/categories/129">Queen Mattresses</Link></li>
                                                                <li><Link href="/categories/130">Single Mattresses</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 4 */}
                                                        <div className="mega-column">
                                                            <h6>Bed Side Tables</h6>
                                                            <h6 style={{ marginTop: "25px" }}>Chest of Drawers</h6>
                                                            <h6 style={{ marginTop: "25px" }}>Dresser Mirrors</h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= Furnishings ================= */}
                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Furnishings <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid furnishings-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Bedding</h6>
                                                            <ul>
                                                                <li><Link href="#">Double Bedsheets</Link></li>
                                                                <li><Link href="#">Single Bedsheets</Link></li>
                                                                <li><Link href="#">Bedding Sets</Link></li>
                                                                <li><Link href="#">Pillows & Pillow Covers</Link></li>
                                                                <li><Link href="#">Blankets & Quilts</Link></li>
                                                                <li><Link href="#">Comforters</Link></li>
                                                                <li><Link href="#">Throws</Link></li>
                                                                <li><Link href="#">Duvets & Duvet Covers</Link></li>
                                                                <li><Link href="#">Dohars</Link></li>
                                                                <li><Link href="#">Bed Covers</Link></li>
                                                                <li><Link href="#">Mattress Protectors & Toppers</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Cushions</h6>
                                                            <ul>
                                                                <li><Link href="#">Cushion Covers</Link></li>
                                                                <li><Link href="#">Filled Cushions</Link></li>
                                                                <li><Link href="#">Cushion Fillers</Link></li>
                                                                <li><Link href="#">Floor Cushions</Link></li>
                                                            </ul>

                                                            <h6 style={{ marginTop: "30px" }}>Curtains & Blinds</h6>
                                                            <ul>
                                                                <li><Link href="#">Door Curtains</Link></li>
                                                                <li><Link href="#">Window Curtains</Link></li>
                                                                <li><Link href="#">Blinds</Link></li>
                                                                <li><Link href="#">Rods & Accessories</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Accessories</h6>
                                                            <ul>
                                                                <li><Link href="#">Bags</Link></li>
                                                                <li><Link href="#">Pads & Mats</Link></li>
                                                                <li><Link href="#">Sofa Covers</Link></li>
                                                            </ul>

                                                            <h6 style={{ marginTop: "30px" }}>Floor Coverings</h6>
                                                            <ul>
                                                                <li><Link href="#">Carpets & Rugs</Link></li>
                                                                <li><Link href="#">Dhurries</Link></li>
                                                                <li><Link href="#">Doormats</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* ================= LIVING ROOM ================= */}
                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Living Room <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <div className="mega-group">
                                                                <h6>Sofas</h6>
                                                                <ul>
                                                                    <li><Link href="#">3 Seater Sofas</Link></li>
                                                                    <li><Link href="#">2 Seater Sofas</Link></li>
                                                                    <li><Link href="#">1 Seater Sofas</Link></li>
                                                                    <li><Link href="#">Sofa Sets</Link></li>
                                                                    <li><Link href="#">Sofa Cum Beds</Link></li>
                                                                    <li><Link href="#">Corner Sofas</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <div className="mega-group">
                                                                <h6>Recliners</h6>
                                                                <ul>
                                                                    <li><Link href="#">3 Seater Recliners</Link></li>
                                                                    <li><Link href="#">2 Seater Recliners</Link></li>
                                                                    <li><Link href="#">1 Seater Recliners</Link></li>
                                                                    <li><Link href="#">Recliner Sets</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Occasional Chairs</h6>
                                                                <ul>
                                                                    <li><Link href="#">Accent Chairs</Link></li>
                                                                    <li><Link href="#">Folding Chairs</Link></li>
                                                                    <li><Link href="#">Cafe Chairs</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <div className="mega-group">
                                                                <h6>Benches & Stools</h6>
                                                                <ul>
                                                                    <li><Link href="#">Benches</Link></li>
                                                                    <li><Link href="#">Stools</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Bean Bags & Pouffes</h6>
                                                                <ul>
                                                                    <li><Link href="#">Pouffes</Link></li>
                                                                    <li><Link href="#">Bean Bags</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Tables</h6>
                                                                <ul>
                                                                    <li><Link href="#">Centre Tables</Link></li>
                                                                    <li><Link href="#">End Tables</Link></li>
                                                                    <li><Link href="#">Console Tables</Link></li>
                                                                    <li><Link href="#">Nesting Tables</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Column 4 */}
                                                        <div className="mega-column">
                                                            <div className="mega-group">
                                                                <h6>TV & Media Units</h6>
                                                                <ul>
                                                                    <li><Link href="#">TV Consoles</Link></li>
                                                                    <li><Link href="#">TV Units</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Shelves</h6>
                                                                <ul>
                                                                    <li><Link href="#">Wall Shelves</Link></li>
                                                                    <li><Link href="#">Corner Shelves</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Shoe Racks</h6>
                                                                <ul>
                                                                    <li><Link href="#">Shoe Cabinets</Link></li>
                                                                    <li><Link href="#">Open Shoe Racks</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Column 5 */}
                                                        <div className="mega-column">
                                                            <div className="mega-group">
                                                                <h6>Study & Work</h6>
                                                                <ul>
                                                                    <li><Link href="#">Study & Office Tables</Link></li>
                                                                    <li><Link href="#">Study & Office Chairs</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Book Cases & Cabinets</h6>
                                                                <ul>
                                                                    <li><Link href="#">Book Cabinets</Link></li>
                                                                    <li><Link href="#">Open Book Shelves</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Outdoor Furniture</h6>
                                                                <ul>
                                                                    <li><Link href="#">Outdoor Seating & Tables</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Column 6 */}
                                                        <div className="mega-column">
                                                            <div className="mega-group">
                                                                <h6>Customized Furniture</h6>
                                                                <ul>
                                                                    <li><Link href="#">1 Seater Sofas</Link></li>
                                                                    <li><Link href="#">2 Seater Sofas</Link></li>
                                                                    <li><Link href="#">3 Seater Sofas</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Ottomans</h6>
                                                            </div>

                                                            <div className="mega-group">
                                                                <h6>Tea Sets</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* ================= DINING ROOM ================= */}
                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Dining Room <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid dining-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Dining Sets</h6>
                                                            <ul>
                                                                <li><Link href="/categories/140">4 Seater Dining Sets</Link></li>
                                                                <li><Link href="/categories/141">6 Seater Dining Sets</Link></li>
                                                                <li><Link href="/categories/142">8 Seater Dining Sets</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Dining Tables</h6>
                                                            <ul>
                                                                <li><Link href="/categories/143">4 Seater Dining Tables</Link></li>
                                                                <li><Link href="/categories/144">6 Seater Dining Tables</Link></li>
                                                                <li><Link href="/categories/145">8 Seater Dining Tables</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Bar Furniture</h6>
                                                            <ul>
                                                                <li><Link href="/categories/146">Bar Cabinet-Curios</Link></li>
                                                                <li><Link href="/categories/147">Bar Stools & Chairs</Link></li>
                                                                <li><Link href="/categories/148">Serving Trolleys</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 4 */}
                                                        <div className="mega-column">
                                                            <h6>Dining Chairs</h6>
                                                            <h6 style={{ marginTop: "25px" }}>Dining Benches</h6>
                                                        </div>

                                                        {/* Column 5 */}
                                                        <div className="mega-column">
                                                            <h6>Crockery Units</h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* ================= DECOR ================= */}
                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Decor <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid decor-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Home Accessories</h6>
                                                            <ul>
                                                                <li><Link href="/categories/160">Figurines</Link></li>
                                                                <li><Link href="/categories/161">Vases</Link></li>
                                                                <li><Link href="#">Table Accents</Link></li>
                                                                <li><Link href="#">Candle Holders & Lanterns</Link></li>
                                                                <li><Link href="#">Potpourri Bowls & Platters</Link></li>
                                                                <li><Link href="/categories/162">Clocks</Link></li>
                                                                <li><Link href="#">Desk Accessories</Link></li>
                                                                <li><Link href="/categories/163">Gift Accessories</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Lighting</h6>
                                                            <ul>
                                                                <li><Link href="/categories/164">Table Lamps</Link></li>
                                                                <li><Link href="/categories/165">Wall Lamps</Link></li>
                                                                <li><Link href="#">Hanging Lamps</Link></li>
                                                                <li><Link href="/categories/166">Floor Lamps</Link></li>
                                                                <li><Link href="#">Decorative Lights</Link></li>
                                                                <li><Link href="/categories/167">String Lights</Link></li>
                                                                <li><Link href="#">Bulbs</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Wall Decor</h6>
                                                            <ul>
                                                                <li><Link href="/categories/168">Wall Accents</Link></li>
                                                                <li><Link href="/categories/169">Decorative Mirrors</Link></li>
                                                                <li><Link href="/categories/170">Photo Frames</Link></li>
                                                                <li><Link href="/categories/171">Posters & Paintings</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 4 */}
                                                        <div className="mega-column">
                                                            <h6>Home Fragrances</h6>
                                                            <ul>
                                                                <li><Link href="#">Candles</Link></li>
                                                                <li><Link href="#">Fragrances & Potpourris</Link></li>
                                                                <li><Link href="#">Diffusers</Link></li>
                                                                <li><Link href="#">Aroma Oils</Link></li>
                                                                <li><Link href="#">Room & Car Sprays</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 5 */}
                                                        <div className="mega-column">
                                                            <h6>Garden</h6>
                                                            <ul>
                                                                <li><Link href="/categories/172">Artificial Plants & Flowers</Link></li>
                                                                <li><Link href="/categories/173">Pots & Planters</Link></li>
                                                                <li><Link href="/categories/174">Fountains</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* ================= Kitchen ================= */}

                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Kitchen <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid kitchen-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Storage & Containers</h6>
                                                            <ul>
                                                                <li><Link href="#">Containers & Jars</Link></li>
                                                                <li><Link href="#">Bottles</Link></li>
                                                                <li><Link href="#">Flasks</Link></li>
                                                                <li><Link href="#">Lunch Boxes & Bags</Link></li>
                                                                <li><Link href="#">Kitchen Organisers</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Cookware</h6>
                                                            <ul>
                                                                <li><Link href="#">Cookware Sets</Link></li>
                                                                <li><Link href="#">Pots & Pans</Link></li>
                                                                <li><Link href="#">Kadhai & Woks</Link></li>
                                                                <li><Link href="#">Grill Pans & Griddles</Link></li>
                                                                <li><Link href="#">Pressure Cookers</Link></li>
                                                                <li><Link href="#">Tawas</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Kitchenware</h6>
                                                            <ul>
                                                                <li><Link href="#">Kitchen Trolleys</Link></li>
                                                                <li><Link href="#">Knives & Scissors</Link></li>
                                                                <li><Link href="#">Casseroles</Link></li>
                                                                <li><Link href="#">Oil & Vineger Servers</Link></li>
                                                                <li><Link href="#">Utensil Holders</Link></li>
                                                                <li><Link href="#">Chopping Boards</Link></li>
                                                                <li><Link href="#">Dish Racks</Link></li>
                                                                <li><Link href="#">Fruit Baskets</Link></li>
                                                                <li><Link href="#">Strainers & Colanders</Link></li>
                                                                <li><Link href="#">Tools & Gadgets</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 4 */}
                                                        <div className="mega-column">
                                                            <h6>Kitchen Linens</h6>
                                                            <ul>
                                                                <li><Link href="#">Aprons</Link></li>
                                                                <li><Link href="#">Pot Holders & Mittens</Link></li>
                                                                <li><Link href="#">Kitchen Towels</Link></li>
                                                            </ul>

                                                            <h6 style={{ marginTop: "30px" }}>Bakeware</h6>

                                                            <h6 style={{ marginTop: "30px" }}>Kitchen Appliances</h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* ================= Kitchen ================= */}

                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Tableware <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid tableware-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Serving</h6>
                                                            <ul>
                                                                <li><Link href="#">Trays & Platters</Link></li>
                                                                <li><Link href="#">Glasses & Jugs</Link></li>
                                                                <li><Link href="#">Bar Accessories</Link></li>
                                                                <li><Link href="#">Salt & Pepper Shakers</Link></li>
                                                                <li><Link href="#">Chip & Dip</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Crockery</h6>
                                                            <ul>
                                                                <li><Link href="#">Bowls</Link></li>
                                                                <li><Link href="#">Plates</Link></li>
                                                                <li><Link href="#">Mugs</Link></li>
                                                                <li><Link href="#">Cups & Saucers</Link></li>
                                                                <li><Link href="#">Pots & Kettles</Link></li>
                                                                <li><Link href="#">Dinner Sets</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Cutlery</h6>
                                                            <ul>
                                                                <li><Link href="#">Cutlery & Cutlery Sets</Link></li>
                                                                <li><Link href="#">Cutlery Holders</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 4 */}
                                                        <div className="mega-column">
                                                            <h6>Table Linens</h6>
                                                            <ul>
                                                                <li><Link href="#">Placemats</Link></li>
                                                                <li><Link href="#">Table Runners</Link></li>
                                                                <li><Link href="#">Table Cloths</Link></li>
                                                                <li><Link href="#">Trivets & Coasters</Link></li>
                                                                <li><Link href="#">Tissue Holders</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Bath & Laundry */}
                                        <li className="menu-item mega-parent">
                                            <Link href="#" className="item-link">
                                                Bath & Laundry <i className="icon icon-down" />
                                            </Link>

                                            <div className="sub-menu mega-menu">
                                                <div className="container">
                                                    <div className="mega-grid bath-grid">

                                                        {/* Column 1 */}
                                                        <div className="mega-column">
                                                            <h6>Bath Linen</h6>
                                                            <ul>
                                                                <li><Link href="#">Towels</Link></li>
                                                                <li><Link href="#">Robes</Link></li>
                                                                <li><Link href="#">Bathmats</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 2 */}
                                                        <div className="mega-column">
                                                            <h6>Bath Accessories</h6>
                                                            <ul>
                                                                <li><Link href="#">Holders & Tumblers</Link></li>
                                                                <li><Link href="#">Soap Dispensers</Link></li>
                                                                <li><Link href="#">Soap Dishes</Link></li>
                                                                <li><Link href="#">Bath Sets</Link></li>
                                                                <li><Link href="#">Storage & Mirrors</Link></li>
                                                                <li><Link href="#">Towel Holders</Link></li>
                                                                <li><Link href="#">Toilet Accessories</Link></li>
                                                                <li><Link href="#">Shower Curtains</Link></li>
                                                                <li><Link href="#">Bath Stools</Link></li>
                                                            </ul>
                                                        </div>

                                                        {/* Column 3 */}
                                                        <div className="mega-column">
                                                            <h6>Laundry</h6>
                                                            <ul>
                                                                <li><Link href="#">Laundry Storage & Baskets</Link></li>
                                                                <li><Link href="#">Cleaning Accessories</Link></li>
                                                                <li><Link href="#">Cloth Dryers</Link></li>
                                                                <li><Link href="#">Hangers & Hooks</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
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

                            <div className="col-xl-2 col-md-4 col-2">
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
                                        <>
                                            <li className="nav-account">
                                                <Link href="/auth/login" className="nav-icon-item">
                                                    <span className="icon icon-user" />
                                                </Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className="nav-account">
                                                <Link href="/my-account" className="nav-icon-item">
                                                    <span className="icon icon-user" />
                                                </Link>
                                            </li>
                                        </>
                                    }

                                    <li className="nav-wishlist">
                                        <Link href="/wishlist" className="nav-icon-item">
                                            <span className="icon icon-heart" />
                                        </Link>
                                    </li>
                                    {/* <li className="nav-cart">
                                        <Link
                                            href="/cart"
                                            className="nav-icon-item"
                                        >
                                            <span className="icon icon-cart" />
                                            <span className="count-box text-button-small">2</span>
                                        </Link>
                                    </li> */}

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