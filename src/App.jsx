import './App.css'
import Board from './components/board/Board'
import Navbar from './components/navbar/Navbar'


function App() {
  
  return (
    <>
      <div>
        <section className='bg-white h-[10vh] px-4 py-2 dark:bg-[#161B22] dark:text-white'>
          <Navbar/>
        </section>
        <main className='bg-[#F4F5F8] dark:bg-[#010409] dark:text-white h-auto'>
          <Board/>
        </main>
      </div>
      
    </>
  )
}

export default App
