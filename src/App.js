import { Routes, Route } from "react-router-dom";

import { useEffect, lazy, Suspense } from "react";

import { useDispatch } from "react-redux/es/exports";

import { GlobalStyle } from "./global.styles";

// import { setCurrentUser } from "./store/user/user.action";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser,
// } from "./utils/firebase/firebase.util";

// import Navigation from "./routes/Navigation/Navigation";
// import Authentication from "./routes/Authentication/Authentication";

// import Home from "./routes/Home/Home";
// import Shop from "./routes/Shop/Shop";
// import Checkout from "./routes/Checkout/Checkout";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import("./routes/Home/Home")); // dynamic import; react will not render this until it actually fetches it when it's required
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);
const Navigation = lazy(() => import("./routes/Navigation/Navigation"));
const Shop = lazy(() => import("./routes/Shop/Shop"));
const Checkout = lazy(() => import("./routes/Checkout/Checkout"));

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
    <>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
