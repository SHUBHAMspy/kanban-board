import React, { useState } from 'react'

const ToggleButton = ({handleChange,value}) => {

  const [toggle, setToggle] = useState(value)
  return (
    <label 
      htmlFor='toggle-switch'
      className='lg:block'
      data-testid='toggle-button'
    >
      <input 
        type="checkbox" 
        className='cursor-pointer w-12 h-6 rounded-full appearance-none bg-slate-200 checked:bg-gray-700 transition duration-200 relative'
        id="toggle-switch" 
        onChange={(e) => {
          setToggle(!toggle)
          handleChange(!value)
        }}
        value={value}
      />
      {/* <div
        className="w-11 h-6 bg-gray-900 rounded-full after:content-[''] after:absolute after:w-5 after:h-5 after:rounded-full after:bg-neon peer-checked:after:translate-x-full border-2 border-neon"
      ></div> */}

    </label>
  )
}

export default ToggleButton