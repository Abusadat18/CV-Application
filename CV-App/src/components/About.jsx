import "../styles/about.css"
import React, { useState } from 'react'

function About({isEditable}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phNum, setPhNum] = useState("")
  const [location, setLocation] = useState("")

  return (
    <div className="about-ctn">
        {isEditable ? <input className="inputName" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value) } autoFocus={true}  /> : <h2 className="name">{name}</h2>}

        <div className="info">
            {isEditable ? 
            <>
              <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> 
              <input placeholder="Phone number" type="tel" value={phNum} onChange={(e) => setPhNum(e.target.value)} />
              <input placeholder="Location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </>
            : 
            <>
              <p className="email">{email}</p>
              <p className="number">{phNum}</p>
              <p className="location">{location}</p>
            </>
          }
        </div>
    </div>
  )
}

export default About