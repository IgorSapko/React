import React, { Component } from "react";
import {
  registerOperation,
  loginOperation,
} from "../../redux/operations/authOperations";
import { connect } from "react-redux";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  // componentDidMount() {
  //   console.log(this.props);
  // }

  handleChange = (e) => {
    console.log("e", e.target.value);
    console.log("this.state", this.state);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.location.pathname === "/login") {
      this.props.loginOperation({ ...this.state });
    } else {
      this.props.registerOperation({ ...this.state });
    }
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail:{" "}
          <input
            className="authFormInput"
            type="text"
            value={email}
            name="email"
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Password:{" "}
          <input
            className="authFormInput"
            name="password"
            value={password}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit" className="authFormButton">
          {this.props.location.pathname === "/login" ? "LOGIN" : "Register"}
        </button>
      </form>
    );
  }
}

const mapDiaspatchToProps = { registerOperation, loginOperation };

export default connect(null, mapDiaspatchToProps)(AuthForm);
