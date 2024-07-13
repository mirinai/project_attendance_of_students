import { Button, TextField, SvgIcon } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/main");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-3">
        <SvgIcon component={LockOpenIcon} inheritViewBox></SvgIcon>

        <h3 className="text-2xl">Sign in</h3>
        <TextField
          id="outlined-password-input"
          label="E-mail"
          type="Required"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button onClick={handleClick} variant="contained">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
