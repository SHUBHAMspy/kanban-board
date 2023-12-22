import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/board/Board'
import Navbar from './components/navbar/Navbar'


function App() {
  
  return (
    <>
      <div>
        <section className='bg-white h-[10vh] px-4 py-2'>
          <Navbar/>
        </section>
        <main className='bg-[#F4F5F8] h-auto'>
          <Board/>
        </main>
      </div>
      
    </>
  )
}

export default App
