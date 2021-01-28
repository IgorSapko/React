import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactFormStyles from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addNewContact } from "../../redux/actions/contactsAction";
import { postContactOperation } from "../../redux/operations/contactsOperations";
import { connect } from "react-redux";
import { getContacts } from "../../redux/selectors/contactsSelectors.js";

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
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    if (!this.props.handleCheckexistContact(name, number)) {
      this.props.postContactOperation({ name, number }, this.props.userLocalId);
    }

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    console.log("CONTACT FORM", this.props);
    return (
      <FormStyles onSubmit={this.handleSubmit}>
        <LabelStyles htmlFor={name}>
          Name
          <InputStyles
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </LabelStyles>
        <LabelStyles htmlFor={name + 1}>
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
  return { userLocalId: state.auth.localId };
};
const mapDispatchToProps = { addNewContact, postContactOperation };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
