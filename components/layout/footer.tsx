"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
    const [masterData, setMasterData] = useState<any>(null);
    useEffect(() => {
        const fetchMasterData = async () => {
            try {
                const res = await axios.get(
                    "https://helioshome-backend.vercel.app/api/v1/master"
                );

                if (res.data.success) {
                    setMasterData(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching master data:", error);
            }
        };

        fetchMasterData();
    }, []);

    return (
        <>
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
                                <li>
                                    <Link
                                        href="/about-us"
                                        className="link footer-menu_item"
                                    >
                                        About Us
                                    </Link>
                                </li>

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
                                    <Link
                                        href="/shipping-policy"
                                        className="link footer-menu_item"
                                    >
                                        Shipping Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/refund-policy"
                                        className="link footer-menu_item"
                                    >
                                        Return &amp; Refund Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="link footer-menu_item"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/terms-conditions"
                                        className="link footer-menu_item"
                                    >
                                        Terms and Conditions
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
                                <li>
                                    <Link
                                        href="/contact-us"
                                        className="link footer-menu_item"
                                    >
                                        Contact us
                                    </Link>
                                </li>

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
                            <p>{masterData?.primaryPhone}</p>
                        </div>
                        <div>
                            <strong>Write to us</strong>
                            <p>{masterData?.primaryEmail}</p>
                        </div>
                        <div className="social-icons">
                            <ul className="tf-social-icon type-2">

                                <li>
                                    <a href="#" className="social-facebook">
                                        <i className="icon icon-facebook"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-twiter">
                                        <i className="icon icon-x"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-instagram">
                                        <i className="icon icon-instagram"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-amazon">
                                        <i className="icon icon-telegram"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </footer>
            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 991px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 30px;
                    }
                }

                @media (max-width: 767px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 25px;
                    }

                    .footer-contact {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                    }
                }
            `}</style>
        </>
    );
};

export default Footer;

// "use client";
// import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const Footer = () => {
//     const [masterData, setMasterData] = useState<any>(null);
//     useEffect(() => {
//         const fetchMasterData = async () => {
//             try {
//                 const res = await axios.get(
//                     "https://helioshome-backend.vercel.app/api/v1/master"
//                 );

//                 if (res.data.success) {
//                     setMasterData(res.data.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching master data:", error);
//             }
//         };

//         fetchMasterData();
//     }, []);
//     return (
//         <footer className="mega-footer">
//             <div className="container">
//                 <div className="footer-grid second-row">
//                     <div>
//                         <h4>Explore</h4>
//                         <ul>
//                             <li><Link href="#">Catalogues</Link></li>
//                             <li><Link href="#">Store Locator</Link></li>
//                             <li><Link href="#">Find Us Near By</Link></li>
//                             <li><Link href="#">Our Stories</Link></li>
//                             <li><Link href="#">Size Guide</Link></li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h4>About</h4>
//                         <ul>
//                             <li><Link
//                                 href="/about-us"
//                                 className="link footer-menu_item"
//                             >
//                                 About Us
//                             </Link></li>
//                             <li><Link href="#">Feedback</Link></li>
//                             <li><Link href="#">Careers</Link></li>
//                             <li><Link href="#">Blog</Link></li>
//                             <li><Link href="#">Landmark Cares</Link></li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h4>Information</h4>
//                         <ul>
//                             <li>
//                                 <Link href="/shipping-policy" className="link footer-menu_item">
//                                     Shipping Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/refund-policy" className="link footer-menu_item">
//                                     Return &amp; Refund Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/privacy-policy" className="link footer-menu_item">
//                                     Privacy Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/terms-conditions"
//                                     className="link footer-menu_item"
//                                 >
//                                     Terms and Conditions
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/contact-information"
//                                     className="link footer-menu_item"
//                                 >
//                                     Contact information
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h4>Help</h4>
//                         <ul>
//                             <li><Link
//                                 href="/contact-us"
//                                 className="link footer-menu_item"
//                             >
//                                 Contact us
//                             </Link></li>
//                             <li><Link href="#">Shipping</Link></li>
//                             <li><Link href="#">Returns Process</Link></li>
//                             <li><Link href="#">Returns Policy</Link></li>
//                             <li><Link href="#">FAQs</Link></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="footer-contact">
//                     <div>
//                         <strong>Talk to us</strong>
//                         <p>{masterData?.primaryPhone}</p>
//                     </div>

//                     <div>
//                         <strong>Write to us</strong>
//                         <p>{masterData?.primaryEmail}</p>
//                     </div>

//                     <div className="social-icons">
//                         <ul className="tf-social-icon type-2">
//                             <li><a href="#" className="social-facebook"><i className="icon icon-facebook"></i></a></li>
//                             <li><a href="#" className="social-twiter"><i className="icon icon-x"></i></a></li>
//                             <li><a href="#" className="social-instagram"><i className="icon icon-instagram"></i></a></li>
//                             <li><a href="#" className="social-amazon"><i className="icon icon-telegram"></i></a> </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;