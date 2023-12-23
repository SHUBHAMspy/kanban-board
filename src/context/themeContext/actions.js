import { SET_THEME } from "./types"

const setTheme = (dispatch,theme) => {
  localStorage.setItem('theme', theme);
  dispatch({
    type: SET_THEME,
    payload: theme
  })
}


export {
  setTheme,
}