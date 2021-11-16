import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
