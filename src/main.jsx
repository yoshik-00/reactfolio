import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducks/store/store.js";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_wfzavgr0h",
  client_id: "6ehpfv3e4jalpbuvbploov12qh",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "openid email",
};
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <AuthProvider {...cognitoAuthConfig}>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Provider>
  </>
);
