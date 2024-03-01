import React, { useState } from "react";
import { BrowserRouter, Router, Route, Routes, Link, useNavigate } from "react-router-dom";


import "./App.css";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Fileuploader from "./pages/file-uploader";
import ViewImage from "./pages/view-image";

export default function App() {
    const [display, setDisplay] = useState(true);
    return (
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/register" Component={Register}/>
            <Route path="/signup" Component={Signup}/>
            <Route path="/signin" Component={Signin}/>
            <Route path="/login" Component={Login}/>
            <Route path="/profile" Component={Profile}/>
            <Route path="/file-uploader" Component={Fileuploader}></Route>
            <Route path="/view-image" Component={ViewImage}></Route>
        </Routes>
        </BrowserRouter>
            
         );

}

function Nav() {
  return (
    <div>
      <Link to="/">home </Link>
      <Link to="/about">about </Link>
      <Link to="/register">register </Link>
      <Link to="/login">login </Link>
      <Link to="/signup">signup </Link>
      <Link to="/signin">signin </Link>
    </div>
  );
}

function Home() {
    return (
        <h1>Home</h1>
    );
}

function About() {
    return (
        <h1>About</h1>
    );
}

function Register() {
  fetch("http://localhost:3000/api/register")
  .then(res => res.json())
  .then(data => console.log(data))
    return (
        <h1>Register</h1>
    );
}

function Login() {
    const nav = useNavigate();
    return (
        <button onClick={() => nav("/profile")}>Login</button>
    );
}

function Profile() {
    return (
        <h1>Profile</h1>
    );
}