import React from 'react'
import { generateRandomColor, getInitials } from '../../../utils'

const Avatar = ({name,showAvailability, isAvailable}) => {
  return (
    <div 
      className='flex justify-center items-center w-4 h-4 relative font-bold rounded-full text-[0.5rem] text-white'
      style={{backgroundColor: generateRandomColor() }}
    >
      {getInitials(name)}
      {showAvailability ? <div className={`absolute rounded-full bottom-0 right-0 h-1.5 w-1.5 outline-1 outline outline-white ${isAvailable ? 'bg-green-500': 'bg-slate-600' }`}></div> : null}
      
    </div>
  )
}

export default Avatar