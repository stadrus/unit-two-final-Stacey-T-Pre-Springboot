import { useNavigate } from "react-router";
// import { useEffect } from "react";
import './Login.css'

function Login () {
    
    // useEffect(() =>{
    //       const data = localStorage.getItem('userData');
    //       if(data){
    //           setUserData(JSON.parse(data));
    //       }
    // }, []);

    const storedUser = JSON.parse(localStorage.getItem('userData'));
    console.log(storedUser);
   
    const navigate = useNavigate();

    //create a function that alerts user of login status based on the stored email and password matching the localstorage data.//
    const handleSubmit = () => {
        if (!storedUser.email === "" && !storedUser.password === ""){
            alert("Email or password is invalid");
        } else{
            alert ("Login Successful");
            navigate('/Dashboard');
        }
    };

    const handleClick = () =>{
        navigate('/Register')
    };

    return (
        <div className= "wrapper">
            <div className="login-box">
                <div className="login-header">
                    <span>Login</span>
                </div>
               <div className="input-box">
                    <form id="login-form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter Email"/>
                        <input type="password" placeholder="Enter Password"/>
                        <button type="submit">Submit</button><br></br>
                        <button type="button" onClick={handleClick}>Register</button>
                    </form>
               </div>
            </div>
        </div>
    );
};

export default Login;