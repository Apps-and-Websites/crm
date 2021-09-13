import storage from "local-storage-fallback";

export const initialState = {
  isLight: storage.getItem("isLight")
    ? JSON.parse(storage.getItem("isLight"))
    : false,
};

export const websiteInitialState = {
  websites: [],
  singleWebsite: {},
  websiteStart: false,
  websiteErorr: "",
};

export const appInitialState = {
  apps: [],
  singleApp: {},
  appStart: false,
  appErorr: "",
};

export const logoInitialState = {
  logos: [],
  singleLogo: {},

  logoStart: false,
  logoError: "",
};

export const graphicInitialState = {
  graphics: [],
  singleGraphic: {},
  graphicStart: false,
  graphicError: "",
};

export const userInitialState = {
  token: storage.getItem("token"),
  userStart: false,
  userError: "",
};
