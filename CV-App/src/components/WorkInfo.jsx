import React from 'react'
import '../styles/workinfo.css'

function WorkInfo() {
  return (
    <div className='work-ctn'>
        <p className="work-title">EXPERIENCE</p>
        <div className="work-cardsContainer">
            <div className="work-card">
                <p className="workPosition">Front End Engineer</p>
                <p className="companyName">XYZ Pvt Limited</p>
                <p className="workRes">Desinging UI,Handling API,Optimization</p>
                <p className="workDuration">Jan 22 to Dec-24</p>
            </div>
        </div>
    </div>
  )
}

export default WorkInfo