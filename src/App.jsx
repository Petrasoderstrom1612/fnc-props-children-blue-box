import { useState } from 'react'
import Toggle from "./components/index"


function App() {

  return (
    <>
    <Toggle>
      <Toggle.Button>
        <Toggle.Display>
          {(on) => {return <div className={`box ${on ? "filled" : ""}`}></div>}}
        </Toggle.Display>
      </Toggle.Button>
    </Toggle>
    </>
  )
}

export default App

