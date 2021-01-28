import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from "../constants/constants";

const addNewContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: {
      contact,
    },
  };
};

const deleteContact = (id) => {
  console.log(id);
  return {
    type: DELETE_CONTACT,
    payload: {
      id,
    },
  };
};

const filterContacts = (str) => {
  return {
    type: FILTER_CONTACT,
    payload: {
      str,
    },
  };
};

export { addNewContact, deleteContact, filterContacts };
