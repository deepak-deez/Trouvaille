import axios from "axios";

import {
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILED,
} from "../constants/loginUserConstants.js";

const BASE_URL = process.env.REACT_APP_apiHost;

export const logInUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_IN_USER_REQUEST,
    });

    const config = { "Content-Type": "application/json" };
    const body = {
      email,
      password,
      type: "Frontend-user",
    };

    const { data } = await axios.post(
      `${BASE_URL}login/Frontend-user`,
      body,
      config
    );
    if (data.status == 200) {
      dispatch({
        type: SIGN_IN_USER_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userDetails", JSON.stringify(data));
      console.log(data);
    } else if (data.status == 500) {
      dispatch({
        type: SIGN_IN_USER_FAILED,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: SIGN_IN_USER_FAILED,
      payload: error,
    });
  }
};
