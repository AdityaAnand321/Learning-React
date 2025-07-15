import React from 'react'
import { Outlet } from 'react-router';

const dashboard = () => {
  return (
    <div>
      Dashboard
      <Outlet/>
    </div>
  )
}

export default dashboard
