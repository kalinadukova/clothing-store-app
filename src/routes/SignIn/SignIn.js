import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWitGoogleRedirect,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  useEffect(() => {
    async function getResult() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <button onClick={signInWitGoogleRedirect}>
        Sign In With Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
