import React from 'react'
import Avatar from '../avatar/Avatar';

const Card = ({cardData}) => {

  return (
    <div className='flex flex-col gap-2 rounded-md bg-white dark:bg-[#161B22] border-[1px] border-[#e6e7eb] dark:border-[#4a4a4a] p-4 shadow-[0_0_8px_0_rgb(0,0,0,0.1)] dark:shadow-[0_0_8px_0_rgb(255,255,255,0.13)]'>
      <div className='flex justify-between items-center w-full'>
        <span className='text-[#8D8D8D] text-base'>{cardData.id}</span>
        {
          cardData.user ? <Avatar name={cardData.user.name} showAvailability={true} isAvailable={cardData.user.available}/> : null
        }
        
      </div>
      <div className='flex items-start gap-[5px]'>
        <div>
          {
            cardData.statusIcon
            ? cardData.statusIcon
            : null
          }
        </div>
        <p className='text-[#373737] dark:text-[#ebebeb] text-base font-medium leading-5'>
          {cardData.title}
        </p>
        
      </div>

      <div className='flex items-center gap-2 m-1'>
        <div className='border-[1px] border-[#e6e7eb] dark:border-[#4a4a4a] rounded-md p-0.5'>{cardData.priorityIcon ? cardData.priorityIcon : null}</div>
        <div className='flex items-center gap-[5px] border-[1px] border-[#e6e7eb] dark:border-[#4a4a4a] rounded-md py-px px-1.5 text-sm text-[#8D8D8D]'>
          <div className='h-3 w-3 rounded-full bg-gray-500'></div>
          <span>{cardData.tag[0]}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Card