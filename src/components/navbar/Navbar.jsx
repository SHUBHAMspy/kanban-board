import React, { useState } from 'react'
import ToggleButton from '../common/toggleButton/ToggleButton'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Dropdown from '../common/dropdown/Dropdown'
import { options } from './options'
import useTheme from '../../hooks/useTheme'

const Navbar = () => {
  const [apptheme,setAppTheme] = useTheme()
  const [darkTheme, setDarkTheme] = useState(
    apptheme === "light" ? false : true
  );

  const toggleDarkMode = (value) => {
    console.log(value);
    setAppTheme( value ? "dark" : "light");
    setDarkTheme(value);
  };
  return (
    <nav className='flex justify-between items-center h-full'>
      <div>
        <Dropdown options={options }/>
      </div>
      <div className=" mx-2 p-2 relative space-x-2 flex justify-center items-center rounded-lg">
        <SunIcon className='h-4 w-4'/>
        <ToggleButton handleChange={toggleDarkMode} value={darkTheme}/>
        <MoonIcon className='h-4 w-4'/>
      </div>
    </nav>
  )
}

export default Navbar