import Link from 'next/link'

const ShippingPolicy = () => {
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
                <h3 className="title">Shipping Policy</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Shipping Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flat-spacing">
        <div className="container-fluid">
          <h2>Shipping Policy</h2>
        </div>
      </section>
    </>
  )
}

export default ShippingPolicy