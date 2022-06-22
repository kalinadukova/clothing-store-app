import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import { useDispatch } from "react-redux/es/exports";

// import { setCurrentUser } from "./store/user/user.action";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser,
// } from "./utils/firebase/firebase.util";

import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";

import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
