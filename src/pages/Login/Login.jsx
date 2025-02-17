import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  auth,
  getAuth,
  signInWithEmailAndPassword,
} from "../../../firebase.js";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("Please provide all fields");
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            toast.success(`${user.email} Login Successfully`);
            localStorage.setItem("user", user.uid);
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`Error => ${errorMessage}`);
          });
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <>
      <div className="loginPage">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter Your Email Address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Enter Your Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
