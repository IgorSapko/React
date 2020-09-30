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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleDeleteContact = e => {
    const { contacts } = this.state;

    let index;
    contacts.forEach((elem, i) => {
      if (
        elem.name.toLowerCase() ===
        e.nativeEvent.path[1].childNodes[0].childNodes[0].textContent.toLowerCase()
      ) {
        index = i;
      }
    });
    contacts.splice(index, 1);
    this.setState(() => {
      return { contacts: contacts };
    });
  };

  handleUpdateContacts = contacts => {
    this.setState(() => {
      return { contacts: contacts };
    });
  };

  handleFilterContact = contacts => {
    let newContacts = [];
    const { filter } = this.state;
    if (filter) {
      contacts.map(elem => {
        let comparePartofName = elem.name.substr(0, filter.length);

        if (comparePartofName.toLowerCase() === filter.toLowerCase()) {
          newContacts.push(elem);
        }
      });
    }

    return newContacts;
  };

  render() {
    const { contacts, filter } = this.state;
    let newContacts = this.handleFilterContact(contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          handleUpdateContacts={this.handleUpdateContacts}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter
          handleChange={this.handleChange}
          filter={filter}
          contacts={contacts}
          handleDeleteContact={this.handleDeleteContact}
          handleUpdateContacts={this.handleUpdateContacts}
        />
        <ContactList
          contacts={contacts}
          newContacts={newContacts}
          filter={filter}
          handleFilterContact={this.handleFilterContact}
          handleDeleteContact={this.handleDeleteContact}
        ></ContactList>
      </div>
    );
  }
}
