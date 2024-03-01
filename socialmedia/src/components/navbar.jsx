// import {Link} from "react-router-dom";
   



// export default function Navbar() {
//     return(
//         <main  id="navbar"> 
//             <Link  to={"/"}>Home</Link>
//             {/* <Link  to={"/profile"}>Profile</Link> */}
//             <Link   to={"/register"}>Singup</Link>
//             <Link   to={"/login"}>Signin</Link>
//         </main>
//     )
// }

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.main`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer id="navbar">
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/profile">Profile</NavLink> */}
      <NavLink to="/register">Signup</NavLink>
      <NavLink to="/login">Signin</NavLink>
    </NavBarContainer>
  );
};

export default Navbar;
