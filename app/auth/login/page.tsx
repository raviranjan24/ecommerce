"use client";
import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

export default function Login() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const token = getLocalStorage("token");
    if (token) {
      router.push("/my-account");
    }
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/login`,
          {
            email: values.email,
            password: values.password,
          }
        );

        if (res.data.success) {
          toast.success(res.data.message || "Login successful");
          if (typeof window !== "undefined") {
            localStorage.setItem(
              "user",
              JSON.stringify(res.data.data.user)
            );
            localStorage.setItem(
              "token",
              JSON.stringify(res.data.data.token)
            );
          }

          setTimeout(() => {
            router.push("/my-account");
          }, 1000);
        } else {
          toast.error(res.data.message || "Invalid credentials");
        }
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "Server error"
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (!isClient) return null;
  return (
    <>
      <Breadcrum title={"Login"} />
      <section className="flat-spacing">
        <div className="container">
          <div className="login-wrap">
            <div className="left">
              <div className="heading">
                <h4>Login</h4>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="form-login form-has-password"
              >
                <div className="wrap">
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or email address*"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="error">{formik.errors.email}</p>
                  )}

                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="error">{formik.errors.password}</p>
                  )}

                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <input
                        type="checkbox"
                        name="remember"
                        checked={formik.values.remember}
                        onChange={formik.handleChange}
                        style={{height:"15px"}}
                      />
                      &nbsp;Remember me
                    </div>

                    <a className="text-button">Forgot Password?</a>
                  </div>

                  <button
                    type="submit"
                    className="tf-btn btn-onsurface"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting
                      ? "Logging in..."
                      : "Login"}
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

              <Link
                href="/auth/register"
                className="tf-btn btn-onsurface"
              >
                Register
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}