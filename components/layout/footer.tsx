import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mega-footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h4>Living room</h4>
                        <ul>
                            <li><Link href="#">Living Room Furniture</Link></li>
                            <li><Link href="#">Bedroom Furniture</Link></li>
                            <li><Link href="#">Dining Room Furniture</Link></li>
                            <li><Link href="#">Accent Chairs</Link></li>
                            <li><Link href="#">Recliners</Link></li>
                            <li><Link href="#">Customized Furniture</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Kitchen</h4>
                        <ul>
                            <li><Link href="#">Cookware</Link></li>
                            <li><Link href="#">Storage & Containers</Link></li>
                            <li><Link href="#">Kitchenware</Link></li>
                            <li><Link href="#">Kitchen Linens</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Tableware</h4>
                        <ul>
                            <li><Link href="#">Serveware</Link></li>
                            <li><Link href="#">Crockery</Link></li>
                            <li><Link href="#">Dinner Sets</Link></li>
                            <li><Link href="#">Table Linen</Link></li>
                            <li><Link href="#">Cutlery</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Decor</h4>
                        <ul>
                            <li><Link href="#">Home Accessories</Link></li>
                            <li><Link href="#">Lighting</Link></li>
                            <li><Link href="#">Wall Décor</Link></li>
                            <li><Link href="#">Fragrances</Link></li>
                            <li><Link href="#">Garden</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Furnishing</h4>
                        <ul>
                            <li><Link href="#">Bedding</Link></li>
                            <li><Link href="#">Curtains</Link></li>
                            <li><Link href="#">Cushions</Link></li>
                            <li><Link href="#">Floor Coverings</Link></li>
                            <li><Link href="#">Accessories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Bath & Laundry</h4>
                        <ul>
                            <li><Link href="#">Bath Linen</Link></li>
                            <li><Link href="#">Bath Accessories</Link></li>
                            <li><Link href="#">Laundry</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-grid second-row">
                    <div>
                        <h4>Explore</h4>
                        <ul>
                            <li><Link href="#">Catalogues</Link></li>
                            <li><Link href="#">Store Locator</Link></li>
                            <li><Link href="#">Find Us Near By</Link></li>
                            <li><Link href="#">Our Stories</Link></li>
                            <li><Link href="#">Size Guide</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>About</h4>
                        <ul>
                            <li><Link
                                href="/about-us"
                                className="link footer-menu_item"
                            >
                                About Us
                            </Link></li>
                            <li><Link href="#">Feedback</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Landmark Cares</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <Link href="/shipping-policy" className="link footer-menu_item">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="link footer-menu_item">
                                    Return &amp; Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="link footer-menu_item">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className="link footer-menu_item"
                                >
                                    Terms of service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact-information"
                                    className="link footer-menu_item"
                                >
                                    Contact information
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Help</h4>
                        <ul>
                            <li><Link
                                href="/contact-us"
                                className="link footer-menu_item"
                            >
                                Contact us
                            </Link></li>
                            <li><Link href="#">Shipping</Link></li>
                            <li><Link href="#">Returns Process</Link></li>
                            <li><Link href="#">Returns Policy</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-contact">
                    <div>
                        <strong>Talk to us</strong>
                        <p>+91-7870561523</p>
                    </div>

                    <div>
                        <strong>Address</strong>
                        <p>Plot no. 37, Sector 155, Noida-201301</p>
                    </div>

                    <div>
                        <strong>Write to us</strong>
                        <p>info@helioshome.co.in</p>
                    </div>

                    <div className="social-icons">
                        <ul className="tf-social-icon type-2">
                            <li><a href="#" className="social-facebook"><i className="icon icon-facebook"></i></a></li>
                            <li><a href="#" className="social-twiter"><i className="icon icon-x"></i></a></li>
                            <li><a href="#" className="social-instagram"><i className="icon icon-instagram"></i></a></li>
                            <li><a href="#" className="social-amazon"><i className="icon icon-telegram"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;