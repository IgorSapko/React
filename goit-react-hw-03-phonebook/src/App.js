import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rita Simpson', number: '459-12-56' },
      { id: 'id-6', name: 'Harry Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');

    if (contactsFromLocalStorage) {
      this.setState({ contacts: JSON.parse(contactsFromLocalStorage) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
    
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;

    let contactsAfterDeleting = contacts.filter(contact => contact.id !== id);

    this.setState(() => {
      return { contacts: contactsAfterDeleting };
    });
  };

  handleCheckContact = checkedContact => {
    const { contacts } = this.state;
    let existContactname
    const isExistContact = contacts.some(
      contact =>
      { existContactname = contact.name;
      return  contact.name.toLocaleLowerCase() === checkedContact.name.toLowerCase()}
    );
    if (isExistContact) {
      alert(`${existContactname} is already in сontacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, checkedContact] };
      });
    }
  };

  handleFilterContact = () => {
    const { filter, contacts } = this.state;
    if (!filter) return contacts;
    return contacts.filter(elem => {
      let comparePartofName = elem.name.substr(0, filter.length);
      if (comparePartofName.toLowerCase() === filter.toLowerCase()) {
        return elem.name;
      }
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          handleCheckContact={this.handleCheckContact}
        />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />
        <ContactList
          contacts={this.handleFilterContact()}
          handleDeleteContact={this.handleDeleteContact}
        ></ContactList>
      </div>
    );
  }
}
