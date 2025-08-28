import React from 'react'
import { ContextToggle } from './Toggle'

const ToggleButton = ({children}) => {
    const {toggle} = React.useContext(ContextToggle)

  return (              //don't forget to import toggle as context, it is not coming through props
    <div onClick={toggle}> 
      {children}
    </div>
  )
}

export default ToggleButton
