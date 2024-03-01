// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Signup (){

// const navigate = useNavigate();
// const submitHandler = async (event) => {
//     event.preventDefault();
//     let username = event.target[0].value;
//     let email = event.target[1].value;
//     let password = event.target[2].value;
    
//     if ( !username || !email || !password ){
//         return alert("input fields cannot be empty!");
//     }
// try{
//     let response = await axios.post("/api/register",{
//         username,
//         email,
//         password
//     })
//     alert(response.data.msg);
//     navigate("/login");
//     console.log(response.data);
// }catch (error) {
//     alert("registration failed")
//     console.log(error);
// }
// }





//     return(
//         <section>
//             <form onSubmit={submitHandler}>
//                 <input type="text" name="username" placeholder="username" />
//                 <input type="email" name="email" placeholder="email" />
//                 <input type="password" name="password" placeholder="password" />
//                 <input type="submit" value="signin" />
//               </form>
//         </section>
//     )
// }


import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupContainer = styled.div`
  display:static;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
 text-align: center;
  width: 300px;
  padding: 50px;
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

const SubmitButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Signup = () => {
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    let username = event.target[0].value;
    let email = event.target[1].value;
    let password = event.target[2].value;

    if (!username || !email || !password) {
      return alert("Input fields cannot be empty!");
    }

    try {
      let response = await axios.post("/api/register", {
        username,
        email,
        password,
      });
      alert(response.data.msg);
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      alert("Registration failed");
      console.log(error);
    }
  };

  return (
    <SignupContainer>
        
      <FormContainer onSubmit={submitHandler}>
      <p>SIGNUP</p>
        <Input type="text" name="username" placeholder="Username" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </SignupContainer>
  );
};

export default Signup;
