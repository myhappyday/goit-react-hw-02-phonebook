import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import contacts from './data/contacts.json';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Fhonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </Container>
    );
  }
}

export default App;
