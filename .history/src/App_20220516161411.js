import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Team from './components/Team'
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
          <Route path='/team' element={<Team/>}/>
      </Routes>
    </div>
  )
}
