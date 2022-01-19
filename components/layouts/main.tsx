import { Box, Container } from '@mui/material'
import Navbar from 'components/Navbar'
import { ReactNode } from 'react'
import { NextRouter } from 'next/router'

interface Props {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children }: Props) => {
  return (
    <Box sx={{ paddingBottom: 8 }}>
      <Navbar />

      <Container maxWidth="md">{children}</Container>
    </Box>
  )
}

export default Main
