import { useState, MouseEvent } from 'react'
import './App.css'
import './style/style.scss'
import Header from './components/Header/Header'
import { Routes, NavLink, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import CreatePage from './components/CreatePage/CreatePage'



function App() {
  
  
  const[page,setPage] = useState('all')
  // const [create, setCreate] = useState(false)

  //     const CreatePage =()=>{
  //         setCreate(true)
  //     }import CreatePage from './components/CreatePage/CreatePage'


  return (
    <>
   
    <nav>
      <ul className='HomePage'>
        <li>
          <NavLink style={{ background: page ==='Главная' ? 'rgb(112, 216, 176)': 'buttonface'}} onClick={()=>setPage('Главная')}  className='CreateButton' to="/home">Главная</NavLink>
        </li>
        <li>
          <NavLink style={{ background: page ==='about' ? 'rgb(112, 216, 176)': 'buttonface'}}  onClick={()=>setPage('about')} className='CreateButton' to="/header">about</NavLink>
        </li>
        <li>
          <NavLink style={{ background: page ==='all' ? 'rgb(112, 216, 176)': 'buttonface'}}   onClick={()=>setPage('all')}  className='CreateButton' to="/about">all</NavLink>
        </li>
        <li>
          <NavLink style={{ background: page ==='Создать'  ?'rgb(112, 216, 176)': 'buttonface'}} onClick={()=>setPage('Создать')}  className='CreateButton' to="/create">Создать</NavLink>
        </li>
        
      </ul>
    </nav>
   
    

    <Routes>
      <Route path="/home" element={<Main/>} />
      <Route path="/create" element={<CreatePage />} />
      <Route path='/header' element = {<Header/>}/>
      <Route path='main' />
    </Routes>
    </>
  
  )
}
            

export default App;
