import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import RoutePath from '../JSON-API/RoutePath.json'
function Navbar() {
  return (
    <>
      <nav>
        {
          RoutePath.map((item)=>{
            return(     
              <NavLink style={({isActive})=>{
                return{color:isActive?'aqua':'white'}
              }} className='menu' to={item.url} key={item.id}>{item.component}</NavLink>
            )
          })
        }
      </nav>
      <Outlet />
    </>
  )
}
export default Navbar