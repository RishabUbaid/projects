import { useNavigate } from "react-router";



function Profile() {
    console.log("profileloaded");
    const navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem("token");
      navigate("/");
    }
    return (
      <main>
        profile
        <button onClick={logout}>Logout</button>
      </main>
    );
  }
  export default Profile;