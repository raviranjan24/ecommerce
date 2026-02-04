// import * as Yup from "yup";

// export const emailSchema = Yup.object({
//   email: Yup.string().email("Invalid email").required("Email is required"),
// });

// export const loginSchema = Yup.object({
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// export const forgotPasswordSchema = Yup.object({
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("New Password is required"),

//   confirmPass: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords must match")
//     .required("Please confirm your password"),
// });

// export const validationSchemasForLoginWithOTP = Yup.object({
//   mobileNo: Yup.string()
//     .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
//     .required("Mobile number is required"),
// });

// export const validationSchemasForLoginWithEmail = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// export const validationSchemasForForgotPasswordEmailSend = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// export const validationSchemasForForgotPassword = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// export const validationSchemasForCreateAccount = [
//   Yup.object({
//     fullname: Yup.string().required("Full Name is required"),
//     jobTitle: Yup.string().required("Job Title is required"),
//   }),
//   Yup.object({
//     companyName: Yup.string().required("Company Name is required"),
//     noOfEmp: Yup.number()
//       .typeError("Must be a number")
//       .required("Number of Employees is required"),
//   }),
//   Yup.object({
//     mobileNo: Yup.string()
//       .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
//       .required("Mobile Number is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//   }),
// ];

// const validationSchemasLoginForm = {
//   emailLogin: Yup.object({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().min(2, "Too Short!").required("Password is required"),
//   }),
//   mobileLogin: [
//     Yup.object({
//       mobile: Yup.string()
//         .matches(/^[0-9]{10}$/, "Invalid mobile number")
//         .required("Mobile number is required"),
//     }),
//     Yup.object({
//       otp: Yup.array()
//         .of(Yup.string().length(1, "Each digit must be 1 character"))
//         .test("otp-complete", "OTP must be 6 digits", (otp) =>
//           Array.isArray(otp) && otp.every((digit) => (digit ?? "").trim() !== "")
//         )
//         .required("OTP is required"),
//     }),

//   ],
//   forgotPassword: Yup.object({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//   }),
// };

// const validationSchemasRegister = [
//   // Step 1: Personal Information
//   Yup.object({
//     fullname: Yup.string().required("Full Name is required"),
//     jobTitle: Yup.string().required("Job Title is required"),
//     companyName: Yup.string().required("Company Name is required"),
//     noEmp: Yup.string().required("No Of Employee is required"),
//     country: Yup.string().required("Country is required"),
//   }),

//   // Step 2: Mobile Number and Email
//   Yup.object({
//     mobileNo: Yup.string()
//       .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
//       .required("Mobile number is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//   }),
// ];

// export {validationSchemasLoginForm,validationSchemasRegister}