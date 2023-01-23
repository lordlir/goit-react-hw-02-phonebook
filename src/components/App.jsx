import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contact-form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addContact = (name, number) => {
    const searchSameName = this.state.contacts.find(
      contact => contact.name === name
    );
    console.log(searchSameName);
    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
        id: uuidv4(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contactsFiltred = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div
        style={{
          height: '100vh',

          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contact</h2>
        <Filter filter={filter} onFilterChanche={this.handleChange} />
        <ContactList
          contactsFiltred={contactsFiltred}
          onDelContact={this.deleteContacts}
        />
      </div>
    );
  }
}
