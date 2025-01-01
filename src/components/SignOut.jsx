import { useAuth } from "react-oidc-context";
import { VscSignOut } from "react-icons/vsc";

const SignOut = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "6ehpfv3e4jalpbuvbploov12qh";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain =
      "https://ap-northeast-1wfzavgr0h.auth.ap-northeast-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };
  return (
    <button
      className="flex items-center my-8 hover:text-selectedText transition-all duration-300"
      onClick={() => signOutRedirect()}
    >
      <VscSignOut size={20} />
    </button>
  );
};

export default SignOut;
