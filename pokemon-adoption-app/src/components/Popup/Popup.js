import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

import Box from "@mui/material/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Popup.css";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Popup(props) {
  const User = false;
  const [open, setOpen] = useState(!User);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch(login({ email, password }, navigate));
  };
  const handleClose = () => setOpen(false);
  const handleRegister = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/signup");
  };
  return props.trigger ? (
    <div className="popup">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            onClick={() => props.setTrigger(false)}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            {" "}
            <CloseRoundedIcon fontSize="small" />
          </button>
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
                style={{ textDecoration: "none", color: "green" }}
                onClick={handleRegister}
              >
                Register
              </Link>
            </Typography>
          </div>
        </Box>
      </Modal>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
