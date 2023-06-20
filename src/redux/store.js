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
import tripPackageSlice from "./slices/tripPackageSlice";
import bookingSlice from "./slices/bookingSlice";
import featureSlice from "./slices/featureSlice";

// const middleware = () => {
//   thunk: true;
//   immutableCheck: true;
//   serializableCheck: true;
// };

const store = configureStore({
  reducer: {
    user: userSlice,
    tripPackage: tripPackageSlice,
    booking: bookingSlice,
    feature: featureSlice,
  },
});

export default store;
