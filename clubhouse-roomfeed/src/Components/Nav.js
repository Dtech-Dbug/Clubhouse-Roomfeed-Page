import React from "react";

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
			</div>
		</nav>
	);
};

export default Nav;
