import { Button, TextField, SvgIcon } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export type LoginProps = {
  tutor_email?: string;
  tutor_password?: string;
};

const Login = ({ tutor_email, tutor_password }: LoginProps) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    console.log("1212");
    await axios
      .post("http://localhost:3001/tutor/login", { id, password })
      .then((res) => {
        console.log("then 다음");
        localStorage.setItem("id", id);
        localStorage.setItem("password", password);
        navigate("/main");
      });
  };

  const handleLogin = () => {
    console.log("123123");

    const userData = { tutor_email: id, tutor_password: password };

    console.log("12414");
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
        <Button onClick={handleLogin} variant="contained">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
