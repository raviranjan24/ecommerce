import Link from 'next/link'

const ContactUs = () => {
    return (
        <>
            <div className="page-title relative">
                <div
                    className="paralaximg"
                    data-parallax="scroll"
                    data-image-src="/images/page-title/page-title-9.jpg"
                    style={{
                        backgroundImage: "url(/images/page-title/page-title-9.jpg)"
                    }}
                ></div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="title">Contact Us</h3>
                                <ul className="breadcrumb">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <section className="flat-spacing">
                    <div className="container">
                        <div className="contact-us-content">
                            <div className="row">
                                <div className="col-lg-4 mb-lg-30">
                                    <h4 className="mb_30 wow fadeInUp">New Delhi</h4>
                                    <div className="mb_28">
                                        <h6 className="mb_8">Phone:</h6>
                                        <p className="text-body-default">+91-7870561523</p>
                                    </div>
                                    <div className="mb_28">
                                        <h6 className="mb_8">Email:</h6>
                                        <p className="text-body-default">info@helioshome.co.in</p>
                                    </div>
                                    <div className="mb_28">
                                        <h6 className="mb_8">Address:</h6>
                                        <p className="text-body-default">
                                            Plot no. 37, Sector 155, Noida-201301
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="mb_8">Open Time:</h6>
                                        <p className="text-body-default mb_4 open-time">
                                            <span>Mon - Sat:</span>
                                            7:30am - 8:00pm PST
                                        </p>
                                        <p className="text-body-default open-time">
                                            <span>Sunday:</span>
                                            9:00am - 5:00pm PST
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-7 offset-lg-1">
                                    <h4 className="mb_7 wow fadeInUp">Get In Touch</h4>
                                    <p
                                        className="text_secondary mb_24 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        Use the form below to get in touch with the sales team
                                    </p>
                                    <form
                                        id="contactform"
                                        action="#"
                                        method="post"
                                        className="form-leave-comment"
                                    >
                                        <div className="wrap">
                                            <div className="cols">
                                                <fieldset className="">
                                                    <input
                                                        className=""
                                                        type="text"
                                                        placeholder="Your Name*"
                                                        name="name"
                                                        id="name"
                                                        tabIndex={2}
                                                        defaultValue=""
                                                        aria-required="true"
                                                    //required=""
                                                    />
                                                </fieldset>
                                                <fieldset className="">
                                                    <input
                                                        className=""
                                                        type="email"
                                                        placeholder="Your Email*"
                                                        name="email"
                                                        id="email"
                                                        tabIndex={2}
                                                        defaultValue=""
                                                        aria-required="true"
                                                    //required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="cols">
                                                <fieldset className="">
                                                    <input
                                                        className=""
                                                        type="number"
                                                        placeholder="Phone*"
                                                        name="phone"
                                                        id="phone"
                                                        tabIndex={2}
                                                        defaultValue=""
                                                        aria-required="true"
                                                    //required=""
                                                    />
                                                </fieldset>
                                                <fieldset className="">
                                                    <input
                                                        className=""
                                                        type="number"
                                                        placeholder="Order Numbers*"
                                                        name="order-numbers"
                                                        id="order-numbers"
                                                        tabIndex={2}
                                                        defaultValue=""
                                                        aria-required="true"
                                                    //required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <fieldset className="">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    rows={4}
                                                    placeholder="Your Message*"
                                                    tabIndex={2}
                                                    aria-required="true"
                                                    //required=""
                                                    defaultValue={""}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="button-submit send-wrap">
                                            <button className="tf-btn btn-onsurface" type="submit">
                                                Send Message <i className="icon-arrow-up-right" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactUs