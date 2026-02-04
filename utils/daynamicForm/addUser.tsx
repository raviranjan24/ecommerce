// import * as Yup from "yup";

// export const step1Fields = (
//   density: any,
//   points: any,
//   tile: any,
//   role: any,
//   status:any
// ) => [
//   { name: "profilepicture", label: "Profile Picture", type: "file" },
//   { name: "name", label: "Name", placeholder: "Enter Username" },
//   {
//     name: "mobileno",
//     label: "Mobile Number",
//     placeholder: "Enter Mobile Number",
//   },
//   {
//     name: "email",
//     label: "Email Address",
//     placeholder: "Enter Email Address",
//     disabled: status,
//   },
//   {
//     name: "density",
//     label: "Density (Assign Density to User.)",
//     type: "checkbox",
//     options: density,
//   },
//   {
//     name: "points",
//     label: "Points (Assign Points to User.)",
//     type: "checkbox",
//     options: points,
//   },
//   {
//     name: "tilesize",
//     label: "Tile Size",
//     type: "checkbox",
//     options: tile,
//   },
//   {
//     name: "role",
//     label: "User Role",
//     type: "select",
//     options: role,
//   },
//   {
//     name: "address",
//     type: "text",
//     label: "Address",
//     placeholder: "Enter Full Address",
//   },
// ];

// export const validationSchemasFormFirst = Yup.object({
//   name: Yup.string().required("Organization Name is required"),
//   address: Yup.string().required("Address is required"),
//   role: Yup.string().notRequired(),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   mobileno: Yup.string()
//     .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
//     .required("Mobile number is required"),
// });
