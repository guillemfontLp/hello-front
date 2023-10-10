import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "layouts";

import "react-toastify/dist/ReactToastify.css";
import { setAuthToken } from "api";
import { useAuth } from "hooks";
import PrivateRoute from "components/PrivateRoute";
import state, { useAppSelector } from "state";
import { logoutUser } from "state/user/actions";

const Home = lazy(() => import("pages/Home"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const MyStorage = lazy(() => import("pages/MyStorage"));
const Referrals = lazy(() => import("pages/Referrals"));
const Shared = lazy(() => import("pages/Shared"));
const Recent = lazy(() => import("pages/Recent"));
const Deleted = lazy(() => import("pages/Deleted"));
const Migration = lazy(() => import("pages/Migration"));
const Statistics = lazy(() => import("pages/Api/Statistics"));
const Api = lazy(() => import("pages/Api"));

const Login = lazy(() => import("pages/Auth/Login"));


function App() {
  useEffect(() => {
    document.title = "hello.app | Stats";
  }, []);
  const { load } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      setAuthToken(token);
    }

    load();
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) state.dispatch(logoutUser());
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stats" element={<Statistics />} />
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<PrivateRoute component={AppLayout} />}>
          <Route index element={<Api />} />
          <Route path="/space/dashboard" element={<Dashboard />} />
          <Route path="/space/my-storage" element={<MyStorage />} />
          <Route path="/space/folder/*" element={<MyStorage />} />
          <Route path="/space/shared-with-me" element={<Shared />} />
          <Route path="/space/recent" element={<Recent />} />
          <Route path="/space/referrals" element={<Referrals />} />
          <Route path="/space/deleted" element={<Deleted />} />
          <Route path="/space/migration" element={<Migration />} />
        </Route>

        <Route path="/space/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
