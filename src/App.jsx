import { useState } from 'react'
import Toggle from "./components/index"


function App() {

  return (
    <>
    <Toggle>
      <Toggle.Button>
        <div className="box"></div>
      </Toggle.Button>
    </Toggle>
    </>
  )
}

export default App
