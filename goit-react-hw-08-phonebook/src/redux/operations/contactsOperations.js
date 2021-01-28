import axios from "axios";
import { addNewContact, getContacts } from "../actions/contactsAction";
import { setError } from "../actions/errorAction";
import { loaderOn, loaderOff } from "../actions/loaderActions";

export const postContactOperation = (contact, userLocalId) => async (
  dispatch
) => {
  dispatch(loaderOn());
  await axios
    .post(
      `https://workwithcontacts-86d32.firebaseio.com/${userLocalId}/contacts.json`,
      contact
    )
    .then((response) => {
      response.status === 200 &&
        dispatch(addNewContact({ ...contact, id: response.data.name }));
    })
    .catch((error) => dispatch(setError("error")))
    .finally(() => dispatch(loaderOff()));
};

export const getContactOperation = (userLocalId) => async (dispatch) => {
  dispatch(loaderOn());
  await axios
    .get(
      `https://workwithcontacts-86d32.firebaseio.com/${userLocalId}/contacts.json`
    )
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        let arrayOfContacts = [];
        for (let key in data) {
          arrayOfContacts.push({ ...data[key], id: key });
        }

        dispatch(getContacts([...arrayOfContacts]));
      }
    })
    .catch((error) => dispatch(setError("error")))
    .finally(() => dispatch(loaderOff()));
};

export const deleteContactOperation = (id, userLocalId) => async (dispatch) => {
  const url = `https://workwithcontacts-86d32.firebaseio.com/${userLocalId}/contacts/${id}.json`;

  dispatch(loaderOn());
  await axios
    .delete(url)
    .then((response) => {})
    .catch((error) => dispatch(setError("error")))
    .finally(() => dispatch(loaderOff()));
};
