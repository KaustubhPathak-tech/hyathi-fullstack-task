import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrolltoTop from "./components/ScrolltoTop";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Signup from "./pages/Register/Signup";
import Login from "./pages/Login/Login";
import Popup from "./components/Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemons } from "./actions/pokemons";

function App() {
  var User = useSelector((state) => state.fetch_current_userReducer);
  const year = new Date().getFullYear();
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    if (User) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  }, [User]);
  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Popup trigger={popup} setTrigger={setPopup} onClose={popup}></Popup>
        <Navbar />
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <div className="footer"style={{position:"absolute",bottom:"0px"}}>&copy; {year} Hyati Technologies Pvt. Ltd.</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
