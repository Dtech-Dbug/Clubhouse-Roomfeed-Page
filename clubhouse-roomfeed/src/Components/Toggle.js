import React from "react";
import { Switch } from "antd";

const Toggle = ({ theme, dark, light, changeTheme, color }) => {
	return (
		<div
			className="Toggle-Container"
			style={{
				boxShadow: theme === light ? "0px 3px 6px black" : "0px 0px 2px white",
			}}
		>
			<Switch
				style={{ background: theme === dark ? "grey" : "yellow" }}
				checked={theme === dark}
				onChange={changeTheme}
				checkedChildren="🕯"
				unCheckedChildren="🔦"
			/>

			{theme === dark ? (
				<h3 style={{ color: color }}>👈 Lights In 💡 </h3>
			) : (
				<h3 style={{ color: color }}>👈 Lights Out 🏮 </h3>
			)}
		</div>
	);
};

export default Toggle;
