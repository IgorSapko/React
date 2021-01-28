import {
  LOG_OUT,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  RESET_ERROR,
} from "../constants/constants";

const initialState = {
  email: "",
  token: "",
  localId: "",
  isAuth: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRATION_SUCCESS:
      return {
        email: payload.email,
        token: payload.token,
        localId: payload.localId,
        isAuth: true,
        error: null,
      };
    case REGISTRATION_ERROR:
      return { ...initialState, error: payload };
    case LOG_IN_SUCCESS:
      return {
        email: payload.email,
        token: payload.token,
        localId: payload.localId,
        isAuth: true,
        error: null,
      };
    case LOG_IN_ERROR:
      return { ...initialState, error: payload };
    case LOG_OUT:
      return { ...initialState };
    case RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
