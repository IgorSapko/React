import React from "react";
import AuthForm from "../../components/Auth/AuthForm";

import { connect } from "react-redux";

function Login({ location, isAuth, history }) {
  console.log("");
  if (isAuth) {
    history.push("/");
  }
  return <AuthForm location={location} />;
}

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};
export default connect(mapStateToProps, null)(Login);
