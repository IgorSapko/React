import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm.js";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { CSSTransition } from "react-transition-group";
import titleTransition from "./App.module.css";
import Error from "../Error/Error";
import "./filterContactsTransition.css";
import "./error.css";

export default class App extends Component {
  state = {
 
    error: null,
  };

  componentDidMount() {
    if (this.state.error) {
      this.setState({ error: null });
    }
  }
 
  render() {
    const {  error } = this.state;
    // console.log("error", error);

      return error ? (
      <CSSTransition in={true} classNames="qq" timeout={3000}>
        <Error />
      </CSSTransition>
    ) : (
      <div>
        <CSSTransition
          in={true}
          appear
          classNames={titleTransition}
          timeout={500}
        >
          <h1 className={titleTransition.headline}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <CSSTransition
          // in={contacts.length > 1}
          in={true}
          timeout={1000}
          classNames="filter"
          unmountOnExit
        >
          <div>
            <h2>Find contacts by name</h2>
            <Filter />
          </div>
        </CSSTransition>
        <ContactList></ContactList>
      </div>
    );
  }
}
