import { Avatar, Button } from "@material-ui/core";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    const addData = collection(db, "posts");
    addDoc(addData, {
      displayName: "プログラミングチュートリアル",
      username: "Shin_Enginner",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox--tweetButton"
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
