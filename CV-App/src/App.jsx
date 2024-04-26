import { useState } from 'react'
import './App.css'
import About from './components/About'
import EdInfo from './components/EdInfo'
import WorkInfo from './components/WorkInfo'
import Header from './components/Header'

function App() {

  const [isEditable, setIsEditable] = useState(true)

  return (
    <>
      <Header isEditable={isEditable}/>
      <About isEditable={isEditable}/>
      <EdInfo isEditable={isEditable}/>
      <WorkInfo isEditable={isEditable}/>
      <button type='button' onClick={() => setIsEditable(!isEditable)}>{isEditable ? "Update" : "Edit"}</button>
    </>
  )
}

export default App
