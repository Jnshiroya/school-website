import AlertContext from "./alertcontext";
import React,{useState} from 'react'

function AlertState(props) {
    const [alert, setAlert] = useState(null);
  const showalert = (type, message) => {
    setAlert({ type: type, message: message })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    
        <AlertContext.Provider value={{alert,showalert}}>
           {props.children}
        </AlertContext.Provider>
  )
}

export default AlertState