
import React from 'react';
import { useFormik } from "formik"
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { loginUserAction } from '../../../redux/slices/users/userSlices';
import styles from "./styles.module.css";

import { useNavigate,Link } from 'react-router-dom';

//Form schema
const formSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const Login = () => {
    const dispatch = useDispatch()

    const Navigate = useNavigate();

    //formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            //dispath the action
            dispatch(loginUserAction(values))
            console.log(values);
        },
        validationSchema: formSchema,
    });
    //redirect
    const store = useSelector(state => state?.users)
    const { userAuth, loading, serverErr, appErr } = store;
    console.log(userAuth);
    
    if (userAuth) return Navigate("/");
    

    return (
        <>
            <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={formik.handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
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
							value={formik.values.password}
							required
							className={styles.input}
						/>
						<div className={styles.error_msg}>
                            {formik.touched.password && formik.errors.password}
                        </div>
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
        </>
    );
};
export default Login;
