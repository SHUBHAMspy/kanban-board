import { useEffect, useState } from 'react'
import './App.css'
import Dropdown from './components/common/dropdown/Dropdown'
import Board from './components/board/Board'


function App() {
  
  return (
    <>
      <div>
        <section className='flex justify-between items-center bg-white h-[8vh] px-4 py-2'>
          <nav>
            <div>
              <Dropdown/>
            </div>
          </nav>
        </section>
        <main className='bg-[#F4F5F8] h-auto'>
          <Board/>
        </main>
      </div>
      
    </>
  )
}

export default App
