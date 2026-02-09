import Link from 'next/link'

const AboutUs = () => {
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
                                <h3 className="title">About us</h3>
                                <ul className="breadcrumb">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>About us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="flat-spacing">
                <div className="container-fluid">
                    <h2>About us</h2>
                </div>
            </section>
        </>
    )
}

export default AboutUs