import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import checkJwtToken from "../lib/CheckJwtToken";
import FirstNameValidator from "../lib/FirstNameValidator";
import LastNameValidator from "../lib/LastNameValidator";
import UserNameValidator from "../lib/UserNameValidator";
import PasswordValidator from "../lib/PasswordValidator";
import AxiosBackend from "../lib/axiosBackend";
import "./Profile.css";

function UpdateProfile() {
  const [
    firstName,
    handleFirstNameOnChange,
    firstNameError,
    setFirstNameOnFocus,
    setFirstNameOnBlur,
  ] = FirstNameValidator();
  const [
    lastName,
    handleLastNameOnChange,
    LastNameError,
    setOnFocus,
    setOnBlur,
  ] = LastNameValidator();
  const [
    userName,
    handleUserNameOnChange,
    userNameError,
    userNameOnFocus,
    userNameOnBlur,
  ] = UserNameValidator();
  const [password, handlePwOnChange, passwordError, setPwOnFocus, setPwOnBlur] =
    PasswordValidator();
  const [comfirmPassword, setComfirmPassword] = useState("");

  const navigate = useNavigate();
  const { CheckToken } = checkJwtToken();
  useEffect(() => {
    if (CheckToken()) {
      navigate("/profile");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let payload = await AxiosBackend.put("/api/users/update-profile", {
        firstName,
        lastName,
        userName,
        password,
        comfirmPassword,
      });
      toast.success("Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(payload);
    } catch (e) {
      toast.error(e.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <div className="form-div-signin">
        <div style={{ margin: 40, width: 300 }}>
          <Link to={"/mylist"} className="nav-link">
            <h1 style={{ color: "white" }}> My Favorites</h1>
          </Link>
        </div>
        <form style={{ marginTop: 100, color: "#fff" }} onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Update Profile</h1>
          {/* First Name */}
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInput"
              placeholder="First Name"
              type="text"
              onChange={handleFirstNameOnChange}
              onFocus={() => setFirstNameOnFocus(true)}
              onBlur={() => setFirstNameOnBlur(true)}
            ></input>
          </div>
          <div>{firstNameError && firstNameError}</div>
          {/* Last Name */}
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInput"
              placeholder="Last Name"
              type="text"
              onChange={handleLastNameOnChange}
              onFocus={() => setOnFocus(true)}
              onBlur={() => setOnBlur(true)}
            ></input>
          </div>
          <div>{LastNameError && LastNameError}</div>
          {/* Username */}
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInput"
              placeholder="Username"
              type="text"
              onChange={handleUserNameOnChange}
              onFocus={() => userNameOnFocus(true)}
              onBlur={() => userNameOnBlur(true)}
            ></input>
          </div>
          <div>{userNameError && userNameError}</div>
          {/* Password */}
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              type="text"
              onChange={handlePwOnChange}
              onFocus={() => setPwOnFocus(true)}
              onBlur={() => setPwOnBlur(true)}
            ></input>
          </div>
          <div>{passwordError && passwordError}</div>
          {/* Comfirm Password */}
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingPassword"
              placeholder="Comfirm Password"
              type="text"
              onChange={(e) => setComfirmPassword(e.target.value)}
              onFocus={() => setPwOnFocus(true)}
              onBlur={() => setPwOnBlur(true)}
            ></input>
          </div>
          <div className="checkbox mb-3"></div>
          <button
            className="w-100 btn btn-lg btn-primary"
            style={{
              backgroundColor: "red",
              color: "#fff",
              borderRadius: 5,
              height: 50,
              marginTop: 5,
              cursor: "pointer",
              width: 310,
            }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;
