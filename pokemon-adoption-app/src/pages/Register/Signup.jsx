import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {signup} from "../../actions/auth"

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup({ name, email, password }, navigate));
  };

  return (
    <div>
      <Paper elevation={24}>
        <br />
        <Typography variant="h7" component="h2" id="modal-modal-title">
          Register
        </Typography>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Phone or email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />
        <br />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
        />
        <br />
        <br />
        <Button variant="contained" onClick={handleSignup}>
          Register
        </Button>
        <br />
        <br />
      </Paper>
    </div>
  );
};

export default Signup;
