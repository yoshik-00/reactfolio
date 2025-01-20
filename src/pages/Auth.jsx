import { useAuth } from "react-oidc-context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../reducks/users/AuthSlice";

function Auth() {
  const navigate = useNavigate();
  const auth = useAuth();
  const dispatch = useDispatch();

  if (auth.isAuthenticated) {
    dispatch(signIn());
    navigate("/", { replace: true });
  } else if (auth.isLoading) {
    return <div>Loading...</div>;
  } else if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  } else {
    return auth.signinRedirect();
  }
}

export default Auth;
