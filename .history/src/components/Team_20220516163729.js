import React, {useState, useEffect} from 'react'

export default function Team() {

    const [team, setTeam] = useState([])
    console.log(team)

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch ('https://fakerapi.it/api/v1/persons? quantity=10')
            .then(response => response.json())
            console.log(response)
        }
        fetchPost()
    })

  return (
    <div name="team">
        <div>
            <p>This is the Team Section</p>
        </div>
    </div>
  )
}
