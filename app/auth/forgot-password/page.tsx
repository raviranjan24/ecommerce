"use client";
import Breadcrum from "@/components/common/breadcrum";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/forgot-password`,
          {
            email: values.email,
          }
        );
        if (res.data.success) {
          toast.success(
            res.data.message || "Password reset link sent to your email"
          );
          setEmailSent(true);
          resetForm();
        } else {
          toast.error(res.data.message || "Something went wrong");
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

  return (
    <>
      <Breadcrum title={"Forgot Password"} />
      <section className="flat-spacing">
        <div className="container">
          <div className="login-wrap justify-content-center">
            <div className="left" style={{ maxWidth: "500px", width: "100%" }}>
              <div className="heading mb_20">
                <h4>Forgot Password</h4>
                <p className="text-secondary mt_8">
                  Enter your registered email address and we’ll send you a password reset link.
                </p>
              </div>

              {emailSent && (
                <div
                  style={{
                    background: "#e8f7ee",
                    color: "#1b7f46",
                    padding: "12px",
                    borderRadius: "6px",
                    marginBottom: "15px",
                    fontSize: "14px",
                  }}
                >
                  Password reset link has been sent to your email.
                </div>
              )}

              <form
                onSubmit={formik.handleSubmit}
                className="form-login"
              >
                <div className="wrap">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address*"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.email &&
                      formik.errors.email && (
                        <p
                          className="error"
                          style={{
                            color: "red",
                            fontSize: "13px",
                            marginTop: "5px",
                          }}
                        >
                          {formik.errors.email}
                        </p>
                      )}
                  </div>
                  <button
                    type="submit"
                    className="tf-btn btn-onsurface"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting
                      ? "Sending..."
                      : "Send Reset Link"}
                  </button>
                  <div className="text-center mt_20">
                    <Link
                      href="/auth/login"
                      className="text-button"
                    >
                      Back to Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}