import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//認証情報の初期化
const initialState = {
  isAuth: false, //認証済みかどうか
  user: undefined, // ユーザー情報（Cognitoから取得）
  //   token: null, // アクセストークンまたはIDトークン
  //   loading: false, // 認証リクエスト中かどうか
  //   error: null,
};

// const signOutRedirect = () => {
//   const clientId = "6ehpfv3e4jalpbuvbploov12qh";
//   const logoutUri = "http://localhost:5173/Auth";
//   const cognitoDomain =
//     "https://ap-northeast-1wfzavgr0h.auth.ap-northeast-1.amazoncognito.com";
//   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
//     logoutUri
//   )}`;
// };

export const asyncSignOut = createAsyncThunk("signout", async (_, thunkAPI) => {
  try {
    await Promise.resolve();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const authSlice = createSlice({
  //nameはuseSelectorからアクセスする時の名前
  name: "auth",
  //stateのこと
  initialState,
  //以下のreducersの中にactioncreaterが含まれる
  reducers: {
    //サインイン
    //reducerとして定義されているが以下はaction(=dispatchとして通知するもの)
    signIn: (state) => {
      state.isAuth = true;
    },
    //サインアウト
    //reducerとして定義されているが以下はaction(=dispatchとして通知するもの)
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
