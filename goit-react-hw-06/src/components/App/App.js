import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm.js";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { CSSTransition } from "react-transition-group";
import titleTransition from "./App.module.css";
import Error from "../Error/Error";
import { addNewContact } from "../../redux/actions/contactsAction";
import { connect } from "react-redux";
import "./filterContactsTransition.css";
import "./error.css";

class App extends Component {
  state = {
    //  contacts:[],
    error: null,
  };

  componentDidMount() {
    if (this.state.error) {
      this.setState({ error: null });
    }
    const contactsFromLocalStorage = localStorage.getItem("contacts");

    if (contactsFromLocalStorage) {
      JSON.parse(contactsFromLocalStorage).map((item) => {
        this.props.addNewContact(item);
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.clear();
    localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  }

  handleCheckexistContact = (error) => {
    if (error) {
      this.setState({ error: true });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <>
        <CSSTransition
          in={error}
          classNames="qq"
          timeout={3000}
          unmountOnExit
          onEntered={() => this.setState({ error: false })}
        >
          <Error />
        </CSSTransition>
        <div>
          <CSSTransition
            in={true}
            appear
            classNames={titleTransition}
            timeout={500}
          >
            <h1 className={titleTransition.headline}>Phonebook</h1>
          </CSSTransition>
          <ContactForm handleCheckexistContact={this.handleCheckexistContact} />
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { contacts: state.contacts.items };
};
const mapDispatchToProps = { addNewContact };

export default connect(mapStateToProps, mapDispatchToProps)(App);
