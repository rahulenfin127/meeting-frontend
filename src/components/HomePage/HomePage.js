import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { logoutAction } from "../../redux/slices/users/userSlices";
import { useDispatch,useSelector } from "react-redux";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const HomePage = () => {
    const store = useSelector(state => state?.users)
    const { userAuth, loading, serverErr, appErr } = store;
    console.log(userAuth); 
    const dispatch = useDispatch()
    return (
        <div>
        {userAuth?.isAdmin? (
            <>
            <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Admin Home</h1>
				<button className={styles.white_btn} onClick={() => dispatch(logoutAction())}>
					Logout
				</button>
			</nav>
			<div>
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
		</div>
        </>
        ):(
            <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>User Home</h1>
				<button className={styles.white_btn} onClick={() => dispatch(logoutAction())}>
					Logout
				</button>
			</nav>
			
		</div>)}
		</div>
	);
};

export default HomePage