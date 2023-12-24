import React from 'react'
import { generateRandomColor, getInitials } from '../../../utils'

const Avatar = ({name}) => {
  return (
    <div 
      className='flex justify-center items-center w-4 h-4 font-bold rounded-full text-[0.5rem] text-white'
      style={{backgroundColor: generateRandomColor() }}
    >
      {getInitials(name)}
    </div>
  )
}

export default Avatar