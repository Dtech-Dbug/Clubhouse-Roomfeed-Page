import React from "react";
import { Avatar } from "antd";
import User from "../Image/user.jpg";

const Nav = () => {
	return (
		<nav>
			<div className="flex-child-1">
				<i class="fa fa-search"></i>
			</div>

			<div className="flex-child-2">
				<i class="fa fa-bell"></i>
				<i class="fa fa-calendar"></i>
				<i class="fa fa-envelope-open"></i>
				<Avatar src={User} style={{ height: "1.8rem", width: "1.8rem" }}>
					DC
				</Avatar>
			</div>
		</nav>
	);
};

export default Nav;
