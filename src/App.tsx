import React from 'react';
import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {SignupPage} from "./pages/SignupPage";
import {VerifyPage} from "./pages/VerifyPage";
import {
  Switch,
  Route
} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {IsUserAuthGuard} from "./guard/IsUserAuthGuard/IsUserAuthGuard";
import {useUserLoad} from "./sharedHooks/useUserLoad.hook";

function App() {

  useUserLoad()

  return (<>
      <Switch>
        <Route path={"/auth/login"}>
          <LoginPage />
        </Route>
        <Route path={"/auth/signup"}>
          <SignupPage />
        </Route>
        <Route path={"/auth/verify"}>
          <IsUserAuthGuard>
            <VerifyPage />
          </IsUserAuthGuard>
        </Route>
        <Route path={"/home"}>
          <IsUserAuthGuard>
            <HomePage />
          </IsUserAuthGuard>
        </Route>
      </Switch>
  </>);
}

export default App;
