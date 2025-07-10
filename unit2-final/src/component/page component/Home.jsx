import { useNavigate } from "react-router";
import "./home.css"

const Home = () =>{
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate ('/Login');
    }
    const handleClick2 = () => {
        navigate('/Register');
    }

    return (
        
        <div className="home">
        <div className="background-container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
            <h3>The social calendar</h3>
        </div>
        <div >
            <button className="login-button" type="button" onClick={handleClick1}>Login</button>
        </div>
        <div >
            <button className="register-button" type="button" onClick={handleClick2}>Register Account</button>
        </div>
        </div>
    );
};

export default Home;