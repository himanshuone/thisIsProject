import React from 'react'
import Navigation from './Navigation/Navigation'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <>
            <Navigation />


            <Outlet />


  </>
    )
}

export default Main
