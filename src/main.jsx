import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducks/store/store.js";
import { AUTHORITY, CLIENT_ID, REDIRECT_URI } from "./lib/config.js";

const authority = AUTHORITY;
const clientId = CLIENT_ID;
const redirectUri = REDIRECT_URI;

const cognitoAuthConfig = {
  authority: authority,
  client_id: clientId,
  redirect_uri: redirectUri,
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
