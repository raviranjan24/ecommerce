import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";

export default function Register() {
    return (
        <>
            <Breadcrum title={"Register"}/>
            <section className="flat-spacing">
                <div className="container">
                    <div className="login-wrap">
                        <div className="left">
                            <div className="heading">
                                <h4>Register</h4>
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
                                    <fieldset className="position-relative password-item">
                                        <input
                                            className="input-password"
                                            type="password"
                                            placeholder="Confirm Password*"
                                            name="password"
                                            tabIndex={2}
                                            defaultValue=""
                                            aria-required="true"
                                        />
                                        <span className="toggle-password unshow">
                                            <i className="icon-eye-hide" />
                                        </span>
                                    </fieldset>
                                    <div className="d-flex align-items-center">
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
                                            <label
                                                className="text-secondary-2"
                                                htmlFor="login-form_agree"
                                            >
                                                I agree to the &nbsp;
                                            </label>
                                        </div>
                                        <a href="term-of-use.html" title="Terms of Service">
                                            Terms of User
                                        </a>
                                    </div>
                                </div>
                                <div className="button-submit">
                                    <button className="tf-btn btn-onsurface" type="submit">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="right">
                            <h4 className="mb_8">Already have an account?</h4>
                            <p className="text-secondary text-body-default">
                                Welcome back. Sign in to access your personalized experience, saved
                                preferences, and more. We're thrilled to have you with us again!
                            </p>
                            <Link href="/auth/login" className="tf-btn btn-onsurface">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
