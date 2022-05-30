import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
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
              id= {team.id}
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
              fullname= {client.name}
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
              id= {product.id}
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
       
      <Routes>
          <Route path='/' element={<Login/>}/>

          <Route path='/dashboard' element={
          <Layout>
          <Home/>
          </Layout>
          }/>

          <Route path='/register' element={<Register/>}/>

          <Route path='/team' element={
            <Layout>
            <div className='px-8'>
              <div className='text-left ml-44 p-8'>
                <h1 className='text-3xl inline border-b-4 border-blue-900 bg-gray-100 text-gray-900 p-3'>Team Members</h1>
              </div>
              <div className='flex gap-12 justify-between items-center ml-56 mr-8 mt-4 bg-black text-white'>
                <p className='font-bold'>#</p>
                <p className='font-bold'>Image</p>
                <p className='font-bold'>Full name</p>
                <p className='font-bold'>Email</p>
                <p className='font-bold'>Phone number</p>
                <p className='font-bold'>Gender</p>
              </div>
              <div className='pb-12'>
              {teamsElement}
              </div>
            </div>
            </Layout>
          }/>

          <Route path='/clients' element={
            <Layout>
            <div className='px-8'>
            <div className='text-left ml-44 p-8'>
              <h1 className='text-3xl inline border-b-4 border-blue-900 bg-gray-100 text-gray-900 p-3'>Our Clients</h1>
            </div>
            <div className='grid grid-cols-3 pb-12'>
            {clientsElement}
            </div>
          </div>
          </Layout>
          }/>

          <Route path='/products' element={
            <Layout>
            <div className='px-8'>
            <div className='text-left ml-44 p-8'>
              <h1 className='text-3xl inline border-b-4 border-blue-900 bg-gray-100 text-gray-900 p-3'>Our Products</h1>
            </div>
            <div className='grid grid-cols-2 gap-6 pb-12 '>
            {productsElement}
            </div>
          </div>
          </Layout>
          }/>
        
      </Routes>
    </div>
  )
}
