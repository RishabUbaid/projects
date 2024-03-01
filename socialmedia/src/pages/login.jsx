// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';


// export default function Signin() {
//     const navigate = useNavigate();
//     const submitHandler = async (event) => {
//         event.preventDefault();
//         let username = event.target[0].value;
//         let password = event.target[1].value;

//         if (!username || !password){
//             return alert("Input file cannot be empty");
//         }
//         try {
//             let response = await axios.post("/api/login" ,{
//                 username,
//                 password
//                 })
//                 alert(response.data.msg);
//                 // localStorage.setItem(token, response.data.token);
//                 navigate("/profile");
//                 console.log(response.data);
//         } catch (error) {
//             alert("login failed");
//             console.log(error);
//         }
//     }
//     return(
//         <section>
//             <form onSubmit={submitHandler}>
//                 <input type="text" name="username" placeholder="username" />
//                 <input type="password" name="password" placeholder="password" />
//                 <input type="submit" value={"signin"}/>
//             </form>
//         </section>
//     )
// }

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

const SigninContainer = styled.section`
  display: static;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
text-align: center;
  width: 300px;
  padding: 60px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled(Button)`
  width: 50%;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Signin = () => {
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;

    if (!username || !password) {
      return alert("Input fields cannot be empty");
    }

    try {
      let response = await axios.post("/api/login", {
        username,
        password,
      });
      alert(response.data.msg);
      // localStorage.setItem(token, response.data.token);
      navigate("/profile");
      console.log(response.data);
    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  };

  return (
    <SigninContainer>
      <FormContainer onSubmit={submitHandler}>
        <p>SIGN IN</p>
        <Input type="text" name="username" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
        <SubmitButton type="submit">Sign In</SubmitButton>
      </FormContainer>
    </SigninContainer>
  );
};

export default Signin;
