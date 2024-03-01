import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import "./app.css"

// import Auth from './middlewares/auth';

import Signup from "./pages/register.jsx";
import Signin from "./pages/login.jsx";

export default function App() {
    axios.defaults.baseURL = location.origin;
    if (import.meta.env.DEV) {
        axios.defaults.baseURL = "http://localhost:3000";
    }



    return (
        <main>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/profile"  Component={Profile}/>
                    <Route path="/register" Component={Signup}/>
                    <Route path="/login" Component={Signin}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}