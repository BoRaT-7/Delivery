const googleProvider = new GoogleAuthProvider();

const registerUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};

const logOut = () => {
  setLoading(true);
  return signOut(auth);
};

const authInfo = {
  user,
  loading,
  registerUser,
  signInUser,
  googleSignIn,
  logOut,
};