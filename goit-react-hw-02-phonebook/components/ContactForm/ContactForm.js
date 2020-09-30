import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import ContactFormStyles from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const FormStyles = ContactFormStyles.form`
border-style: solid;
border-width: 2px
border-color: black;
padding: 10px;
&>*{margin-top:10px}
`;
const LabelStyles = ContactFormStyles.label`
display:block;
font-size:18px;
font-weight: 700;

`;
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    let index = 0;
    this.props.contacts.filter((elem, i) => {
      if (elem.name.toLowerCase() === newContact.name.toLowerCase()) {
        this.setState(() => ({ name: '' }));
        index = i;
        return alert(`${elem.name} is already in сontacts`);
      } else if (
        i === this.props.contacts.length - 1 &&
        name &&
        this.props.contacts[index].name.toLowerCase() !==
          newContact.name.toLowerCase()
      ) {
        const newArrayContacts = [...this.props.contacts, ...newContact];
        this.props.handleUpdateContacts(newArrayContacts);
        this.setState(() => {
          return { name: '' };
        });
      }
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyles onSubmit={this.handleSubmit}>
        <LabelStyles htmlFor={uuidv4()}>
          Name
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </LabelStyles>
        <LabelStyles htmlFor={uuidv4()}>
          Number
          <input
            type="text"
            placeholder="Enter phone number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </LabelStyles>

        <button type="submit">Add contact</button>
      </FormStyles>
    );
  }
}

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleUpdateContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ).isRequired,
};

ContactForm.defaultProps = {
  contacts: [{ number: 'empty' }],
};
