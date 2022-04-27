import { ReactNode } from 'react'
import { NextRouter } from 'next/router'
import Navbar from 'components/navbar'
import { Container } from '@nextui-org/react'

interface Props {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <Container>{children}</Container>
    </>
  )
}

export default Main
