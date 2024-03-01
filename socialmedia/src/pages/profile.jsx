// import axios from "axios";
//  import { useNavigate } from "react-router-dom";
// export default function Profile() {

//     const navigate = useNavigate();
//  const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         try {
//             let res = await axios.post("/api/upload", formData)
//             alert(res.data.msg);
//             navigate("/");
//         } catch (error) {
//             console.log(error);
//             alert(error.response.data.msg);
//         }
//     }
//     return (
//         <form onSubmit={submitHandler}  >
//             <input type="file" id="file" name="image" accept="image/*"   />
//             <input type="text" name="des" id="des" placeholder="DES"   />
//             <input type="submit" id="postbutton" value="post"  />
//         </form>
//     );
// // }

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.form`
  display: static;
  align-items: center;
  max-width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 9px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 90%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #5a5a5a;
  border-radius: 4px;
`;

const SubmitButton = styled.input`
  width: 50%;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Profile = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      let res = await axios.post("/api/upload", formData);
      alert(res.data.msg);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  
  return (
    <FormContainer onSubmit={submitHandler}>
      <Input type="file" id="file" name="image" accept="image/*" />
      <Input type="text" name="des" id="des" placeholder="Description" />
      <SubmitButton type="submit" value="Post" />
    </FormContainer>
  );
};

export default Profile;
