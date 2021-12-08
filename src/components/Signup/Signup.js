import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";


import checkJwtToken from "../lib/CheckJwtToken";
import FirstNameValidator from "../lib/FirstNameValidator";
import LastNameValidator from "../lib/LastNameValidator";
import EmailValidator from "../lib/EmailValidator";
import UserNameValidator from "../lib/UserNameValidator";
import PasswordValidator from "../lib/PasswordValidator";


function SignUp(){
    const[firstName,handleFirstNameOnChange,firstNameError,setFirstNameOnFocus,setFirstNameOnBlur]=FirstNameValidator();
    const[lastName,handleLastNameOnChange,LastNameError,setOnFocus,setOnBlur]=LastNameValidator();
    const[userName,handleUserNameOnChange, userNameError,userNameOnFocus,userNameOnBlur]=UserNameValidator();
    const[email,handleEmailOnChange,emailError,setEmailOnFocus,setEmailOnBlur]=EmailValidator();
    const[password,handlePwOnChange,passwordError,setPwOnFocus,setPwOnBlur]=PasswordValidator();
    // const[CheckJwtToken]=checkJwtToken();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            let payload = await axios.post(
                "http://localhost:3001/api/users/create-user",
                {
                    firstName,
                    lastName,
                    userName,
                    email,
                    password,
                },
                );
                console.log(payload);
        }catch(e){
            console.log(e);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Please Sign Up</h1>
                {/* First Name */}
                <div>
                    <input
                    type="text"
                    onChange={handleFirstNameOnChange}
                    onFocus={()=>setFirstNameOnFocus(true)} 
                    onBlur={() => setFirstNameOnBlur(true)}
                    >
                    </input>
                    <label>First Name</label>
                </div>
                <div>{firstNameError && firstNameError}</div>
                {/* Last Name */}
                <div>
                    <input
                    type="text"
                    onChange={handleLastNameOnChange} 
                    onFocus={()=>setOnFocus(true)} 
                    onBlur={() => setOnBlur(true)}
                    >
                    </input>
                    <label>Last Name</label>
                </div>
                <div>{LastNameError && LastNameError}</div>
                {/* Username */}
                <div>
                    <input
                    type="text"
                    onChange={handleUserNameOnChange} 
                    onFocus={()=>userNameOnFocus(true)} 
                    onBlur={() => userNameOnBlur(true)}
                    >
                    </input>
                    <label>UserName</label>
                </div>
                <div>{userNameError && userNameError}</div>
                {/* Email address */}
                <div>
                    <input
                    type="text"
                    onChange={handleEmailOnChange} 
                    onFocus={()=>setEmailOnFocus(true)} 
                    onBlur={() => setEmailOnBlur(true)}
                    >
                    </input>
                    <label>Email addres</label>
                </div>
                <div>{emailError && emailError}</div>
                {/* Password */}
                <div>
                    <input
                    type="text"
                    onChange={handlePwOnChange} 
                    onFocus={()=>setPwOnFocus(true)} 
                    onBlur={() => setPwOnBlur(true)}
                    >
                    </input>
                    <label>Password</label>
                </div>
                <div>{passwordError && passwordError}</div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUp;