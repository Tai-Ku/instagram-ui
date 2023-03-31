import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/app.css";
// import Login from "./pages/login";
const Login = lazy(() => import("./pages/login"));
const SingUp = lazy(() => import("./pages/signup"));
function App() {
  return (
    <Router>
      <Suspense fallback={<p> loading</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SINGN_UP} element={<SingUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
