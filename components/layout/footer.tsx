import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mega-footer">
            <div className="container">
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