import { loaderOn, loaderOff } from "../actions/loaderActions";
import { LOADER_ON, LOADER_OFF } from "../constants/constants";

export default (state = false, action) => {
  switch (action.type) {
    case LOADER_ON:
      return true;
    case LOADER_OFF:
      return false;
    default:
      return state;
  }
};
