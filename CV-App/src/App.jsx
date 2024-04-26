import { useState } from 'react'
import './App.css'
import About from './components/About'
import EdInfo from './components/EdInfo'
import WorkInfo from './components/WorkInfo'

function App() {

  const [isEditable, setIsEditable] = useState(true)

  return (
    <>
      <About isEditable={isEditable}/>
      <EdInfo isEditable={isEditable}/>
      <WorkInfo isEditable={isEditable}/>
      <button onClick={() => setIsEditable(!isEditable)}>{isEditable ? "Update" : "Edit"}</button>
    </>
  )
}

export default App
