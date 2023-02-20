import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const CreateMeeting = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/users/login";
			const { data: res } = await axios.post(url, data);
			
			localStorage.setItem("user",JSON.stringify(res) );
			if(res.isAdmin === true){
				window.location = "/admin"
			}
			else{
			 window.location = "/";
			}
			// window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create New Meeting</h1>
						<input
							type="email"
							placeholder="Meeting Name"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Host"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
                        <input
							type="password"
							placeholder="Select participants"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Submit
						</button>
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default CreateMeeting;
