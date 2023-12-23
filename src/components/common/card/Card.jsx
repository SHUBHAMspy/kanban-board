import React from 'react'

const Card = ({cardData}) => {
  return (
    <div className='flex flex-col rounded-md bg-white dark:bg-[#161B22] border-1 border-[#e6e7eb] dark:border-[#4a4a4a] p-4'>
      <div className='flex justify-between items-center w-full'>
      {cardData.id}
      </div>
      <div className='flex items-start'>
        {cardData.title}
      </div>

      <div className='flex items-center gap-2 m-1'>{cardData.priority}</div>
      
    </div>
  )
}

export default Card