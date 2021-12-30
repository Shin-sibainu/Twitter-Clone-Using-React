import React, { useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import catImage from "./images/cat.jpg";

function Timeline() {
  /* ------------------------------------------ */
  /* これはデータベース連携し終わってから実装 */
  const [posts, setPosts] = useState([]);

  /* ------------------------------------------ */
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="プログラミングチュートリアル"
        username="Shin_Engineer"
        verified={true}
        text="初めてのツイート"
        avatar=""
        image={catImage}
      />
      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Timeline;
