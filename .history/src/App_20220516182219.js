import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Team from './components/Team'
import Clients from './components/Clients'
import Products from './components/Products'
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}
