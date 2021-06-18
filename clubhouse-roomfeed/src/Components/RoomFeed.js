import React from "react";
import RoomCards from "./RoomCards";

//images
import userAvatar1 from "../Image/cuteUser1.jpg";
import userAvatar2 from "../Image/cuteUser2.jpg";
import userAvatar3 from "../Image/cuteUser3.png";
import userAvatar4 from "../Image/cuteUser4.jpg";
import userAvatar5 from "../Image/cuteUser5.jpg";

const RoomFeed = () => {
	return (
		<div className="room-feed-container">
			<RoomCards
				heading="Music"
				subHeading="From Classical to Pop, Rock to hip-hop"
				userAvatar1={userAvatar3}
				userAvatar2={userAvatar5}
				user1="Eminem"
				user2="Matty Healy"
				user3="Dee"
			/>
			<RoomCards
				heading="Memes"
				subHeading="Who let the jokes out? 🤣"
				userAvatar1={userAvatar2}
				userAvatar2={userAvatar4}
				user1="Jagdish"
				user2="Elon Musk"
				user3="TeamTanay Meme"
			/>
			<RoomCards
				heading="Tech ,Life , jokes"
				subHeading="No React Challenge 🤣"
				userAvatar1={userAvatar1}
				userAvatar2={userAvatar4}
				user1="Tanay"
				user2="NeogCamp"
				user3="Dee"
			/>
			<RoomCards
				heading="Wordplays"
				subHeading="No Pun No Fun. Know Pun?Know Fun!"
				userAvatar1={userAvatar2}
				userAvatar2={userAvatar5}
				user1="Dwaipayan"
				user2="Dtech-Dbug"
				user3="Dee"
			/>
		</div>
	);
};

export default RoomFeed;
