import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name }) => (
        <li key={id} id={id} name={name}>
          <p>{name}</p>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
