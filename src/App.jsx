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


function App() {
  const {state:{display}} = useContext(TicketContext)
  const {state:{theme}} = useContext(ThemeContext)
  const {data,loading,error} = useFetchData(`${API_BASE_URL}/ticketAndUsers`)
  console.log(data);
  // console.log(tickets,users);
  // useEffect(() => {
  //   categorizeAndOrderTickets(tickets,display.grouping,display.ordering)
  
  // }, [])
  
  
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
                tickets={categorizeAndOrderTickets(data.tickets,display.grouping,display.ordering)}
                users={data.users}
                boardOrder={
                  display.grouping === 'status'
                  ? [
                      {
                        name:'Backlog',
                        icon: <Square3Stack3DIcon className='h-4 w-4'/>
                      },
                      {
                        name:'Todo',
                        icon: <InboxIcon className='h-4 w-4'/>
                      },
                      {
                        name: 'In progress',
                        icon: <BoltIcon className='h-4 w-4 text-yellow-500 '/>
                      },
                      {
                        name: 'Done',
                        icon: <CheckCircleIcon className='h-4 w-4 text-green-700'/>
                      },
                      {
                        name:'Cancelled',
                        icon: <XCircleIcon className='h-4 w-4'/>
                      }
                    ]
                  : display.grouping === 'priority'
                  ? [
                    {
                      name:'No Priority',
                      icon: <Square3Stack3DIcon className='h-4 w-4'/>
                    },
                    {
                      name:'Low',
                      icon: <InboxIcon className='h-4 w-4'/>
                    },
                    {
                      name: 'Medium',
                      icon: <BoltIcon className='h-4 w-4 text-yellow-500 '/>
                    },
                    {
                      name: 'High',
                      icon: <CheckCircleIcon className='h-4 w-4 text-green-700'/>
                    },
                    {
                      name:'Urgent',
                      icon: <XCircleIcon className='h-4 w-4'/>
                    }
                  ]
                  : users.map((user) => user.name)
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
