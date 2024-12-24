import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { signOut } from "aws-amplify/auth";
import Home from "../components/Home";

Amplify.configure(awsExports);

const Auth = () => {
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};

export default Auth;
