// import {
//   SIGN_IN_USER_REQUEST,
//   SIGN_IN_USER_SUCCESS,
//   SIGN_IN_USER_FAILED,
// } from "../constants/loginUserConstants.js";

// const logInInitialState = {
//   loading: false,
//   userDetails: null,
//   error: null,
// };

// export const logInReducer = (state = logInInitialState, action) => {
//   switch (action.type) {
//     case SIGN_IN_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         userDetails: null,
//         error: null,
//       };
//     case SIGN_IN_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         userDetails: action.payload,
//         error: null,
//       };
//     case SIGN_IN_USER_FAILED:
//       return {
//         ...state,
//         loading: false,
//         userDetails: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
