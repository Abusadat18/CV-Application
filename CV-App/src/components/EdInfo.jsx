import React from 'react'
import '../styles/edinfo.css'

function EdInfo() {
  return (
    <div className='ed-ctn'>
        <p className="ed-title">EDUCATION</p>
        <div className="ed-cardsContainer">
            <div className="ed-card">
                <p className="ed-courseName">Btech</p>
                <p className="ed-schoolName">Univeristy of Engineering & Management</p>
                <p className="ed-duration">2022-26</p>
            </div>
            <div className="ed-card">
                <p className="ed-courseName">Btech</p>
                <p className="ed-schoolName">Univeristy of Engineering & Management</p>
                <p className="ed-duration">2022-26</p>
            </div>
        </div>
    </div>
  )
}

export default EdInfo