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
    if (name) {
      const newContact = {
        id: uuidv4(),
        name: name,
        number: number,
      };
      this.props.handleCheckContact(newContact);
      this.setState(() => {
        return { name: '', number: '' };
      });
    }
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
  handleCheckContact: PropTypes.func.isRequired,
};
