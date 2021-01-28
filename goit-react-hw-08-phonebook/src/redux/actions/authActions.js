import {
  LOG_IN,
  REGISTRATION,
  LOG_OUT,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  RESET_ERROR,
} from "../constants/constants";
import { createAction } from "@reduxjs/toolkit";

const logIn = createAction(LOG_IN);
const logInSuccess = createAction(LOG_IN_SUCCESS);
const logInError = createAction(LOG_IN_ERROR);
const logOut = createAction(LOG_OUT);
const registration = createAction(REGISTRATION);
const registrationSuccess = createAction(REGISTRATION_SUCCESS);
const registrationError = createAction(REGISTRATION_ERROR);
const resetError = createAction(RESET_ERROR);

export {
  logIn,
  logOut,
  registration,
  logInSuccess,
  logInError,
  registrationSuccess,
  registrationError,
  resetError,
};
