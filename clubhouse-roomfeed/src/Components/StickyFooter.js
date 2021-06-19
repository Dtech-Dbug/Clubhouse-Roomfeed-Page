import React from "react";

const StickyFooter = ({ theme, dark }) => {
	return (
		<div className="footer-wrapper">
			<footer>
				<button>+ Start A Room</button>
				<i
					class="fa fa-th"
					style={{
						fontSize: "1.6rem",
						color: theme === dark ? "white" : "black",
					}}
				></i>
			</footer>
		</div>
	);
};

export default StickyFooter;
