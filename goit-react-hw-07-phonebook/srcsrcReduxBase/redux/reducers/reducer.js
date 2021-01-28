import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from "../constants/constants";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Rita Simpson", number: "459-12-56" },
      { id: "id-6", name: "Harry Kline", number: "443-89-12" },
    ],
    filter: "",
  },
};

const reducer = (state = initialState, action) => {
  const copyOfState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADD_CONTACT:
      const updItemsOfADD_CONTACT = [
        action.payload.contact,
        ...state.contacts.items,
      ];
      copyOfState.contacts.items = updItemsOfADD_CONTACT;
      return copyOfState;

    case DELETE_CONTACT:
      const updItemsOfDELETE_CONTACT = copyOfState.contacts.items.filter(
        (contact) => contact.id !== action.payload.id
      );
      copyOfState.contacts.items = updItemsOfDELETE_CONTACT;
      return copyOfState;

    case FILTER_CONTACT:
      copyOfState.contacts.filter = action.payload.str;
      return copyOfState;

    default:
      return state;
  }
};

export default reducer;
