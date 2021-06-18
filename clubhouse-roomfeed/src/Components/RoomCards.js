import React from "react";
import User from "../Image/user.jpg";
import { MessageOutlined } from "@ant-design/icons";
import Comments from "../Image/comments.svg";
import CommentsRegular from "../Image/commentsRegular.svg";

const RoomCards = () => {
	return (
		<div className="room-cards">
			<div className="room-card-header">
				<h3>
					Test{" "}
					<i
						style={{ color: "rgba(39, 174, 97, 255)" }}
						className="fa fa-home"
					></i>
				</h3>{" "}
				<h4>Test Test Test</h4>
			</div>

			<div className="room-card-content">
				<div className="user-images">
					<img className="user-images user-image-1" src={User} alt="Oops!" />
					<img className="user-images user-image-2" src={User} alt="Oops!" />
				</div>

				<div className="room-users">
					<div className="users">
						<h4>Dwaipayan</h4>
						<img
							className="comment"
							src={CommentsRegular}
							style={{ backgroundClip: "contentBox" }}
							alt=""
						/>
					</div>

					<div className="users">
						<h4>Dtech-Dbug</h4>
						<img
							className="comment"
							src={CommentsRegular}
							style={{ backgroundClip: "contentBox" }}
							alt=""
						/>
					</div>
					<div className="users">
						<h4>Dee</h4>
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
