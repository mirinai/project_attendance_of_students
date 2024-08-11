import { Button, TextField, SvgIcon } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => navigate("/main");
  const handleLogin = () => {
    const userData = [{ tutor_email: id, tutor_password: password }];

    fetch("http://localhost:3001/tutor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log("Parsed JSON:", json);
        if (json.isLogin === "True") {
          handleClick();
        } else {
          alert(json.isLogin);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-3">
        <SvgIcon component={LockOpenIcon} inheritViewBox></SvgIcon>
        <h3 className="text-2xl">Sign in</h3>
        <TextField
          id="outlined-email-input"
          label="E-mail"
          type="email"
          autoComplete="email"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button onClick={handleClick} variant="contained">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
