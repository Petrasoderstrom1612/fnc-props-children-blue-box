import React from 'react'
import { ContextToggle } from './Toggle'

const ToggleDisplay = ({children}) => {
const {on} = React.useContext(ContextToggle)

  return children(on)
}

export default ToggleDisplay
