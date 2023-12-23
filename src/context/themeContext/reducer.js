import { SET_THEME } from "./types";

const themeReducer = (state,{type,payload}) => {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload
      }
  
    default:
      break;
  }
}

export default themeReducer