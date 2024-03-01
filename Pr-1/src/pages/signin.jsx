import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const navigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
        let username = event.target[0].value;
        let email = event.target[1].value;

        if (!username || !password){
            return alert("Input file cannot be empty");
        }
        try {
            let response = await axios.post("http://localhost:3000/api/login" ,{
                username,
                password
                })
                alert(response.data.msg);
                localStorage.setItem(token, response.data.token);
                navigate("/profile");
                console.log(response.data);
        } catch (error) {
            alert("lofgin failed");
            console.log(error);
        }
    }
    return(
        <section>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" value={"signin"}/>
            </form>
        </section>
    )
}
