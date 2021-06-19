import React from "react";
import { Switch } from "antd";

const Toggle = ({ theme, dark, light, changeTheme, color }) => {
	return (
		<div className="Toggle-Parent-Container">
			<div
				className="Toggle-Container"
				style={{
					boxShadow:
						theme === light ? "0px 3px 6px black" : "0px 0px 2px white",
					background: theme === dark ? "white" : "black",
				}}
			>
				<Switch
					style={{
						background: theme === dark ? "grey" : "yellow",
					}}
					checked={theme === dark}
					onChange={changeTheme}
					checkedChildren="🕯"
					unCheckedChildren="🔦"
				/>

				{theme === dark ? (
					<h3 style={{ color: theme === dark ? "black" : "white" }}>
						👈 Lights In 💡{" "}
					</h3>
				) : (
					<h3 style={{ color: theme === dark ? "black" : "white" }}>
						👈 Lights Out 🏮{" "}
					</h3>
				)}
			</div>
		</div>
	);
};

export default Toggle;
