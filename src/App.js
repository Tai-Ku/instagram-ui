import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserConText from "./context/user";

import "./styles/app.css";
// import Login from "./pages/login";
const Login = lazy(() => import("./pages/login"));
const SingUp = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));
const DashBoard = lazy(() => import("./pages/dashboard"));
function App() {
  const { user } = useAuthListener();
  return (
    <UserConText.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p> loading</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SINGN_UP} element={<SingUp />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route path={ROUTES.DASBOARD} element={<DashBoard />} />
          </Routes>
        </Suspense>
      </Router>
    </UserConText.Provider>
  );
}

export default App;
