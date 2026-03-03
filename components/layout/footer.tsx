import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-body">
                                <div className="footer-left">
                                    <div className="footer-infor flex-grow-1">
                                        <div className="footer-menu">
                                            <div className="footer-col-block">
                                                <h5 className="footer-heading text_white footer-heading-mobile">
                                                    Infomation
                                                </h5>
                                                <div className="tf-collapse-content">
                                                    <ul className="footer-menu-list">
                                                        <li className="text-body-default">
                                                            <Link
                                                                href="/about-us"
                                                                className="link footer-menu_item"
                                                            >
                                                                About Us
                                                            </Link>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <a
                                                                href="#"
                                                                className="link footer-menu_item"
                                                            >
                                                                Our Stories
                                                            </a>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <a href="#" className="link footer-menu_item">
                                                                Size Guide
                                                            </a>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <Link
                                                                href="/contact-us"
                                                                className="link footer-menu_item"
                                                            >
                                                                Contact us
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="footer-col-block">
                                                <h5 className="footer-heading text_white footer-heading-mobile">
                                                    Customer Services
                                                </h5>
                                                <div className="tf-collapse-content">
                                                    <ul className="footer-menu-list">
                                                        <li className="text-body-default">
                                                            <Link href="/shipping-policy" className="link footer-menu_item">
                                                                Shipping Policy
                                                            </Link>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <Link href="/refund-policy" className="link footer-menu_item">
                                                                Return &amp; Refund Policy
                                                            </Link>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <Link href="/privacy-policy" className="link footer-menu_item">
                                                                Privacy Policy
                                                            </Link>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <Link
                                                                href="/terms-of-service"
                                                                className="link footer-menu_item"
                                                            >
                                                                Terms of service
                                                            </Link>
                                                        </li>
                                                        <li className="text-body-default">
                                                            <Link
                                                                href="/contact-information"
                                                                className="link footer-menu_item"
                                                            >
                                                                Contact information
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-phone-number">
                                            <h4 className="text_white number">Plot no. 37, Sector 155, Noida-201301</h4>
                                            <h4 className="text_white number">+91-7870561523</h4>
                                            <h4 className="text_white mail">info@helioshome.co.in</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-col-block footer-newsletter">
                                    <h3 className="footer-heading footer-heading-mobile text_white">
                                        Stay in the loop with Weekly newsletters
                                    </h3>
                                    <div className="tf-collapse-content">
                                        <form
                                            id="subscribe-form"
                                            action="#"
                                            className="form-newsletter subscribe-form"
                                            method="post"
                                            acceptCharset="utf-8"
                                            data-mailchimp="true"
                                        >
                                            <div id="subscribe-content" className="subscribe-content">
                                                <fieldset className="email">
                                                    <input
                                                        id="subscribe-email"
                                                        type="email"
                                                        name="email-form"
                                                        className="subscribe-email"
                                                        placeholder="Enter your e-mail"
                                                        tabIndex={0}
                                                        aria-required="true"
                                                    />
                                                </fieldset>
                                                <div className="button-submit">
                                                    <button
                                                        id="subscribe-button"
                                                        className="subscribe-button text-body-default "
                                                        type="button"
                                                    >
                                                        Subscribe
                                                        <i className="icon-arrow-up-right" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div id="subscribe-msg" className="subscribe-msg" />
                                        </form>
                                        <ul className="tf-social-icon type-2">
                                            <li>
                                                <a href="#" className="social-facebook">
                                                    <i className="icon icon-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social-twiter">
                                                    <i className="icon icon-x" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social-instagram">
                                                    <i className="icon icon-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social-amazon">
                                                    <i className="icon icon-telegram" />
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-wrap">
                                    <div className="left">
                                        <p className="text-body-default text_white">
                                            Copyright ©2026 Helios Home. All Rights Reserved.
                                        </p>
                                    </div>
                                    {/* <div className="center">
                                        <div className="tf-currencies">
                                            <select className="image-select center style-default style-box  type-currencies">
                                                <option
                                                    data-thumbnail="images/country/us.svg"
                                                >
                                                    English (USD)
                                                </option>
                                                <option data-thumbnail="images/country/vn.svg">
                                                    Vietnam (VND)
                                                </option>
                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="tf-payment">
                                        <ul>
                                            <li>
                                                <img src="images/payment/payment-1.png" alt="" />
                                            </li>
                                            <li>
                                                <img src="images/payment/payment-2.png" alt="" />
                                            </li>
                                            <li>
                                                <img src="images/payment/payment-3.png" alt="" />
                                            </li>
                                            <li>
                                                <img src="images/payment/payment-4.png" alt="" />
                                            </li>
                                            <li>
                                                <img src="images/payment/payment-5.png" alt="" />
                                            </li>
                                            <li>
                                                <img src="images/payment/payment-6.png" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer