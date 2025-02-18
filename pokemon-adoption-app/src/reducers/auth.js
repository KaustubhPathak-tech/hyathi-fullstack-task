const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

    case "SIGNUP":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

    default:
      return state;
  }
};

export default authReducer;
