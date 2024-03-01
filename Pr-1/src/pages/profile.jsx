import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        profile: "",
        username:"", 
        email: ""
    });
    useEffect(() => {
        axios.get("http://localhost:3000/api/get-profile",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            console.log(res.data);
            setData({...res.data.profile});
        })
    })
    const signoutHandler = () => {
        localStorage.removeItem("token");
        navigate("/signin", { replace: true});
    }
    return(
        <section>
        <img src={data.profile} alt="profile" />
        <h1>Username: {data.username}</h1>
        <p>Email: {data.email}</p>
        <button onClick={signoutHandler}>signout</button>
    </section>
    );
    
}