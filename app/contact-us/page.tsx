"use client";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import Breadcrum from "@/components/common/breadcrum";
import { useEffect, useState } from "react";
import { apiUrl } from "@/utils/apiurl";

const ContactUs = () => {
    const [masterData, setMasterData] = useState<any>(null);
    useEffect(() => {
        const fetchMasterData = async () => {
            try {
                const res = await axios.get(
                    `${apiUrl}/api/v1/master`
                );

                if (res.data.success) {
                    setMasterData(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching master data:", error);
            }
        };

        fetchMasterData();
    }, []);

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
            .required("Phone is required"),
        msg: Yup.string().required("Message is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            msg: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const res = await axios.post(
                    `${apiUrl}/api/contact/submit`,
                    values
                );

                if (res.data.success) {
                    toast.success(res.data.message);
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
            <Breadcrum title={"Contact Us"} />

            <div className="main-content">
                <section className="flat-spacing">
                    <div className="container">
                        <div className="contact-us-content">
                            <div className="row">
                                
                                {/* Left Side Contact Info */}
                                <div className="col-lg-4 mb-lg-30">
                                    <h4 className="mb_30 wow fadeInUp">
                                        Contact Information
                                    </h4>

                                    <div className="mb_28">
                                        <h6 className="mb_8">Phone:</h6>
                                        <p className="text-body-default">
                                            {masterData?.primaryPhone}
                                        </p>

                                        <p className="text-body-default">
                                            {masterData?.secondaryPhone}
                                        </p>
                                    </div>

                                    <div className="mb_28">
                                        <h6 className="mb_8">Email:</h6>

                                        <p className="text-body-default">
                                            {masterData?.primaryEmail}
                                        </p>

                                        <p className="text-body-default">
                                            {masterData?.secondaryEmail}
                                        </p>
                                    </div>

                                    <div className="mb_28">
                                        <h6 className="mb_8">Address:</h6>

                                        <p className="text-body-default">
                                            {masterData?.address}
                                        </p>
                                    </div>

                                    <div>
                                        <h6 className="mb_8">Open Time:</h6>

                                        <p className="text-body-default mb_4 open-time">
                                            <span>Mon - Sat:</span>
                                            7:30am - 8:00pm IST
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="col-lg-7 offset-lg-1">
                                    <h4 className="mb_7 wow fadeInUp">
                                        Get In Touch
                                    </h4>

                                    <p
                                        className="text_secondary mb_24 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        Use the form below to get in touch with the sales team
                                    </p>

                                    <form
                                        onSubmit={formik.handleSubmit}
                                        className="form-leave-comment"
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name*"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {formik.touched.name &&
                                            formik.errors.name && (
                                                <p className="error">
                                                    {formik.errors.name}
                                                </p>
                                            )}

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email*"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {formik.touched.email &&
                                            formik.errors.email && (
                                                <p className="error">
                                                    {formik.errors.email}
                                                </p>
                                            )}

                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone*"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {formik.touched.phone &&
                                            formik.errors.phone && (
                                                <p className="error">
                                                    {formik.errors.phone}
                                                </p>
                                            )}

                                        <textarea
                                            name="msg"
                                            placeholder="Your Message*"
                                            value={formik.values.msg}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {formik.touched.msg &&
                                            formik.errors.msg && (
                                                <p className="error">
                                                    {formik.errors.msg}
                                                </p>
                                            )}

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={formik.isSubmitting}
                                        >
                                            {formik.isSubmitting
                                                ? "Sending..."
                                                : "Send Message"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactUs;