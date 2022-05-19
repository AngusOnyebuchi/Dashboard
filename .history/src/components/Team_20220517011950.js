import React, { useState, useEffect } from 'react'

const url = 'https://fakerapi.it/api/v1/persons?_quantity=10'

export default function Team() {
  
  const [teams, setTeams] = useState([])

  const getTeam = async() => {
    const response = await fetch(url)
    const teams = await response.json()
    setTeams(teams)
    console.log(teams)
  }

  useEffect(()=> {
      getTeam()
  }, [])
    
  return (
    <div name="team" className='ml-48'>
        <div className='text-center p-8 text-black'>
            <h1 className='text-3xl'>Team Members</h1>
        </div>

        <div className='px-8'>

        <div className='text-black'>
          {teams.map((team) => {
            console.log(team)
          })}
            <p>Full name: Angus Onyebuchi</p>
            <p>Email: AngusOnyebuchi@gmail.com</p>
            <p>Phone number: +23457688875885</p>
            <p>Gender: Male</p>
            <img href="" alt='Image'/>
            
        </div>

        </div>

    </div>
  )
}
