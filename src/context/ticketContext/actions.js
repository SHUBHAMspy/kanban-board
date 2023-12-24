import { SET_GROUPING, SET_ORDERING } from "./type";

const setGrouping = (dispatch,grouping) => {
  const display = JSON.parse(localStorage.getItem("display"));
  
  localStorage.setItem('display', JSON.stringify({
    ...display,
    grouping: grouping
  }));
  dispatch({
    type: SET_GROUPING,
    payload: grouping
  })
}
const setOrdering = (dispatch,ordering) => {
  const display = JSON.parse(localStorage.getItem("display"));
  
  localStorage.setItem('display', JSON.stringify({
    ...display,
    ordering: ordering
  }));
  dispatch({
    type: SET_ORDERING,
    payload: ordering
  })
}


export {
  setGrouping,
  setOrdering
}