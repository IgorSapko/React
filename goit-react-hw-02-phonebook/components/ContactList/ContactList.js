import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import ContactListStyles from 'styled-components';

const SpanStyles = ContactListStyles.span`
margin-right:6px;
`;
const ButtonStyles = ContactListStyles.button`
cursor:pointer;
&:hover{ background: blue}
`;
const ListItemStyles = ContactListStyles.li`
display: block;
&:not(:last-child){margin-bottom:16px}
`;

export default function ContactList({
    handleDeleteContact,
  newContacts,
  contacts,
  filter
}) {
  if (filter==='') {
    return (
      <ul className="contactList">
        {contacts.map(elem => {
          return (
            <ListItemStyles key={uuidv4()}>
              <SpanStyles>
                {elem.name} : {elem.number}
              </SpanStyles>
              <ButtonStyles type="button" onClick={handleDeleteContact}>
                Delete
              </ButtonStyles>
            </ListItemStyles>
          );
        })}
      </ul>
    );
  } else {
    return (
      <ul className="contactList">
        {newContacts.map(elem => {
          return (
            <ListItemStyles key={uuidv4()}>
              <SpanStyles>
                {elem.name} : {elem.number}
              </SpanStyles>
              <ButtonStyles type="button" onClick={handleDeleteContact}>
                Delete
              </ButtonStyles>
            </ListItemStyles>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
  newContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
  handleDeleteContact: PropTypes.func,
  filter: PropTypes.string
};

ContactList.defaultProps = {
  contacts: [{ number: 'empty' }],
};
