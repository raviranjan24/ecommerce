import Link from 'next/link'

const PrivacyPolicy = () => {
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
                <h3 className="title">Privacy Policy</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flat-spacing">
        <div className="container-fluid">
          <h2>Privacy Policy</h2>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy