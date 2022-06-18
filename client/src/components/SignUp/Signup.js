import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";
// import { useNavigate  } from "react-router-dom";

const Signup = () => {

    // const navigate = useNavigate ();

    const [ user, setUser] = useState({
        name: "",
        email:"",
        mobile:"",
        password:"",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const Signup = () => {
        const { name, email,mobile, password, reEnterPassword } = user
        if( name && email && mobile && password && (password === reEnterPassword)){
            axios.post("http://localhost:8080/user/signup", user)
            .then( res => {
                alert(res.data.message);
                // navigate.push("/signIn");
            });
        } else {
            alert("invlid input");
        }
        
    };

    return (
        <div className="signUp">
            {console.log("User", user)}
            <h1>Sign up</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="mobile" value={user.mobile} placeholder="Your mobile Number" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Signup}>Sign up</div>
            {/* <div>or</div> */}
            {/* <div className="gotosignin" onClick={() =>navigate.push("/signIn")}>Login</div> */}
        </div>
    )
}

export default Signup;