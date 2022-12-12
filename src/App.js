import React, { useEffect, useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { auth } from "./firebase";
// import Nab from "./Components/navbar";
function App() {

  const [userName, setUserName] = useState("");

  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }
        else{ setUserName(" ")
      }
    })
    // window.location.reload();
  })
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home name = {userName}/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;