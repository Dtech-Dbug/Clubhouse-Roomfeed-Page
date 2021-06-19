import React from "react";
import { Switch } from "antd";

const Toggle = ({ theme, dark, light, changeTheme }) => {
	return (
		<div className="Toggle-Container">
			<Switch
				checked={theme === dark}
				onChange={changeTheme}
				checkedChildren="Dark"
				unCheckedChildren="Light"
			/>

			<h3>Lights out. 🏮🕯</h3>
		</div>
	);
};

export default Toggle;
