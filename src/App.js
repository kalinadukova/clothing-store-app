import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";

import Home from "./routes/Home/Home";

const Shop = () => {
  return <h1>This is the shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
