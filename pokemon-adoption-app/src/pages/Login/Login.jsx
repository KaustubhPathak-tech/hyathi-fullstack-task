import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import "./Login.css"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };
  return (
    <div>
      
      <Paper elevation={24}>
        <Box className="login_box">
          <Typography id="modal-modal-title" variant="h7" component="h2">
            Sign in to Pokemon Adoption App
          </Typography>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button variant="outlined">Sign in with Google</Button>
            <br />
            <br />
            <div>
              <hr
                width="15%"
                style={{ display: "inline-block", marginRight: "20px" }}
              />{" "}
              <span>Or</span>
              <hr
                width="15%"
                style={{ display: "inline-block", marginLeft: "20px" }}
              />
            </div>
            <br />
            <TextField
              id="outlined-basic"
              label="Phone or email"
              variant="outlined"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br /> <br />
            <Button variant="contained" onClick={handleLogin}>
              Sign in
            </Button>
            <br /> <br />
            <Button variant="outlined">forgot password ?</Button>
            <br />
            <br />
            <Typography id="modal-modal-title" variant="h9" component="h5">
              Don't have an account ?{" "}
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "green" }}
              >
                Register
              </Link>
            </Typography>
          </div>
          <br />
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
