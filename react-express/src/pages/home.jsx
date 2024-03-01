import { useNavigate } from "react-router";

function Home(){
    console.log("homeloaded");
    const navigate = useNavigate();
    const login = () => {
      localStorage.setItem("token", "chbhdbcdjhcieuiijo");
      navigate("/profile");
    }
    return (
      <main>
        Home
        <button onClick={login}>login</button>
      </main>
    );
  }
  export default Home;