import * as api from "../api";
import { setCurrentUser } from "./currentUser";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "SIGNUP", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    alert(error.response.data);
    // toast.error(error.response.data, { position: "top-center" });
  }
};

export const login = (authData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.logIn(authData);
      dispatch({ type: "LOGIN", data });
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      navigate("/");
    } catch (error) {
        alert(error.response.data);
    }
  };