import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import contacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts: contacts,
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <Container>
        <Title>Fhonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
