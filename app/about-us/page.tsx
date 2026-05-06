import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-light">
      <section className="py-5 text-white position-relative"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #0b5ed7)",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                About Helios Home
              </h1>

              <p className="lead mb-4">
                Premium Upholstered Furniture Manufacturing & Export House
                based in Noida, India.
              </p>

              <button className="btn btn-light btn-lg px-4 rounded-pill fw-semibold">
                Explore Collection
              </button>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                alt="Furniture"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  maxHeight: "450px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">

              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-5">

                  <h2 className="fw-bold text-dark mb-4">
                    Who We Are
                  </h2>

                  <p className="text-secondary lh-lg">
                    Helios Home is a leading upholstered furniture
                    manufacturing and export house based in Noida, India.
                    We specialize in crafting a wide range of premium
                    upholstered furniture tailored to meet diverse global demands.
                  </p>

                  <p className="text-secondary lh-lg">
                    The company was founded with a clear vision:
                    to build an ecosystem rooted in the pillars of
                    <span className="fw-bold text-dark">
                      {" "}hard work, responsibility, and sustainability.
                    </span>
                  </p>

                  <p className="text-secondary lh-lg">
                    This philosophy drives every aspect of our operations —
                    from design and production to client relationships and
                    global outreach.
                  </p>

                  <p className="text-secondary lh-lg">
                    Our strength lies in the creative use of textured fabrics,
                    high-quality leathers, faux leathers, and their seamless
                    coordination with metal and wood elements customized to
                    meet individual client specifications.
                  </p>

                  <p className="text-secondary lh-lg">
                    We bring expertise in a variety of material finishes,
                    ensuring every product reflects premium craftsmanship
                    and elegant design standards.
                  </p>

                </div>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 mb-4">
                <div className="card-body p-4 text-center">

                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "30px",
                    }}
                  >
                    🎯
                  </div>

                  <h4 className="fw-bold mb-3">
                    Our Mission
                  </h4>

                  <p className="text-secondary mb-0">
                    Deliver premium furniture with unmatched quality,
                    craftsmanship, and customer satisfaction.
                  </p>

                </div>
              </div>

              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4 text-center">
                  <div
                    className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "30px",
                    }}
                  >
                    🌍
                  </div>

                  <h4 className="fw-bold mb-3">
                    Our Vision
                  </h4>

                  <p className="text-secondary mb-0">
                    Build sustainable global partnerships through
                    innovation, responsibility, and excellence.
                  </p>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">

          <div className="card border-0 shadow rounded-4 overflow-hidden">
            <div className="row g-0 align-items-center">

              <div className="col-lg-5">
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                  alt="Furniture Design"
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    minHeight: "350px",
                  }}
                />
              </div>

              <div className="col-lg-7">
                <div className="p-5">

                  <h2 className="fw-bold mb-4">
                    Why Choose Helios Home?
                  </h2>

                  <div className="row g-4">

                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3 fs-3 text-primary">
                          ✔
                        </div>

                        <div>
                          <h5 className="fw-bold">
                            Premium Quality
                          </h5>

                          <p className="text-secondary mb-0">
                            High-end materials and expert craftsmanship.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3 fs-3 text-primary">
                          ✔
                        </div>

                        <div>
                          <h5 className="fw-bold">
                            Global Standards
                          </h5>

                          <p className="text-secondary mb-0">
                            Products tailored for international markets.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3 fs-3 text-primary">
                          ✔
                        </div>

                        <div>
                          <h5 className="fw-bold">
                            Sustainable Approach
                          </h5>

                          <p className="text-secondary mb-0">
                            Responsible manufacturing practices.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3 fs-3 text-primary">
                          ✔
                        </div>

                        <div>
                          <h5 className="fw-bold">
                            Timely Delivery
                          </h5>

                          <p className="text-secondary mb-0">
                            Right product delivered at the right time.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;