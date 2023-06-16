// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// import rootReducer from "./reducers";

// const initialState = {
//   logInUser: {
//     userDetails: JSON.parse(localStorage.getItem("userDetails")),
//   },
// };

// const middleware = [thunk];
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

// const middleware = () => {
//   thunk: true;
//   immutableCheck: true;
//   serializableCheck: true;
// };
const store = configureStore({
  reducer: { user: userSlice },
});

export default store;
