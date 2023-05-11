import React from "react"
import { Navigate } from 'react-router-dom'
const ProtectedRouteElement = ({ element: Component, ...props }) => {
  console.log(Component)
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />
  )
}

export default ProtectedRouteElement;
