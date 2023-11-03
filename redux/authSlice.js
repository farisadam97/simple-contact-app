import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../src/api/auth";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials);
      const { username, token } = response.data.data;

      return { username, token };
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          return rejectWithValue({
            error: data.message,
          });
        } else {
          return rejectWithValue({
            error: "An error occured",
          });
        }
      } else {
        return rejectWithValue({
          error: "Login failed",
        });
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload.username;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload.error;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
