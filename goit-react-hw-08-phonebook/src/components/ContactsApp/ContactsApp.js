import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm.js";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { CSSTransition } from "react-transition-group";
import titleTransition from "./App.module.css";
import Error from "../Error/Error";
import NetworkError from "../NetworkError/NetworkError";
import { addNewContact } from "../../redux/actions/contactsAction";
import { resetError } from "../../redux/actions/errorAction";
import { connect } from "react-redux";
import {
  getContacts,
  getUserLocalId,
} from "../../redux/selectors/contactsSelectors.js";
import { getContactOperation } from "../../redux/operations/contactsOperations";
import "./filterContactsTransition.css";
import "./error.css";
import "./networkError.css";

class ContactsApp extends Component {
  state = {
    error: null,
  };

  componentDidMount() {
    console.log("this.props", this.props);
    if (!this.props.isAuth) {
    }
    const gotContactsFromDB = this.props.getContactOperation(
      this.props.userLocalId
    );
    console.log("gotContactsFromDB", gotContactsFromDB);
    if (this.state.error) {
      this.setState({ error: null });
    }
  }

  handleCheckexistContact = (name) => {
    if (name) {
      let existContactname;
      const isExistContact = this.props.contacts.some((contact) => {
        existContactname = contact.name;
        return existContactname.toLocaleLowerCase() === name.toLowerCase();
      });
      if (isExistContact) {
        this.setState({ error: true });
        return isExistContact;
      }
    }
  };

  render() {
    const { error } = this.state;
    const { netError, contacts } = this.props;

    return (
      <div>
        <CSSTransition
          in={error}
          classNames="qq"
          timeout={3000}
          onEntered={() => this.setState({ error: false })}
          unmountOnExit
        >
          <Error />
        </CSSTransition>

        <CSSTransition
          in={netError}
          classNames="NE"
          timeout={3000}
          onEntered={() => this.props.resetError()}
          unmountOnExit
        >
          <NetworkError />
        </CSSTransition>

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
          in={contacts.length > 1}
          // in={true}
          timeout={1000}
          classNames="filter"
          unmountOnExit
        >
          <div>
            <h2>Find contacts by name</h2>
            <Filter />
          </div>
        </CSSTransition>
        {this.props.loader ? (
          <h2>LOADING............</h2>
        ) : (
          <ContactList></ContactList>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getContacts(state),
    userLocalId: getUserLocalId(state),
    loader: state.loader,
    netError: state.netError,
  };
};
const mapDispatchToProps = { addNewContact, resetError, getContactOperation };

export default connect(mapStateToProps, mapDispatchToProps)(ContactsApp);
