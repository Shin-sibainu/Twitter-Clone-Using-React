import React, { useState, useEffect } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import catImage from "./images/cat.jpg";
import db from "./firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

function Timeline() {
  /* ------------------------------------------ */
  /* これはデータベース連携し終わってから実装 */
  const [posts, setPosts] = useState([]);

  /* 最初のマウント時だけデータを取得してくる */
  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   // console.log(querySnapshot);
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    /* リアルタイムでデータも取得して表示したい */
    // const postsData = collection(db, "posts");
    const postSub = onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot.docs);
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  /* ------------------------------------------ */
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

      {/* Post */}
      {/* <Post
        displayName="プログラミングチュートリアル"
        username="Shin_Engineer"
        verified={true}
        text="初めてのツイート"
        avatar=""
        image={catImage}
      /> */}
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
