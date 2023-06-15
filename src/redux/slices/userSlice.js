import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.REACT_APP_API_HOST;

const nameSpace = "user";

const initialState = {
  userDetails: [],
  loading: false,
  error: null,
};

export const signUp = createAsyncThunk(
  `${nameSpace}/signUp`,
  async (userData, thunkAPI) => {
    try {
      console.log("User Data : ", userData);
      const result = await axios.post(`${API}register/Frontend-user`, userData);
      console.log("Result : ", result);
      return result.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const signIn = createAsyncThunk(
  `${nameSpace}/signIn`,
  async (userData, thunkAPI) => {
    const result = await axios.post(`${API}login/Frontend-user`, userData);
    return result.data;
  }
);

// const header = {
//   "Content-Type": "application/json",
// };
const userSlice = createSlice({
  name: nameSpace,
  initialState,
  reducers: {},
  // async signUp(state, action) {
  //   console.log("Signup called");
  //   const { signUpData } = await axios.post(
  //     `${API}register/Frontend-user`,
  //     action.payload
  //   );
  //   console.log("SignUp :", signUpData);
  //   state.userDetails = signUpData;
  //   state.loading = false;
  //   state.error = null;
  // },
  //   async signIn(state, action) {
  //     const { signInData } = await axios.get(
  //       `${API}login/Frontend-user`,
  //       action.payloads
  //     );
  //     console.log("SignIn :", signInData);
  //     state.userDetails = signInData;
  //     state.loading = false;
  //     state.error = null;
  //   },
  // },
  extraReducers(builder) {
    console.log("Builder : ", builder);
    builder.addCase(signUp.pending, (state, action) => {
      state.userDetails = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log("State : ", state, "Action:", action);
      state.userDetails = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.userDetails = null;
      state.loading = false;
      state.error = action.error;
    });
  },
  // extraReducers: {
  //   [signIn.pending](state) {
  //     state.userDetails = null;
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   [signIn.fulfilled](state, { payload }) {
  //     state.loading = false;
  //     state.userDetails = payload;
  //     state.error = null;
  //   },
  //   [signIn.rejected](state, { error }) {
  //     state.userDetails = null;
  //     state.loading = false;
  //     state.error = error;
  //   },
  //   [signUp.pending](state) {
  //     state.userDetails = null;
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   [signUp.fulfilled](state, { action }) {
  //     state.userDetails = action;
  //     state.loading = false;
  //     state.error = null;
  //   },
  //   [signUp.rejected](state, { error }) {
  //     state.userDetails = null;
  //     state.loading = false;
  //     state.error = error;
  //   },
  // },
});

export const userDetailsState = (state) => state.user.userDetails;
export const loadingState = (state) => state.user.loading;
export const errorState = (state) => state.user.error;
export default userSlice.reducer;
// export const { signUp } = userSlice.actions;
