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
import {MyArticlesPage} from "./pages/MyArticlesPage";
import {ArticleManagementPage} from "./pages/ArticleManagementPage";

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
          {/*<IsUserAuthGuard>*/}
            <HomePage />
         {/* </IsUserAuthGuard>*/}
        </Route>
        <Route path={"/myarticles"}>
          <MyArticlesPage/>
        </Route>
        <Route path={"/management"}>
          <ArticleManagementPage/>
        </Route>
      </Switch>
  </>);
}

export default App;
