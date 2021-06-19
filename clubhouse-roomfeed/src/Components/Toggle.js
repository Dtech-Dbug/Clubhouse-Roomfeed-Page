import React from "react";
import { Switch } from "antd";

const Toggle = ({ theme, dark, light, changeTheme }) => {
	return (
		<div className="Toggle-Container">
			<Switch
				style={{ background: theme === dark ? "grey" : "yellow" }}
				checked={theme === dark}
				onChange={changeTheme}
				checkedChildren="🕯"
				unCheckedChildren="🔦"
			/>

			<h3>Lights out. 🏮🕯</h3>
		</div>
	);
};

export default Toggle;
