import React from "react";
import RoomCards from "./RoomCards";

//images
import userAvatar1 from "../Image/cuteUser1.jpg";
import userAvatar2 from "../Image/cuteUser2.jpg";
import userAvatar3 from "../Image/cuteUser3.png";
import userAvatar4 from "../Image/cuteUser4.jpg";
import userAvatar5 from "../Image/cuteUser5.jpg";

const RoomFeed = ({ theme }) => {
	return (
		<div className="room-feed-container">
			<RoomCards
				heading="Web & Whiteclaw "
				subHeading="Delicios 😋 🍺"
				userAvatar1={userAvatar3}
				userAvatar2={userAvatar5}
				user1="Whiteclaw 🍻"
				user2="Jack Forge"
				user3="VueJS"
				theme={theme}
				color={theme === "#f2f0e4" ? "black" : "white"}
			/>
			<RoomCards
				heading="CSS Sorcery"
				subHeading="Room made using CSS only 🧙‍♀️🧙‍♂️✨"
				userAvatar1={userAvatar2}
				userAvatar2={userAvatar4}
				user1="Pratham"
				user2="Kass 🦈"
				user3="Sabrina"
				theme={theme}
				color={theme === "#f2f0e4" ? "black" : "white"}
			/>
			<RoomCards
				heading="Web Bosses"
				subHeading="Better at web than Spiderman 🕸"
				userAvatar1={userAvatar1}
				userAvatar2={userAvatar4}
				user1="AshishxCode"
				user2="Insha"
				user3="CSFinch 🚀"
				user4="Segun"
				theme={theme}
				color={theme === "#f2f0e4" ? "black" : "white"}
			/>
			<RoomCards
				heading="Music"
				subHeading="Brainwashed from Rock n Rap 🤘"
				userAvatar1={userAvatar2}
				userAvatar2={userAvatar5}
				user1="Eminem"
				user2="Jess"
				user3="Charlie 🐩"
				user4="Dee"
				theme={theme}
				color={theme === "#f2f0e4" ? "black" : "white"}
			/>
		</div>
	);
};

export default RoomFeed;
