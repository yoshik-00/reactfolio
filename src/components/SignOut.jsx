import { useAuth } from "react-oidc-context";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignOut } from "../reducks/users/AuthSlice";
import { Navigate, useNavigate } from "react-router";

const SignOut = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutRedirect = () => {
    const clientId = "6ehpfv3e4jalpbuvbploov12qh";
    const logoutUri = "http://localhost:5173/auth";
    const cognitoDomain =
      "https://ap-northeast-1wfzavgr0h.auth.ap-northeast-1.amazoncognito.com";
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
      <VscSignOut size={20} />
    </button>
  );
};

export default SignOut;
