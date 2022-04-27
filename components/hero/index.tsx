import {
  StyledGradientTitle,
  StyledSubtitle,
  StyledTitle,
} from 'components/hero/styles'
import { Button, Col, Container, Link, Row, Spacer } from '@nextui-org/react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <Container
        lg
        display="flex"
        alignItems="center"
        justify="space-between"
        wrap="nowrap"
        gap={0}
        as="section"
        css={{
          position: 'relative',
          height: 'calc(84vh - 76px)',
          '@xsMax': {
            height: 'calc(100vh - 64px)',
          },
        }}
      >
        <Row
          align="center"
          wrap="wrap"
          css={{
            zIndex: '$2',
            '@mdMax': {
              mt: '80px',
              p: '0 8px',
            },
            '@xsMax': {
              mt: '0px',
            },
          }}
        >
          <Col
            css={{
              position: 'relative',
              zIndex: '$2',
              '@md': {
                width: '50%',
              },
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <StyledTitle>Just a&nbsp;</StyledTitle>
            <StyledGradientTitle>developer</StyledGradientTitle>

            <StyledSubtitle>
              I&apos;m a full-stack developer with a passion for building
              beautiful, performant, and accessible web applications, APIs, and
              mobile apps.
            </StyledSubtitle>

            <Spacer y={1.5} />

            <Link
              href="https://github.com/cantte"
              target="_blank"
              rel="noreferrer"
            >
              <Button auto>Visit me on GitHub</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default Hero
