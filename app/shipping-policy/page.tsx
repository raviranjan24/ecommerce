import React from "react";

const ShippingDeliveryPolicy = () => {
  return (
    <div className="bg-light py-5">

      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">

          <h1 className="fw-bold text-primary">
            Shipping & Delivery Policy
          </h1>

          <p className="text-muted fs-5">
            Fast, secure, and reliable delivery experience with Helios Home.
          </p>

        </div>

        {/* Main Card */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

          {/* Banner */}
          <div
            className="text-white p-5"
            style={{
              background: "linear-gradient(135deg, #0d6efd, #198754)",
            }}
          >
            <h2 className="fw-bold mb-3">
              Reliable Shipping & Safe Delivery
            </h2>

            <p className="mb-0 fs-5">
              We ensure your furniture reaches you safely and on time.
            </p>
          </div>

          {/* Content */}
          <div className="card-body p-4 p-lg-5">

            {/* Shipping Coverage */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  🚚
                </div>

                <h3 className="fw-bold mb-0">
                  Shipping Coverage
                </h3>

              </div>

              <div className="ps-lg-5">

                <div className="alert alert-primary rounded-4 mb-0">
                  We deliver across India and selected international
                  locations (if applicable).
                </div>

              </div>

            </div>

            {/* Delivery Timeline */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  ⏱
                </div>

                <h3 className="fw-bold mb-0">
                  Delivery Timeline
                </h3>

              </div>

              <div className="ps-lg-5">

                <div className="row g-4">

                  <div className="col-md-6">
                    <div className="border rounded-4 p-4 h-100 bg-light">

                      <h5 className="fw-bold text-primary">
                        Standard Products
                      </h5>

                      <p className="text-secondary mb-0">
                        Estimated delivery within 5–10 business days.
                      </p>

                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-4 p-4 h-100 bg-light">

                      <h5 className="fw-bold text-success">
                        Customized Furniture
                      </h5>

                      <p className="text-secondary mb-0">
                        Estimated delivery within 2–4 weeks.
                      </p>

                    </div>
                  </div>

                </div>

                <div className="alert alert-warning rounded-4 mt-4 mb-0">
                  <strong>Note:</strong> Delivery timelines may vary
                  depending on location and order size.
                </div>

              </div>

            </div>

            {/* Shipping Charges */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  ₹
                </div>

                <h3 className="fw-bold mb-0">
                  Shipping Charges
                </h3>

              </div>

              <div className="ps-lg-5">

                <ul className="text-secondary lh-lg">
                  <li>
                    Free shipping may be available on selected products/orders.
                  </li>

                  <li>
                    Shipping charges are calculated based on:
                    <ul className="mt-2">
                      <li>Location</li>
                      <li>Product weight</li>
                      <li>Order value</li>
                    </ul>
                  </li>
                </ul>

              </div>

            </div>

            {/* Delivery Conditions */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  📦
                </div>

                <h3 className="fw-bold mb-0">
                  Delivery Conditions
                </h3>

              </div>

              <div className="ps-lg-5">

                <ul className="text-secondary lh-lg">
                  <li>
                    Delivery will be made to the ground floor unless specified otherwise.
                  </li>

                  <li>
                    Additional charges may apply for:
                    <ul className="mt-2">
                      <li>Staircase delivery</li>
                      <li>Special handling</li>
                    </ul>
                  </li>
                </ul>

              </div>

            </div>

            {/* Inspection */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  🔍
                </div>

                <h3 className="fw-bold mb-0">
                  Inspection at Delivery
                </h3>

              </div>

              <div className="ps-lg-5">

                <div className="alert alert-warning rounded-4 mb-0">

                  Customers are requested to inspect the product
                  at the time of delivery. Any damage or issue
                  must be reported immediately.

                </div>

              </div>

            </div>

            {/* Delays */}
            <div className="mb-5">

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  ⚠
                </div>

                <h3 className="fw-bold mb-0">
                  Delivery Delays
                </h3>

              </div>

              <div className="ps-lg-5">

                <p className="text-secondary">
                  We are not liable for delays caused by:
                </p>

                <ul className="text-secondary lh-lg">
                  <li>Natural disasters</li>
                  <li>Transport strikes</li>
                  <li>Government restrictions</li>
                </ul>

              </div>

            </div>

            {/* Failed Delivery */}
            <div>

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "24px",
                  }}
                >
                  ❌
                </div>

                <h3 className="fw-bold mb-0">
                  Failed Delivery
                </h3>

              </div>

              <div className="ps-lg-5">

                <div className="alert alert-danger rounded-4 mb-0">

                  If delivery fails due to customer unavailability,
                  re-delivery charges may apply.

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ShippingDeliveryPolicy;