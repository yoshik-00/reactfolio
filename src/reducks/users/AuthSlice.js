import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//initial
const initialState = {
  isAuth: false,
  user: undefined,
  //   token: null,
  //   loading: false,
  //   error: null,
};

export const asyncSignOut = createAsyncThunk("signout", async (_, thunkAPI) => {
  try {
    await Promise.resolve();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const authSlice = createSlice({
  //The name used to access data from useSelector
  name: "auth",
  //state
  initialState,
  //Includes the action creator following reducers
  reducers: {
    //action(=notify as dispatch)
    signIn: (state) => {
      state.isAuth = true;
    },
    //action(=notify as dispatch)
    signOut: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncSignOut.fulfilled, (state) => {
      state.isAuth = false;
      state.username = initialState.username;
    });
    builder.addCase(asyncSignOut.rejected, (state, action) => {
      state.error = action.error;
      state.isAuth = false;
      state.username = initialState.username;
    });
  },
});
export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
