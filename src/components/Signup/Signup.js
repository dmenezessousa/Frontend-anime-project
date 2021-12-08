import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";


import CheckJwtToken from "../lib/CheckJwtToken";
import FirstNameValidator from "../lib/FirstNameValidator";
import EmailValidator from "../lib/EmailValidator";
import UserNameValidator from "../lib/UserNameValidator";
import PasswordValidator from "../lib/PasswordValidator";


function SignUp(){
    return(
        <div>
            <form>
                <h1>Please Sign Up</h1>
                {/* First Name */}
                <div>
                    <input
                    type="text"
                    >
                    </input>
                    <label>First Name</label>
                </div>
                {/* Last Name */}
                <div>
                    <input
                    type="text"
                    >
                    </input>
                    <label>Last Name</label>
                </div>
                {/* Username */}
                <div>
                    <input
                    type="text"
                    >
                    </input>
                    <label>UserName</label>
                </div>
                {/* Email address */}
                <div>
                    <input
                    type="text"
                    >
                    </input>
                    <label>Email addres</label>
                </div>
                {/* Password */}
                <div>
                    <input
                    type="text"
                    >
                    </input>
                    <label>Password</label>
                </div>
            </form>
        </div>
    )
};

export default SignUp;