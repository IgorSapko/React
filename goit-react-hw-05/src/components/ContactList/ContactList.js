import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import contactListStyles from "./ContactList.module.css";

export default function ContactList({ handleDeleteContact, contacts }) {
  return (
    <div className={contactListStyles.wrapper}>
      <TransitionGroup component="ul" className={contactListStyles.contactList}>
        {contacts.map((elem) => {
          console.log("newLi");
          return (
            <CSSTransition
              timeout={250}
              classNames={contactListStyles}
              key={elem.id}
            >
              <li className={contactListStyles.contactListItem} key={uuidv4()}>
                <span className={contactListStyles.contactListItemSpan}>
                  {elem.name} : {elem.number}
                </span>
                <button
                  className={contactListStyles.contactListItemButton}
                  type="button"
                  onClick={() => handleDeleteContact(elem.id)}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),

  handleDeleteContact: PropTypes.func,
  filter: PropTypes.string,
};

ContactList.defaultProps = {
  contacts: [{ number: "empty" }],
};
