import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import Nav from "./Utils/Nav";
import Routing from "./Utils/Routing";

function App() {
  return (
    <>
      <Nav />
      <Routing />
    </>
  );
}

export default App;
