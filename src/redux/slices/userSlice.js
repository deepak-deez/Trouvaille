import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.REACT_APP_API_HOST;

const nameSpace = "user";

const initialState = {
  userDetails: localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
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
        localStorage.setItem("userDetails", JSON.stringify(results.data));
        return results;
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
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload.userDetails;
    },
  },

  extraReducers(builder) {
    builder.addCase(signUp.pending, (state, action) => {
      state.userDetails = null;
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.userDetails = action.payload.data.message;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.userDetails = null;
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });

    builder.addCase(signIn.pending, (state, action) => {
      state.success = false;
      state.userDetails = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log("Payload:", action.payload);
      state.userDetails = action.payload.data;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.userDetails = null;
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
