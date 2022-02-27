import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

const MainLayout = ({ children }) => {
  return (
      <>
        <Navbar/>
        <Box>
            {children}
        </Box>
        <Footer/>
      </>
  )
}

export default MainLayout