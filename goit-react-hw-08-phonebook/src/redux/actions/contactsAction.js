import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  GET_CONTACTS,
} from "../constants/constants";

import { createAction } from "@reduxjs/toolkit";

const addNewContact = createAction(ADD_CONTACT);

const deleteContact = createAction(DELETE_CONTACT);

const filterContacts = createAction(FILTER_CONTACT);

const getContacts = createAction(GET_CONTACTS);

export { addNewContact, deleteContact, filterContacts, getContacts };
