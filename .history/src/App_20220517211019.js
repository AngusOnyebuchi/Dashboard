import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Team from './components/Team'
import Clients from './components/Clients'
import Products from './components/Products'
import { Routes, Route } from "react-router-dom"

const teamsUrl = 'https://fakerapi.it/api/v1/persons?_quantity=12'
const clientsUrl = 'https://fakerapi.it/api/v1/companies?_quantity=12'
const productsUrl = 'https://fakerapi.it/api/v1/products?_quantity=12'


export default function App() {

  const [teams, setTeams] = useState([])
  const [clients, setClients] = useState([])
  const [products, setProducts] = useState([])

  const getTeam = () => {
    fetch(teamsUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      setTeams(data.data)
    })
  }

  const getClient = () => {
    fetch(clientsUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      setClients(data.data)
    })
  }

  const getProduct = () => {
    fetch(productsUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      setProducts(data.data)
    })
  }

  useEffect(()=> {
      getTeam()
  }, [])

  useEffect(()=> {
    getClient()
}, [])

useEffect(()=> {
  getProduct()
}, [])

  const teamsElement = teams && teams.length && teams.map(team => {
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

  const clientsElement = clients && clients.length && clients.map(client => {
    return (
      <Clients
              key= {client.id}
              firstname= {client.firstname}
              lastname= {client.lastname}
              email= {client.email}
              phone= {client.phone}
              gender= {client.gender}
              image= {client.image}
              />
    )
  })

  const productsElement = products && products.length && products.map(product => {
    return (
      <Products
              key= {product.id}
              name= {product.name}
              image= {product.image}
              netPrice= {product.net_price}
              taxes= {product.taxes}
              price= {product.price}
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
            <div className='px-8'>
              <div className='text-center p-8 text-black'>
                <h1 className='text-3xl'>Team Members</h1>
              </div>
              <div className='grid grid-cols-3 pb-12'>
              {teamsElement}
              </div>
            </div>}/>

          <Route path='/clients' element={
            <div className='px-8'>
            <div className='text-center p-8 text-black'>
              <h1 className='text-3xl'>Our Clients</h1>
            </div>
            <div className='grid grid-cols-3 pb-12'>
            {clientsElement}
            </div>
          </div>
          }/>

          <Route path='/products' element={
            <div className='px-8'>
            <div className='text-center p-8 text-black'>
              <h1 className='text-3xl'>Our Products</h1>
            </div>
            <div className='flex'>
            {productsElement}
            </div>
          </div>
          }/>

      </Routes>
    </div>
  )
}
