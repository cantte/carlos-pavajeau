import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'

const StyledDiv = styled(motion.div)({
  marginBottom: 6,
})

interface Props {
  children: ReactNode
  delay?: number
}

const Section = (props: Props) => {
  const { children, delay } = props
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </StyledDiv>
  )
}

Section.defaultProps = {
  delay: 0,
}

export default Section
