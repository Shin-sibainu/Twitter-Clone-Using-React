import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
import catImage from "./images/cat.jpg";
function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post--avatar">
        <Avatar />
      </div>
      <div className="post--body">
        <div className="post--header">
          <div className="post--headerText">
            <h3>
              Shin Code
              <span className="post--headerSpecial">
                <VerifiedUser className="post--badge" /> @shincode
              </span>
            </h3>
          </div>
          <div className="post--headerDescription">
            <p>私は今、ツイッタークローンを作ろうとしています。</p>
          </div>
        </div>
        <img src={catImage} alt="cat" />
        <div className="post--footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
