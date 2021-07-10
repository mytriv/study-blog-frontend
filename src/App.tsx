import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {SignupPage} from "./pages/SignupPage";
import {VerifyPage} from "./pages/VerifyPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (<>
    <Router>
      <Switch>
        <Route path={"/auth/login"}>
          <LoginPage />
        </Route>
        <Route path={"/auth/signup"}>
          <SignupPage />
        </Route>
        <Route path={"/auth/verify"}>
          <VerifyPage />
        </Route>
      </Switch>
    </Router>
  </>);
}

export default App;
