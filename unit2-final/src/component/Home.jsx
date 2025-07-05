import { useNavigate } from "react-router";

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
            <button type="button" onClick={handleClick1}>Login</button>
            <button type="button" onClick={handleClick2}>Register Account</button>
        </div>
    );
};

export default Home;