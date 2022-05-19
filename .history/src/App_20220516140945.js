import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <NavBar/>
      </Routes>
    </div>
  )
}
