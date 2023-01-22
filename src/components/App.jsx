import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          name: this.state.name,
          number: this.state.number,
        },
      ],
    }));
    this.setState({ name: '', number: '' });
  };

  getNameBySearch = e => {
    const { contacts, filter } = this.state;
    // console.log(contacts);
    // return contacts.filter(contact => {
    //   contact.name.toLowerCase().includes(filter.toLowerCase());
    // });

    const { name, value } = e.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
    //
  };

  // addContact = () => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  // };
  // this.setState.contacts.push({ handleChange });
  // };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="name">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contact</h2>
        <label htmlFor="filter">
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.filter}
            onChange={this.getNameBySearch}
          />
        </label>

        <ul className="list">
          {this.state.contacts.map(({ name, number, id }) => {
            return (
              <li className="list-item" key={id}>
                {name}
                {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
