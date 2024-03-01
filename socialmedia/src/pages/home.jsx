// import { useState , useEffect } from "react";
// import axios from "axios";

// export default function Home(){
    
//     const [data,setData] = useState([]);
//      useEffect (() => {
//         async function fetchData() {
//             let res = await axios.get("/api/get");
//             setData(res.data.posts);
//         }
//         fetchData();
//     },[]); 
//      console.log(data);
    
//     return(
//         <main>
//             {data.map((item,index) => (
//                   <section key={index}>
//                 <img src={`http://localhost:3000/api/image/${item.image}`} alt="post-cover" />
//                 <p id="des">{item.des}</p>  
//                 </section>
//                 ))}
//         </main>
//       );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const PostContainer = styled.section`
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const PostDescription = styled.p`
  padding: 10px;
  font-size: 14px;
  color: #333;
`;

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("/api/get");
        setData(res.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <MainContainer>
      {data.map((item, index) => (
        <PostContainer key={index}>
          <PostImage src={`http://localhost:3000/api/image/${item.image}`} alt="post-cover" />
          <PostDescription>{item.des}</PostDescription>
          </PostContainer>
      ))}
    </MainContainer>
  );
};

export default Home;
