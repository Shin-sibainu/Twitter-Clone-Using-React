import { Avatar } from "@material-ui/core";
import { VerifiedUserOutlined } from "@material-ui/icons";
import React from "react";
import "./Post.css";

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
              Rafeh Qazi
              <span>
                <VerifiedUserOutlined className="post--badge" />
              </span>
            </h3>
          </div>
          <div className="post--headerDescription">
            <p>私は今、ツイッタークローンを作ろうとしています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
