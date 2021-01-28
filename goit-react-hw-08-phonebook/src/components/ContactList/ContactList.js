import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import contactListStyles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/contactsAction";
import { deleteContactOperation } from "../../redux/operations/contactsOperations";
import {
  getFilterValue,
  filtredContacts,
  getUserLocalId,
} from "../../redux/selectors/contactsSelectors.js";

const ContactList = ({
  deleteContact,
  contacts,
  deleteContactOperation,
  userLocalId,
}) => {
  console.log("CONTACT LIST");

  return (
    <div className={contactListStyles.wrapper}>
      <TransitionGroup component="ul" className={contactListStyles.contactList}>
        {contacts.map((elem) => {
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
                  onClick={() => (
                    deleteContact(elem.id),
                    deleteContactOperation(elem.id, userLocalId)
                  )}
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
  return {
    contacts: filtredContacts(state),
    filter: getFilterValue(state),
    userLocalId: getUserLocalId(state),
  };
};
const mapDispatchToProps = { deleteContact, deleteContactOperation };

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
