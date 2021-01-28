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
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Rita Simpson", number: "459-12-56" },
      { id: "id-6", name: "Harry Kline", number: "443-89-12" },
    ],
    filter: "",
    error: null,
  };

  componentDidMount() {
    if (this.state.error) {
      this.setState({ error: null });
    }
    const contactsFromLocalStorage = localStorage.getItem("contacts");

    if (contactsFromLocalStorage) {
      this.setState({ contacts: JSON.parse(contactsFromLocalStorage) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleDeleteContact = (id) => {
    const { contacts } = this.state;

    let contactsAfterDeleting = contacts.filter((contact) => contact.id !== id);

    this.setState(() => {
      return { contacts: contactsAfterDeleting };
    });
  };

  handleCheckContact = (checkedContact) => {
    const { contacts } = this.state;
    let existContactname;
    const isExistContact = contacts.some((contact) => {
      existContactname = contact.name;
      return (
        existContactname.toLocaleLowerCase() ===
        checkedContact.name.toLowerCase()
      );
    });
    if (isExistContact) {
      this.setState({ error: true });
      // alert(`${existContactname} is already in сontacts`);
    } else {
      this.setState((prevState) => {
        return { contacts: [checkedContact, ...prevState.contacts] };
      });
    }
  };

  handleFilterContact = () => {
    const { filter, contacts } = this.state;
    if (!filter) return contacts;
    return contacts.filter((elem) => {
      let comparePartofName = elem.name.substr(0, filter.length);
      if (comparePartofName.toLowerCase() === filter.toLowerCase()) {
        return elem.name;
      }
    });
  };

  render() {
    const { contacts, filter, error } = this.state;
    console.log("error", error);
    return (
      <>
        <CSSTransition
          in={this.state.error}
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
          <ContactForm
            handleChange={this.handleChange}
            handleCheckContact={this.handleCheckContact}
          />
          <CSSTransition
            in={contacts.length > 1}
            timeout={1000}
            classNames="filter"
            unmountOnExit
          >
            <div>
              <h2>Find contacts by name</h2>
              <Filter handleChange={this.handleChange} filter={filter} />
            </div>
          </CSSTransition>
          <ContactList
            contacts={this.handleFilterContact()}
            handleDeleteContact={this.handleDeleteContact}
          ></ContactList>
        </div>{" "}
      </>
    );
  }
}
