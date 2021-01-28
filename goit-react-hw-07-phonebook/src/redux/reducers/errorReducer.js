import { ERROR_SET, ERROR_RESET } from "../constants/constants";

export default (state = "", action) => {
  switch (action.type) {
    case ERROR_SET:
      return action.payload;
    case ERROR_RESET:
      return "";
    default:
      return state;
  }
};
