import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Login/>
      <Home/>
    </div>
  )
}
