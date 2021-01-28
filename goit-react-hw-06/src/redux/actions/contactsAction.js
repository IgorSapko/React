import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from "../constants/constants";

import { createAction } from '@reduxjs/toolkit';

// const addNewContact = (contact) => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       contact,
//     },
//   };
// };

const addNewContact = createAction(ADD_CONTACT)

// const deleteContact = (id) => {
//   console.log(id);
//   return {
//     type: DELETE_CONTACT,
//     payload: {
//       id,
//     },
//   };
// };

const deleteContact = createAction(DELETE_CONTACT)

// const filterContacts = (str) => {
//   return {
//     type: FILTER_CONTACT,
//     payload: {
//       str,
//     },
//   };
// };

const filterContacts = createAction(FILTER_CONTACT);

export { addNewContact, deleteContact, filterContacts };
