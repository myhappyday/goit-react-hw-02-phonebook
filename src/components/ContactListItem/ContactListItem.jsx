import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, Name, Number } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  return (
    <ContactItem>
      <p>
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </p>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
