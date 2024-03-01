import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
        let profile = event.target[0].files[0];
        let username = event.target[1].value;
        let email = event.target[2].value;
        let password = event.target[3].value;
        

        if (!profile || !username || !email || !password){
            return alert("Input file cannot be empty");
        }
        try {
            let convertedProfile = await convert(profile);
            let response = await axios.post("http://localhost:3000/api/register" ,{
                profile: convertedProfile,
                username,
                email,
                password
                })
                alert(response.data.msg);
                localStorage.setItem(token, response.data.token);
                navigate("/signin");
                console.log(response.data);
        } catch (error) {
            alert("registration failed");
            console.log(error);
        }
    }
    return(
        <section>
            <form onSubmit={submitHandler}>
                <input type="file" name="profile" placeholder="profile" /><br />
                <input type="text" name="username" placeholder="username" /><br />
                <input type="email" name="email" placeholder="email" /><br />
                <input type="password" name="password" placeholder="password" /><br />
                <input type="submit" value={"signin"}/>
            </form>
        </section>
    );
}

async function convert (file) {
    return new Promise((res, rej) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            res(fileReader.result);
        }
        fileReader.onerror = (error) => {
            rej(error);
        }
    })
}



