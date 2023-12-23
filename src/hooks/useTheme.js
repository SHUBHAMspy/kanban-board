import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/themeContext/themeContext';
import { setTheme } from '../context/themeContext/actions';
import { THEME_TYPES } from '../constants/themeContants';

function useTheme() {
  const {state:{theme},dispatch} = useContext(ThemeContext)
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const [apptheme, setAppTheme] = useState(theme)
  const colorTheme = apptheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(apptheme);
    setTheme(dispatch,apptheme)
    

}, [apptheme, colorTheme]);

return [apptheme, setAppTheme]

}

export default useTheme