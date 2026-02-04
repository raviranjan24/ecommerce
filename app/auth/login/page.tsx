import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="page-title relative">
        <div
          className="paralaximg"
          data-parallax="scroll"
          data-image-src="/images/page-title/page-title-5.jpg"
          style={{
            backgroundImage: "url(/images/page-title/page-title-5.jpg)"
          }}
        ></div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="title">Login</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Homepage</Link>
                  </li>
                  <li>Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-title */}
      <section className="flat-spacing">
        <div className="container">
          <div className="login-wrap">
            <div className="left">
              <div className="heading">
                <h4>Login</h4>
              </div>
              <form action="#" className="form-login form-has-password">
                <div className="wrap">
                  <fieldset className="">
                    <input
                      className=""
                      type="email"
                      placeholder="Username or email address*"
                      name="email"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                    />
                  </fieldset>
                  <fieldset className="position-relative password-item">
                    <input
                      className="input-password"
                      type="password"
                      placeholder="Password*"
                      name="password"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                    />
                    <span className="toggle-password unshow">
                      <i className="icon-eye-hide" />
                    </span>
                  </fieldset>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input
                          className=""
                          type="checkbox"
                          id="login-form_agree"
                          name="agree_checkbox"
                        />
                        <div>
                          <i className="icon-check" />
                        </div>
                      </div>
                      <label htmlFor="login-form_agree">Remember me</label>
                    </div>
                    <a href="#" className=" text-button forget-password link">
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
                <div className="button-submit">
                  <button className="tf-btn btn-onsurface" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="right">
              <h4 className="mb_8">New Customer</h4>
              <p className="text-secondary text-body-default">
                Be part of our growing family of new customers! Join us today and
                unlock a world of exclusive benefits, offers, and personalized
                experiences.
              </p>
              <Link href="/auth/register" className="tf-btn btn-onsurface">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
