import React from 'react'
import {useRef} from "react" //don't forget {}

const ContextToggle = React.createContext()

const Toggle = ({children}) => { //you have to declare {}
    const [on, setOn] = React.useState(false)
    const nonFirstRenderRef = useRef(true)

    const toggle = () => {
        setOn(prevOn => !prevOn)
    }

    React.useEffect(()=>{
        if(nonFirstRenderRef.current){
            nonFirstRenderRef.current = false
        } else {
            toggle()
        }
    },[on])

  return (                  //do not forget .Provider 
    <ContextToggle.Provider value={{on, toggle}}> 
        {children}
    </ContextToggle.Provider>
  )
}

export default Toggle
export {ContextToggle}
