import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id} id={id} name={name} number={number} >
          <p>
            <span>{name}: </span>
            <span>{number}</span>
          </p>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
