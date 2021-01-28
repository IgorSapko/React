import axios from "axios";
import { addNewContact, getContacts } from "../actions/contactsAction";
import { setError } from "../actions/errorAction";
import { loaderOn, loaderOff } from "../actions/loaderActions";

export const postContactOperation = (contact, userLocalId) => async (dispatch) => {
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
    .catch((error) => dispatch(setError('error')))
    .finally(() => dispatch(loaderOff()));
};

export const getContactOperation = () => async (dispatch) => {
  dispatch(loaderOn());
  await axios
    .get("https://workwithcontacts-86d32.firebaseio.com/contacts.json")
    .then((response) => {
     
      if (response.status === 200) {
        const data = response.data;
        let arrayOfContacts = [];
        for (let key in data) {
          arrayOfContacts.push({ ...data[key], id: key });
        };
        console.log('arrayOfContacts',arrayOfContacts)
        dispatch(getContacts([...arrayOfContacts]));
      }
    })
    .catch((error) => dispatch(setError("error")))
    .finally(() => dispatch(loaderOff()));
};

export const deleteContactOperation = (id) => async (dispatch) => {
  console.log('id', id);
  const url = `https://workwithcontacts-86d32.firebaseio.com/contacts/${id}.json`;
  console.log('url', url)
  dispatch(loaderOn());
  await axios
    .delete(
      url
    )
    .then((response) => { console.log("response", response);
      // response.status === 200 &&
      //   dispatch(addNewContact({ ...contact, id: response.data.name }));
    })
    .catch((error) => dispatch(setError('error')))
    .finally(() => dispatch(loaderOff()));
};