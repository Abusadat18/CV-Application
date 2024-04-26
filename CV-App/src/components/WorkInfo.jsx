import React, { useState } from 'react'
import '../styles/workinfo.css'

function WorkInfo({isEditable}) {

  const [jobInfos, setJobInfos] = useState([
        {id: 1,},{id: 2}
    ]) 

  const updateJobInfos =(prev,currItem,field,e) => (
        prev.map((prevItem) => prevItem.id === currItem.id ? {...prevItem, [field]: e.target.value} : prevItem )
   ) 

  return (
    <div className='work-ctn'>
        <p className="work-title">EXPERIENCE</p>
        <div className="work-cardsContainer">

        {jobInfos.map((currItem) => 
                <div key={currItem.id} className='work-card'>
                    {isEditable ? 
                    <>
                    <input type="text" 
                           placeholder='Job Role / Position' 
                           value={currItem.role} 
                           onChange={(e) => setJobInfos((prev) => (updateJobInfos(prev, currItem, "role",e)))} />
                    <input type="text" 
                           placeholder='Company / Organization'
                           value={currItem.org}
                           onChange={(e) => setJobInfos((prev) => (updateJobInfos(prev,currItem,"org",e)))} />
                    <input type="text"
                           placeholder='Job Responsibilities'
                           value={currItem.responsibility}
                           onChange={(e) => setJobInfos((prev) => (updateJobInfos(prev,currItem,"responsibility",e)))} />
                    <input type="text"
                           placeholder='Duration e.g-2022-26'
                           value={currItem.duration}
                           onChange={(e) => setJobInfos((prev) => (updateJobInfos(prev,currItem,"duration",e)))} />
                    </>
                    : 
                    <>
                     <p className="workPosition">{currItem.role}</p>
                     <p className="companyName">{currItem.org}</p>
                     <p className="workRes">{currItem.responsibility}</p>
                     <p className="workDuration">{currItem.duration}</p>
                    </>
                    }
                </div>)}
        </div>
        {isEditable ? <button className='work-add-btn' onClick={() => setJobInfos([...jobInfos,{id: Date.now()}])}>Add more</button> : null }
    </div>
  )
}

export default WorkInfo