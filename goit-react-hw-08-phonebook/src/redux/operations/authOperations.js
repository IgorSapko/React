import axios from "axios";

import {
  logIn,
  registration,
  logInSuccess,
  logInError,
  registrationSuccess,
  registrationError,
  resetError,
} from "../actions/authActions";


const APIKey = "AIzaSyCJVQf10iQHi7bohgKxwB_dNdoYexcBwOc";
// const baseUrl = "https://authreg-2e058.firebaseio.com/";
const baseUrl = "https://authreg-2e058.firebaseio.com/";

const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`;
const registrationUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`;

export const registerOperation = (user) => (dispatch) => {
  console.log("user", user);
  dispatch(resetError());
  dispatch(registration());
  axios
    .post(registrationUrl, user)
    .then((Response) => {
      axios.post(`${baseUrl}/users.json`, {
        email: user.email,
        localId: Response.data.localId,
      });
      dispatch(
        registrationSuccess({
          email: Response.data.email,
          token: Response.data.idToken,
          localId: Response.data.localId,
        })
      );
    })
    .catch((error) => {
      dispatch(registrationError(error));
      alert(`${error}`);
    });
};

export const loginOperation = (user) => (dispatch) => {
  dispatch(resetError());
  dispatch(logIn());
  axios
    .post(loginUrl, user)
    .then((Response) => {
      dispatch(
        logInSuccess({
          email: Response.data.email,
          token: Response.data.idToken,
          localId: Response.data.localId,
        })
      );
    })
    .catch((error) => {
      dispatch(logInError(error));
      alert(`${error}`);
    });
};
