import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const logo = '/box_logo.png'

const GuestLayout = () => {
  const { currentUser, userToken } = useStateContext()

  if (userToken) {
    return <Navigate to="/" />
  }
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src={logo}
            alt="Dumbo Octopus"
          />
        </div>
        <Outlet />
      </div>

    </>
  )
}

export default GuestLayout