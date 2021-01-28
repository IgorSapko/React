import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactFormStyles from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addNewContact } from "../../redux/actions/contactsAction";
import { connect } from "react-redux";

const FormStyles = ContactFormStyles.form`
display:inline-block;
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

const InputStyles = ContactFormStyles.input`
display:block;
width:70vw
`;
const ButtonStyles = ContactFormStyles.button`
width:71vw;
background-color:blue;
color:white;
cursor:pointer;
&:hover{background-color:violet}
`;

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: null,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      let existContactname;
      const isExistContact = this.props.contacts.some((contact) => {
        existContactname = contact.name;
        return (
          existContactname.toLocaleLowerCase() === this.state.name.toLowerCase()
        );
      });
      if (isExistContact) {
        this.props.handleCheckexistContact(isExistContact);
        return;
      }
      this.props.addNewContact({ ...this.state, id: uuidv4() });
    this.setState({ name: "", number: "" });
    }
    
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyles onSubmit={this.handleSubmit}>
        <LabelStyles htmlFor={uuidv4()}>
          Name
          <InputStyles
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </LabelStyles>
        <LabelStyles htmlFor={uuidv4()}>
          Number
          <InputStyles
            type="text"
            placeholder="Enter phone number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </LabelStyles>

        <ButtonStyles type="submit">Add contact</ButtonStyles>
      </FormStyles>
    );
  }
}
const mapStateToProps = (state) => {
  return { contacts: state.contacts.items };
};
const mapDispatchToProps = { addNewContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
