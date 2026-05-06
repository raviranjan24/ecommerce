import React from "react";

const ReturnRefundPolicy = () => {
  return (
    <div className="bg-light py-5">

      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">
            Return & Refund Policy
          </h1>

          <p className="text-muted fs-5">
            We value customer satisfaction and ensure a smooth
            return and refund experience.
          </p>
        </div>

        {/* Main Card */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

          {/* Top Banner */}
          <div
            className="text-white p-5"
            style={{
              background: "linear-gradient(135deg, #0d6efd, #0b5ed7)",
            }}
          >
            <h2 className="fw-bold mb-3">
              Hassle-Free Returns & Replacements
            </h2>

            <p className="mb-0 fs-5">
              Please review our policy carefully before requesting
              a return, replacement, or refund.
            </p>
          </div>

          {/* Body */}
          <div className="card-body p-4 p-lg-5">

            {/* Eligibility */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "22px",
                  }}
                >
                  1
                </div>

                <h3 className="fw-bold mb-0">
                  Eligibility for Returns
                </h3>
              </div>

              <div className="ps-lg-5">
                <p className="text-secondary">
                  Returns are accepted only for:
                </p>

                <ul className="text-secondary lh-lg">
                  <li>Damaged products</li>
                  <li>Manufacturing defects</li>
                  <li>Incorrect items delivered</li>
                </ul>

                <div className="alert alert-warning rounded-3 mt-3">
                  <strong>Important:</strong> Return requests must be
                  raised within 48 hours of delivery.
                </div>
              </div>

            </div>

            {/* Non Returnable */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "22px",
                  }}
                >
                  2
                </div>

                <h3 className="fw-bold mb-0">
                  Non-Returnable Items
                </h3>
              </div>

              <div className="ps-lg-5">

                <ul className="text-secondary lh-lg">
                  <li>Customized or made-to-order furniture</li>
                  <li>Installed or used products</li>
                  <li>Clearance or discounted items (if specified)</li>
                </ul>

              </div>

            </div>

            {/* Return Process */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "22px",
                  }}
                >
                  3
                </div>

                <h3 className="fw-bold mb-0">
                  Return Process
                </h3>
              </div>

              <div className="ps-lg-5">

                <div className="row g-4">

                  <div className="col-md-6">
                    <div className="border rounded-4 p-4 h-100 bg-light">
                      <h5 className="fw-bold">
                        Step 1
                      </h5>

                      <p className="text-secondary mb-0">
                        Raise a request through email or support portal.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-4 p-4 h-100 bg-light">
                      <h5 className="fw-bold">
                        Step 2
                      </h5>

                      <p className="text-secondary mb-0">
                        Share product images/videos as proof.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-4 p-4 h-100 bg-light">
                      <h5 className="fw-bold">
                        Step 3
                      </h5>

                      <p className="text-secondary mb-0">
                        Our team will review and approve the request.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-4 p-4 h-100 bg-light">
                      <h5 className="fw-bold">
                        Step 4
                      </h5>

                      <p className="text-secondary mb-0">
                        Reverse pickup will be arranged if applicable.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Refund Policy */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "22px",
                  }}
                >
                  4
                </div>

                <h3 className="fw-bold mb-0">
                  Refund Policy
                </h3>
              </div>

              <div className="ps-lg-5">

                <ul className="text-secondary lh-lg">
                  <li>
                    Refunds are processed within 7–10 working days after approval.
                  </li>

                  <li>
                    Refunds will be credited through the original payment method.
                  </li>

                  <li>
                    Shipping and handling charges may be non-refundable.
                  </li>
                </ul>

              </div>

            </div>

            {/* Replacement */}
            <div>

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "22px",
                  }}
                >
                  5
                </div>

                <h3 className="fw-bold mb-0">
                  Replacement Policy
                </h3>
              </div>

              <div className="ps-lg-5">

                <div className="alert alert-primary rounded-4 mb-0">
                  <strong>Preferred Solution:</strong> Replacement will
                  be provided for eligible cases instead of refund wherever possible.
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReturnRefundPolicy;