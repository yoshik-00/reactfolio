import { useAuth } from "react-oidc-context";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignOut } from "../reducks/users/AuthSlice";
import { CLIENT_ID, DOMAIN, LOGOUT_URI } from "../lib/config";

const SignOut = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const signOutRedirect = () => {
    const clientId = CLIENT_ID;
    const logoutUri = LOGOUT_URI;
    const cognitoDomain = DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };
  const handleSignOut = async () => {
    try {
      const result = await dispatch(asyncSignOut());
      if (asyncSignOut.fulfilled.match(result)) {
        await auth.removeUser().then(signOutRedirect());
      } else {
        console.error("Sign out failed:", result.error.message);
      }
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };
  return (
    <button
      className="flex items-center my-8 hover:text-selectedText transition-all duration-300"
      onClick={handleSignOut}
    >
      <VscSignOut size={25} />
    </button>
  );
};

export default SignOut;
