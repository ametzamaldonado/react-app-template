import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        {/* --------- NavBar Component could go here --------- */}
         <nav>  {/* <- simplified navbar, only meant as an example */}
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="#Other1">Other 1</a></li>
            <li><a href="#Other2">Other 2</a></li>  
          </ul>
        </nav>

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
