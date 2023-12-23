import { SET_GROUPING, SET_ORDERING } from "./type";

const setGrouping = (dispatch,grouping) => {
  localStorage.setItem('display', {g});
  dispatch({
    type: SET_GROUPING,
    payload: grouping
  })
}
const setOrdering = (dispatch,ordering) => {
  localStorage.setItem('display', {g});
  dispatch({
    type: SET_ORDERING,
    payload: ordering
  })
}


export {
  setGrouping,
  setOrdering
}