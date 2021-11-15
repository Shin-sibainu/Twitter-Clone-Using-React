import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widgets */}
    </div>
  );
}

export default App;
