import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
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

  // addContact = name => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //   };
  //   console.log('contact:', contact);

  // this.setState(prevState => ({
  //   todos: [todo, ...prevState.todos],
  // }));

  // Деструктуризація prevState.todos
  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  //   // console.log('text:', text);
  // };

  // handleChange = event => {
  //   // console.log('currentTarget:', e.currentTarget);
  //   // console.log('currentTarget.name:', e.currentTarget.name);
  //   console.log('currentTarget.value:', event.currentTarget.value);

  // const { name, value } = event.currentTarget.elements;
  // this.setState({
  //   [name]: value,
  // });
  // };

  // onFormSubmit = event => {
  //   event.preventDefault();
  //   console.log('state:', this.state);
  //   setTimeout(() => {
  //     console.log('state 1:', this.state);
  //   }, 1000);
  //   // this.addContact();
  //   const { name } = event.currentTarget;

  //   const contact = {
  //     id: nanoid(),
  //     name: name.value,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));

  //   // this.props.onSubmit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({
  //     contacts: [],
  //     name: '',
  //   });
  // };

  formSubmitHandler = data => {
    console.log('data:', data);
    setTimeout(() => {
      console.log('data 1:', data);
    }, 1000);
  };

  //============================================================

  render() {
    return (
      <div>
        <h1>Fhonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        {/* <form onSubmit={this.onFormSubmit}>
          <label>
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
          <button type="submit" aria-label="Add contact">
            Add contact
          </button>
        </form> */}
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
