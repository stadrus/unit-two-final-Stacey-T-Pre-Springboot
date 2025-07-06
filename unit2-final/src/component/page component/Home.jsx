import { useNavigate } from "react-router";
import appInfo from "../../video/appInfo.mp4"

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
        <div>
            <h3>The social calendar</h3>
            <video className="appInfo-video" width={620} height={540} autoPlay>
                <source src={appInfo} type="video/mp4"></source>
            </video>
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