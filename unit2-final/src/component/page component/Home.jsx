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
          <span> </span>
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
        <div className="home-header">
            <h3>The social calendar</h3>
        </div>
        <div className="home-content">
        <div className="home-container">
            <button className="login-button" type="button" onClick={handleClick1}>Login</button>
        </div>
        <div >
            <button className="register-button" type="button" onClick={handleClick2}>Register Account</button>
        </div>
        </div>
        </div>
    );
};

export default Home;