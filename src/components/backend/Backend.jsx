import React from 'react'
import { Outlet } from 'react-router-dom'
import BackPage from './BackPage'
import LeftMenu from './LeftMenu'

function Backend() {
  return (
    <div>
        Backend
        <LeftMenu />
        <Outlet />
        {/* <BackPage /> */}
    </div>
  )
}

export default Backend