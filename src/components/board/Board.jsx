import React, { useContext } from 'react'
import Card from '../common/card/Card';
import { EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/outline';
import { TicketContext } from '../../context/ticketContext/ticketContext';

const Board = ({tickets,users,boardOrder}) => {
  console.log(tickets);
  const {state:{display}} = useContext(TicketContext)
  
  const boardOrderGrid = boardOrder.map(fieldName => (
    {
      fieldName : fieldName.name,
      ticketList: tickets[fieldName.name],
      length: tickets[fieldName.name] ? tickets[fieldName.name].length : 0,
      icon: fieldName.icon,
      // user: (
      //   display.grouping === 'status' && display.grouping === 'priority'
      //   ? users.filter((user) => user.id ===  )
      //   : null
      // )
    }   
  ));
  console.log(boardOrderGrid);
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 min-h-[90vh] '>
      {/* {
        boardOrder.map((orderItem) => (
          <div className='flex justify-between items-center h-14 px-1'>
            <span>{orderItem}</span>
            
          </div>
        ))
      } */}
      {
        boardOrderGrid.map((boardOrderColumn) => (
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-center h-14 px-1'>
              <div className='flex justify-between items-center gap-1.5'>
                <span>{boardOrderColumn.icon}</span>
                <span>{boardOrderColumn.fieldName}</span>
                <span>{boardOrderColumn.length}</span>            
              </div>
              <div className='flex justify-between items-center gap-1.5'>
                <PlusIcon className='h-4 w-4' />
                <EllipsisHorizontalIcon className='h-4 w-4'/>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {
                boardOrderColumn.ticketList?.map((ticket) => (
                  <Card cardData={ticket} />
                ))
              }
              
            </div>

          </div>
        ))
      }
    </section>
  )
}

export default Board