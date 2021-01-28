import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";
import LoaderComponent from "../Loader/Loader";

const HomePage = lazy(() =>
  import("../../pages/Home/Home" /* webpackChunkName: "HomePage" */)
);
const LoginPage = lazy(() =>
  import("../../pages/Login/Login" /* webpackChunkName: "LoginPage" */)
);
const RegisterPage = lazy(() =>
  import("../../pages/Register/Register" /* webpackChunkName: "RegisterPage" */)
);
const ContactsPage = lazy(() =>
  import("../../pages/Contacts/Contacts" /* webpackChunkName: "ContactsPage" */)
);
export default class App extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <Layout>
        <Suspense fallback={<LoaderComponent />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />

            <Route path="/register" component={RegisterPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
