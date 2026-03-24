"use client";
import React from "react";
import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),

        password: Yup.string()
            .min(6, "Minimum 6 characters")
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),

        agree: Yup.boolean().oneOf([true], "You must accept terms"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
        },

        validationSchema,

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const res = await axios.post(
                    `https://helioshome-backend.vercel.app/api/user/register`,
                    {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                    }
                );

                if (res.data.success) {
                    toast.success(res.data.message);
                    router.push("/auth/login");
                    resetForm();
                } else {
                    toast.error(res.data.message || "Something went wrong");
                }
            } catch (error) {
                console.error(error);
                toast.error("Server error");
            } finally {
                setSubmitting(false);
            }
        },
    });
    return (
        <>
            <Breadcrum title={"Register"} />
            <section className="flat-spacing">
                <div className="container">
                    <div className="login-wrap">
                        <div className="left">
                            <div className="heading">
                                <h4>Register</h4>
                            </div>
                            <form onSubmit={formik.handleSubmit} className="form-login form-has-password">
                                <div className="wrap">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name*"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="error">{formik.errors.name}</p>
                                    )}
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address*"
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
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password*"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                        <p className="error">{formik.errors.confirmPassword}</p>
                                    )}

                                    <div className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            checked={formik.values.agree}
                                            onChange={formik.handleChange}
                                        />
                                        <label>&nbsp;I agree to Terms</label>
                                    </div>
                                    {formik.errors.agree && (
                                        <p className="error">{formik.errors.agree}</p>
                                    )}
                                    <button className="tf-btn btn-onsurface" type="submit" disabled={formik.isSubmitting}>
                                        {formik.isSubmitting ? "Registering..." : "Register"}
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
