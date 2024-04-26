import React, { useState } from 'react'
import '../styles/edinfo.css'

function EdInfo({isEditable}) {

    const [eduInfos, setEduInfos] = useState([
         {
            id: Date.now(),
            courseName: "Btech",
            schoolName: "University of Engineering & Management",
            duration: "2022-26"
         }
        ])

    const updateEduInfos =(prev,currItem,field,e) => (
         prev.map((prevItem) => prevItem.id === currItem.id ? {...prevItem, [field]: e.target.value} : prevItem )
    )    

  return (
    <div className='ed-ctn'>
        <p className="ed-title">EDUCATION</p>
        <div className="ed-cardsContainer">

            {eduInfos.map((currItem) => 
                <div key={currItem.id} className='ed-card'>
                    {isEditable ? 
                    <>
                    <input type="text" 
                           placeholder='Course/Class/Degree' 
                           value={currItem.courseName} 
                           onChange={(e) => setEduInfos((prev) => (updateEduInfos(prev, currItem, "courseName",e)))} />
                    <input type="text" 
                           placeholder='Institute/School/University'
                           value={currItem.schoolName}
                           onChange={(e) => setEduInfos((prev) => (updateEduInfos(prev,currItem,"schoolName",e)))} />
                    <input type="number"
                           placeholder='Duration e.g-2022-26'
                           value={currItem.duration}
                           onChange={(e) => setEduInfos((prev) => (updateEduInfos(prev,currItem,"duration",e)))} />
                    </>
                    : 
                    <>
                     <p className="ed-courseName">{currItem.courseName}</p>
                     <p className="ed-schoolName">{currItem.schoolName}</p>
                     <p className="ed-duration">{currItem.duration}</p>
                    </>
                    }
                </div>)}
        </div>
    </div>
  )
}

export default EdInfo