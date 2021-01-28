import { ERROR_SET, ERROR_RESET } from "../constants/constants";

const setError = (error) => ({
  type: ERROR_SET,
  payload: error,
});

const resetError = () => ({
  type: ERROR_RESET,
});

export { setError, resetError };
