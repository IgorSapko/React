import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from "../constants/constants";
import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContact,
  filterContacts,
} from "../actions/contactsAction";

// // for REDUX 
// const initialState = {
//   contacts:{
//   items: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     { id: "id-5", name: "Rita Simpson", number: "459-12-56" },
//     { id: "id-6", name: "Harry Kline", number: "443-89-12" },
//   ],
//   filter: "",}
// };

// for REDUX TOOLKIT
const initialState = {
  items: [
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // { id: "id-5", name: "Rita Simpson", number: "459-12-56" },
    // { id: "id-6", name: "Harry Kline", number: "443-89-12" },
  ],
  filter: "",
};
console.log('REDUCER')
// const contactsReducer = createReducer(initialState, {
//   [addNewContact]: (state, action) => {
//     return {
//       ...state,
//       items: [action.payload, ...state.items],
//     };
//   },
//   [deleteContact]: (state, action) => {
//     return {
//       ...state,
//       items: [
//         ...state.items.filter((contact) => contact.id !== action.payload),
//       ],
//     };
//   },
//   [filterContacts]: (state, action) => {
//     return { ...state, filter: action.payload };
//   },
// });

const contactsReducer = (state = initialState, action) => {
  // console.log("state", state);
//   // console.log('action.type', action)
//   // for REDUX // const copyOfState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
//     //----------------------------------------------------
//     // REDUX
//     // case ADD_CONTACT:
//     //   const updItemsOfADD_CONTACT = [
//     //     action.payload.contact,
//     //     ...state.contacts.items,
//     //   ];
//     //   copyOfState.contacts.items = updItemsOfADD_CONTACT;
//     //   return copyOfState;

    // REDUX TOOLKIT
    case ADD_CONTACT:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
//     //----------------------------------------------------
//     // REDUX
//     // case DELETE_CONTACT:
//     //   console.log('copyOfState',copyOfState);
//     //   console.log('state', state)
//     //   const updItemsOfDELETE_CONTACT = copyOfState.contacts.items.filter(
//     //     (contact) => contact.id !== action.payload.id
//     //   );
//     //   copyOfState.contacts.items = updItemsOfDELETE_CONTACT;
//     //   return copyOfState;

    // REDUX TOOLKIT
    case DELETE_CONTACT:
      console.log('state' , state)
      return {
        ...state,
        items: [
          ...state.items.filter((contact) => contact.id !== action.payload),
        ],
      };
//     //----------------------------------------------------
//     // REDUX
//     // case FILTER_CONTACT:
//     //   copyOfState.contacts.filter = action.payload.str;
//     //   return copyOfState;

    // REDUX TOOLKIT
    case FILTER_CONTACT:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default contactsReducer;
