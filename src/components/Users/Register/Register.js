import React from "react";
//formik for forms
import { useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
//yup for form validation
import * as Yup from "yup";
import { registerUserAction } from "../../../redux/slices/users/userSlices";



//Form schema
const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required!"),
  lastName: Yup.string().required("Last Name is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});
//-------------------------------
//Register
//-------------------------------
const Register = () => {

  //dispath
  const dispatch = useDispatch();
  const Navigate = useNavigate();


  //formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: values => {
      //dispath the action
      dispatch(registerUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  console.log(formik);
  //select state from store
  const storeData = useSelector(store => store?.users);
  const { loading, appErr, serverErr, registered } = storeData;

  //redirect
  if (registered) {
    return Navigate("/login");
  }

  return (

    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={formik.handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
							value={formik.values.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
							value={formik.values.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
							value={formik.values.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
							value={formik.values.password}
							required
							className={styles.input}
						/>
						{/* <div className={styles.error_msg}>
              {formik.touched && formik.errors}
            </div> */}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
    
  );
};

export default Register;
