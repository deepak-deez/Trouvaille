import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.REACT_APP_API_HOST;

const nameSpace = tripPackageData;

const initialState = {
  tripPackageData: localStorage.getItem("tripPackageData")
    ? JSON.parse(localStorage.getItem("tripPackageData"))
    : null,
  loading: false,
  error: null,
  success: false,
};

export const getAllPackages = createAsyncThunk(
  `${nameSpace}/getAllPackages`,
  async (userData, { rejectWithValue }) => {
    try {
      const result = await axios.get(`${API}get-module/trip-package`, userData);
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: nameSpace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllPackages.pending, (state, action) => {
      state.tripPackageData = null;
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(getAllPackages.fulfilled, (state, action) => {
      state.tripPackageData = action.payload.data.message;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(getAllPackages.rejected, (state, action) => {
      state.tripPackageData = null;
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});
