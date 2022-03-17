import { Container } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (

      <>
      
        <NavBar/>
        <Container>
            {children}
        </Container>

      </>

  )
}

export default Layout