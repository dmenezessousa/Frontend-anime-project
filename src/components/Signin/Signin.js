//imports from libraries
import React,{useEffect,useContext} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

//imports from my app
import emailValidator from '../lib/EmailValidator';
import passwordValidator from '../lib/PasswordValidator';
import checkJwtToken from '../lib/CheckJwtToken';
import {userContext} from '../Context/userContext';

function Signin() {
    const [email,handleEmailOnChange,emailError] = emailValidator();
    const [password,handlePwOnChange,passwordError,] = passwordValidator();
    // const {CheckJwtToken}=checkJwtToken()
    const {dispatch}=useContext(userContext);

    async function handleSubmit(e){
        e.preventDefault();
        try{
            let payload = await axios.get(
                "http://localhost:3001/api/users/login",
                {
                    email,
                    password,
                }
            );
            window.localStorage.setItem("jwtToken",payload.data.payload);
            let userToken = jwtDecode(payload.data.payload);
            
            dispatch({
                type:"LOGIN",
                email:userToken.email,
                userName:userToken.userName,
            })
        }catch(e){
            console.log(e);
        };
    };
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <h1>Please Sign In</h1>
                {/* Email address */}
                <div>
                    <input
                    type="email"
                    placeholder="enter email"
                    onChange={handleEmailOnChange}
                    ></input>
                    <label>Email address</label>
                </div>
                <div>{emailError && emailError}</div>
                {/* Password */}
                <div>
                    <input
                    type="text"
                    placeholder="enter password"
                    onChange={handlePwOnChange} 
                    ></input>
                    <label>Password</label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Signin;
