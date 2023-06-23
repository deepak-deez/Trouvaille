import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.REACT_APP_API_HOST;

const nameSpace = "user";

const initialState = {
  FrontendUserData: localStorage.getItem("FrontendUserData")
    ? JSON.parse(localStorage.getItem("FrontendUserData"))
    : null,
  loading: false,
  error: null,
  success: false,
};

export const signUp = createAsyncThunk(
  `${nameSpace}/signUp`,
  async (userData, { rejectWithValue }, thunkAPI) => {
    try {
      const result = await axios.post(`${API}register/Frontend-user`, userData);
      if (result) return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const signIn = createAsyncThunk(
  `${nameSpace}/signIn`,
  async (userData, { rejectWithValue }, thunkAPI) => {
    try {
      const results = await axios.post(`${API}login/Frontend-user`, userData);
      if (results) {
        console.log("Slice result :", results);
        localStorage.setItem("FrontendUserData", JSON.stringify(results.data));
        return results;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// export const getUser = createAsyncThunk(
//   `${nameSpace}/getUser`,
//   async (userData, { rejectWithValue }) => {
//     try {
//       const result = await axios.get(
//         `${API}database/${userData.userType}/${userData.id}`
//       );
//       if (result) return result;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  `${nameSpace}/updateUser`,
  async (userData, { rejectWithValue }) => {
    try {
      console.log(`${API}update/${userData.type}/${userData.id}`);
      const result = await axios.post(
        `${API}update/${userData.type}/${userData.id}`,
        userData.formdata
      );
      console.log(result);
      if (result) {
        console.log("Slice result :", result);
        localStorage.removeItem("FrontendUserData");
        localStorage.setItem("FrontendUserData", JSON.stringify(result.data));
        return result;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: nameSpace,
  initialState,
  reducers: {
    resetState: (state, action) => {
      state.success = action.payload.success;
    },
    updateUserDetails: (state) => {
      state.FrontendUserData = null;
      state.success = false;
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers(builder) {
    // For signUp
    builder.addCase(signUp.pending, (state, action) => {
      state.FrontendUserData = null;
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.FrontendUserData = action.payload.data.message;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.FrontendUserData = null;
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });

    // For signIn
    builder.addCase(signIn.pending, (state, action) => {
      state.success = false;
      state.FrontendUserData = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log("Payload:", action.payload);
      state.FrontendUserData = action.payload.data;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.FrontendUserData = null;
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });

    // // For get user details
    // builder.addCase(getUser.pending, (state, action) => {
    //   state.success = false;
    //   state.FrontendUserData = null;
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(getUser.fulfilled, (state, action) => {
    //   console.log("Payload:", action.payload);
    //   state.FrontendUserData = action.payload.data;
    //   state.loading = false;
    //   state.error = null;
    //   state.success = true;
    // });
    // builder.addCase(getUser.rejected, (state, action) => {
    //   state.FrontendUserData = null;
    //   state.loading = false;
    //   state.error = action.payload;
    //   state.success = false;
    // });

    // For update user details
    builder.addCase(updateUser.pending, (state, action) => {
      state.success = false;
      state.FrontendUserData = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log("Payload:", action.payload);
      state.FrontendUserData = action.payload.data;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.FrontendUserData = null;
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

// export const userDetailsState = (state) => state.user.userDetails;
// export const loadingState = (state) => state.user.loading;
// export const errorState = (state) => state.user.error;
export default userSlice.reducer;
export const { resetState, updateUserDetails } = userSlice.actions;
