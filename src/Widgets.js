import { Search } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>今どうしてる？</h2>
      </div>
    </div>
  );
}

export default Widgets;
