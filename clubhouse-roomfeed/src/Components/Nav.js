import React from "react";
import { Avatar } from "antd";

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
				<Avatar style={{ height: "1.5rem", width: "1.5rem" }}>DC</Avatar>
			</div>
		</nav>
	);
};

export default Nav;
