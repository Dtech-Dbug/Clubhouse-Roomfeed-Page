import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import StickyFooter from "./Components/StickyFooter";
import RoomFeed from "./Components/RoomFeed";
import Toggle from "./Components/Toggle";

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
		<div className="App" style={{ background: theme, height: "100vh" }}>
			<Nav theme={theme} />
			<Toggle
				changeTheme={changeTheme}
				theme={theme}
				dark={dark}
				light={light}
				color={theme === "#f2f0e4" ? "black" : "white"}
			/>
			<StickyFooter theme={theme} dark={dark} light={light} />
			<RoomFeed theme={theme} />
		</div>
	);
}

export default App;
