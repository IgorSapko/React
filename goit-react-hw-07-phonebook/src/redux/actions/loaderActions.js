import { LOADER_ON, LOADER_OFF } from "../constants/constants";

const loaderOn = () => ({
  type: LOADER_ON,
});

const loaderOff = () => ({
  type: LOADER_OFF,
});

export { loaderOn, loaderOff };
