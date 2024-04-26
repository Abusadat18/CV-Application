import React from 'react'

function Header({isEditable}) {
  return (
    <>
    {isEditable ? <h1 style={{textAlign: "center"}}>CV GENERATOR</h1> : null}
    </>
  )
}

export default Header