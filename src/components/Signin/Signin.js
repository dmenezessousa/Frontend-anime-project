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
    

    return (
        <div className="">
            <form onSubmit="">
                <h1>Please Sign In</h1>
                {/* Email address */}
                <div>
                    <input
                    type="email"
                    placeholder="enter email"
                    onChange=""
                    ></input>
                    <label>Email address</label>
                </div>
                {/* Password */}
                <div>
                    <input
                    type="text"
                    placeholder="enter password"
                    onChange=""
                    ></input>
                    <label>Password</label>
                </div>
            </form>
        </div>
    )
}

export default Signin;
