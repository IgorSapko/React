import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import contactListStyles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/contactsAction";

const ContactList = ({ deleteContact, contacts, filter }) => {
  const filtredContacts = (contacts) => {
    if (!filter) return contacts;
    return contacts.filter((elem) => {
      let comparePartofName = elem.name.substr(0, filter.length);
      if (comparePartofName.toLowerCase() === filter.toLowerCase()) {
        return elem.name;
      }
    });
  };

  return (
    <div className={contactListStyles.wrapper}>
      <TransitionGroup component="ul" className={contactListStyles.contactList}>
        {filtredContacts(contacts).map((elem) => {
          return (
            <CSSTransition
              timeout={250}
              classNames={contactListStyles}
              key={uuidv4()}
            >
              <li className={contactListStyles.contactListItem} key={uuidv4()}>
                <span className={contactListStyles.contactListItemSpan}>
                  {elem.name} : {elem.number}
                </span>
                <button
                  className={contactListStyles.contactListItemButton}
                  type="button"
                  onClick={() => deleteContact(elem.id)}
                ></button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return { contacts: state.contacts.items, filter: state.contacts.filter };
};

const mapDispatchToProps = { deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  contacts: [{ number: "empty" }],
  filter: "",
};
