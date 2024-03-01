import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import{ lazy, Suspense } from 'react';
 
import Home from './pages/home';
// import About from './pages/about';
// import profile from './pages/profile'
import Auth from './middlewares/auth';
import './App.css';

console.log("Loaded App");

function App() {
  axios.defaults.baseURL = location.origin;
  if (import.meta.env.Dev) {
    axios.defaults.baseURL = "http://localhost:3000";
  }

  axios.get("/api/get-data")
    .then(res => {
      // console.log(res.data);
    });

const About = lazy(() => import("./pages/about.jsx"));
const Profile = lazy(() => import("./pages/profile.jsx"));

  return (
    <>
      <BrowserRouter>
        <main>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </main>
        <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route index Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/profile' element={<Auth><Profile/></Auth>} />

        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App


