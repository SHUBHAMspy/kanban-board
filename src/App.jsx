import { useContext, useEffect } from 'react'
import './App.css'
import Board from './components/board/Board'
import Navbar from './components/navbar/Navbar'
import { API_BASE_URL } from './constants/apiContant'
import useFetchData from './hooks/useFetchData'
import { categorizeAndOrderTickets } from './utils'
import { TicketContext } from './context/ticketContext/ticketContext'
import { ThemeContext } from './context/themeContext/themeContext'
import { ThreeCircles } from 'react-loader-spinner'
import { BoltIcon, CheckCircleIcon, Square3Stack3DIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { InboxIcon } from '@heroicons/react/24/outline'
import {priorityData,statusData } from './data/data'



function App() {
  const {state:{display}} = useContext(TicketContext)
  const {state:{theme}} = useContext(ThemeContext)
  const {data,loading,error} = useFetchData(`${API_BASE_URL}/ticketAndUsers`)
  console.log(data);

  useEffect(() => {
    if(!localStorage.getItem('display')){
      localStorage.setItem('display',JSON.stringify({
        grouping: 'status',
        ordering: 'priority'
      }))
    } 
    
  }, [])
  
  
  return (
    <>
      <div>
        <section className='bg-white h-[10vh] px-4 py-2 dark:bg-[#161B22] dark:text-white'>
          <Navbar/>
        </section>
        <main className='bg-[#F4F5F8] dark:bg-[#010409] dark:text-white h-auto'>
          {
            loading
            ? (
              <div className='min-h-[90vh] w-full flex justify-center items-center'>
                <span className='text-[#161B22] dark:text-white'>
                  <ThreeCircles
                    visible={true}
                    height="30"
                    width="30"
                    color= {theme === 'light' ?' #161B22' : '#ffffff'}
                    ariaLabel="three-circles-loading"
                    
                  />
                loading
                </span>
              </div>
              
            ):(
              <Board 
                tickets={categorizeAndOrderTickets(data.tickets,data.users,display.grouping,display.ordering)}
                users={data.users}
                boardOrder={
                  display.grouping === 'status'
                  ? statusData
                  : display.grouping === 'priority'
                  ? priorityData  
                  : data.users
                }
              />
            )
          }
        </main>
      </div>
      
    </>
  )
}

export default App
