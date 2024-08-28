import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [googleUserData, setGoogleUserData] = useState();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // creating new user using email and password
  const creatNewsUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in existing user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in using google popup
  const signInUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign in using github
  const signInUserWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // set users display name
  const userDisplayName = (userName) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };

  // sign out logged in user with email and password
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // track the authentication state of the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log(user);

  const userContext = {
    user,
    loading,
    creatNewsUser,
    userDisplayName,
    signInUser,
    signInUserWithGoogle,
    googleUserData,
    setGoogleUserData,
    signInUserWithGithub,
    signOutUser,
  };

  return (
    <div>
      <AuthContext.Provider value={userContext}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
