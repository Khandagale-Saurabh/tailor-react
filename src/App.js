import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Posts from "./components/Post";
import Sidebar from "./components/Slidebar";
import Context from "./Global/Context";

function App() {
  return (
    
    <Context>
    <Navbar />
    <div className="container">
      <Stories />
      <Create />
      <Posts />
      <Sidebar />
    </div>
    <Model />
  </Context>
  
  );
}

export default App;
