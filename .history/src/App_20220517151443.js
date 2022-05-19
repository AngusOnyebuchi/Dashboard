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

  const [teams, setTeams] = useState([])

  const getTeam = async() => {
    const response = await fetch(teamsUrl)
    const teams = await response.json()
    setTeams(teams)
     console.log(teams)
     console.log('data type returned:', typeof teams)
  }

  useEffect(()=> {
      getTeam()
  }, [])

  const teamsElement = teams.map(team => {
    return (
      <Team
              key= {team.id}
              firstname= {team.firstname}
              lastname= {team.lastname}
              email= {team.email}
              phone= {team.phone}
              gender= {team.gender}
              image= {team.image}
              />
    )
  })

  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/createAccount' element={<CreateAccount/>}/>
          <Route path='/team' element={
            <div>
              {teamsElement}
            </div>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}
