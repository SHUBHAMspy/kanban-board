import { SET_GROUPING, SET_ORDERING } from "./type";

const ticketReducer = (state,{type,payload}) => {
  switch (type) {
    case SET_GROUPING:
      return {
        ...state,
        display: {
          ...state.display,
          grouping: payload
        }
      }
    case SET_ORDERING:
      return {
        ...state,
        display: {
          ...state.display,
          ordering: payload
        }
      }
  
    default:
      break;
  }
}

export default ticketReducer