import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from "./styles.module.css";
import { logoutAction } from "../../redux/slices/users/userSlices";
import { useDispatch } from "react-redux";
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Admin = () => {

	const dispatch = useDispatch()

	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Admin Home</h1>
				<button className={styles.white_btn} onClick={() => dispatch(logoutAction())}>
					Logout
				</button>
			</nav>
			{/* <Sidebar>
				<Menu>
					<SubMenu label="Charts">
						<MenuItem> Pie charts </MenuItem>
						<MenuItem> Line charts </MenuItem>
					</SubMenu>
					<MenuItem> Documentation </MenuItem>
					<MenuItem> Calendar </MenuItem>
				</Menu>
			</Sidebar> */}
		</div>
	);
};

export default Admin;
