import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './views/Home'
import Add from './views/Add'

createRoot(document.getElementById('root')).render(
  <div className='bg-slate-50 m-0 p-0 fixed min-h-screen w-full'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  </div>
)
