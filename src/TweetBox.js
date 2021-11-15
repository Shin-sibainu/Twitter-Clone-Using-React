import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input placeholder="いまどうしてる？" type="text"></input>
        </div>
        <input
          className="tweetBox--imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox--tweetButton">ツイートする</Button>
      </form>
    </div>
  );
}

export default TweetBox;
