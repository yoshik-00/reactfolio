import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const auth = useAuth();
  //認証済
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/?isAuthenticated=true");
    }
  }, [auth.isAuthenticated, navigate]);
  //認証済
  if (auth.isAuthenticated) {
    return (
      <div>
        authenticated! Redirecting to Home...
        {/* <pre> Hello: {auth.user?.profile.email} </pre>
          <pre> ID Token: {auth.user?.id_token} </pre>
          <pre> Access Token: {auth.user?.access_token} </pre>
          <pre> Refresh Token: {auth.user?.refresh_token} </pre> */}
      </div>
    );
  }
  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  //未認証
  return auth.signinRedirect();
}

export default Auth;
