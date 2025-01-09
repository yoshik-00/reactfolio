import { useAuth } from "react-oidc-context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";
import { signIn } from "../reducks/users/AuthSlice";

function Auth() {
  const navigate = useNavigate();
  const auth = useAuth();
  const dispatch = useDispatch();
  // const { isAuth } = useSelector((store) => store.auth);

  // if (auth.isAuthenticated) {
  //   dispatch(signIn());
  // } else {
  //   dispatch(signOut());
  // }

  if (auth.isAuthenticated) {
    // if (isAuth) {
    dispatch(signIn());
    navigate("/", { replace: true });
  } else if (auth.isLoading) {
    return <div>Loading...</div>;
  } else if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  } else {
    return auth.signinRedirect();
  }

  // if (auth.isAuthenticated) {
  //   dispatch(signIn());
  //   navigate("/", { replace: true });
  // }

  //認証済
  // if (auth.isAuthenticated) {
  //   return (
  //     <div>
  //       authenticated! Redirecting to Home...
  //       {/* <pre> Hello: {auth.user?.profile.email} </pre>
  //       <pre> ID Token: {auth.user?.id_token} </pre>
  //       <pre> Access Token: {auth.user?.access_token} </pre>
  //       <pre> Refresh Token: {auth.user?.refresh_token} </pre> */}
  //     </div>
  //   );
  // }
  // if (auth.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (auth.error) {
  //   return <div>Encountering error... {auth.error.message}</div>;
  // }

  //未認証
  // return auth.signinRedirect();
}

export default Auth;
