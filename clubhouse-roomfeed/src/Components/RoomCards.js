import React from "react";
import User from "../Image/user.jpg";
import { MessageOutlined } from "@ant-design/icons";
import Comments from "../Image/comments.svg";
import CommentsRegular from "../Image/commentsRegular.svg";

const RoomCards = ({
	heading,
	subHeading,
	userAvatar1,
	userAvatar2,
	user1,
	user2,
	user3,
}) => {
	return (
		<div className="room-cards">
			<div className="room-card-header">
				<h3>
					{heading}
					<i
						style={{ color: "rgba(39, 174, 97, 255)" }}
						className="fa fa-home"
					></i>
				</h3>{" "}
				<h4>{subHeading}</h4>
			</div>

			<div className="room-card-content">
				<div className="user-images">
					<img
						className="user-images user-image-1"
						src={userAvatar1}
						alt="Oops!"
					/>
					<img
						className="user-images user-image-2"
						src={userAvatar2}
						alt="Oops!"
					/>
				</div>

				<div className="room-users">
					<div className="users">
						<h4>{user1}</h4>
						<img
							className="comment"
							src={CommentsRegular}
							style={{ backgroundClip: "contentBox" }}
							alt=""
						/>
					</div>

					<div className="users">
						<h4>{user2}</h4>
						<img
							className="comment"
							src={CommentsRegular}
							style={{ backgroundClip: "contentBox" }}
							alt=""
						/>
					</div>
					<div className="users">
						<h4>{user3}</h4>
						<img
							className="comment"
							src={CommentsRegular}
							style={{ backgroundClip: "contentBox" }}
							alt=""
						/>
					</div>

					<div className="room-info">
						567 <i class="fa fa-user"></i> / 17 <MessageOutlined />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomCards;
//<i class="far fa-comment-dots"></i>
