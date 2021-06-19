import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import StickyFooter from "./Components/StickyFooter";
import RoomFeed from "./Components/RoomFeed";
import { Switch } from "antd";

function App() {
	const light = "#f2f0e4";
	const dark = "black";
	const [theme, setTheme] = useState(light);
	useEffect(() => {
		console.log("theme is :", theme);
	});

	function changeTheme(value) {
		console.log(value);
		setTheme(value ? dark : light);
	}
	return (
		<div className="App" style={{ background: theme, height: "145vh" }}>
			<Nav theme={theme} />
			<Switch
				checked={theme === dark}
				onChange={changeTheme}
				checkedChildren="Dark"
				unCheckedChildren="Light"
			/>
			<StickyFooter />
			<RoomFeed theme={theme} />
		</div>
	);
}

export default App;
