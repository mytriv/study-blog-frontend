import React from 'react';
import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {SignupPage} from "./pages/SignupPage";
import {VerifyPage} from "./pages/VerifyPage";
import {
  Switch,
  Route, Redirect
} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {IsUserAuthGuard} from "./guard/IsUserAuthGuard/IsUserAuthGuard";
import {useUserLoad} from "./sharedHooks/useUserLoad.hook";
import {MyArticlesPage} from "./pages/MyArticlesPage";
import {ArticleManagementPage} from "./pages/ArticleManagementPage";

function App() {

  useUserLoad()

  return (<>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
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
            <HomePage />
        </Route>
        <Route path={"/myarticles"}>
          <IsUserAuthGuard>
            <MyArticlesPage/>
          </IsUserAuthGuard>
        </Route>
        <Route path={"/articles/create"}>
          <IsUserAuthGuard>
            <ArticleManagementPage/>
          </IsUserAuthGuard>
        </Route>
        <Route path={"/articles/:articleId/management"}>
          <IsUserAuthGuard>
            <ArticleManagementPage/>
          </IsUserAuthGuard>
        </Route>
      </Switch>
  </>);
}

export default App;
