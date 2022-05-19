import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Team from './components/Team'
import Clients from './components/Clients'
import Products from './components/Products'
import { Routes, Route } from "react-router-dom"

const teamsUrl = 'https://fakerapi.it/api/v1/persons?_quantity=10'

export default function App() {

  const [teams, setTeams] = useState([0])

  const getTeam = async() => {
    const response = await fetch(teamsUrl)
    const teams = await response.json()
    setTeams(teams)
     console.log(teams)
  }

  useEffect(()=> {
      getTeam()
  }, [])

  const teamsElement = teams.map((teams) => {
    return (
      <Team
              key= {teams.id}
              firstname= {teams.firstname}
              lastname= {teams.lastname}
              email= {teams.email}
              phone= {teams.phone}
              gender= {teams.gender}
              image= {teams.image}
              />
    )
  })
  console.log(teams)

  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
          <Route path='/team' element={
            <div>
              <Team/>
            </div>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}