import { Col, Container, Link, Row, Text } from '@nextui-org/react'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from 'components/navbar/styles'
import NextLink from 'next/link'
import ThemeToggle from 'components/theme-toggle'
import Twitter from 'components/icons/twitter'
import Github from 'components/icons/github'

const Navbar = () => {
  return (
    <StyledNavMainContainer>
      <StyledNavContainer>
        <Container lg as="nav" display="flex" wrap="nowrap" alignItems="center">
          <Col
            css={{
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <Row justify="flex-start" align="center">
              <NextLink href="/">
                <Text h3>Carlos Pavajeau</Text>
              </NextLink>
            </Row>
          </Col>

          <Col className="navbar__search-container">
            <Row
              className="navbar__search-row"
              justify="flex-end"
              align="center"
              css={{
                position: 'initial',
                '@mdMax': {
                  jc: 'center',
                },
              }}
            >
              <Row
                className="navbar__social-icons-container"
                justify="flex-end"
                align="center"
                gap={1}
                css={{
                  width: 'initial',
                  '@mdMax': {
                    d: 'none',
                  },
                }}
              >
                <Link
                  className="navbar__social-icon"
                  href="https://twitter.com/CarlosPavajeau"
                  target="_blank"
                  rel="noreferrer"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                >
                  <Twitter size={24} />
                </Link>

                <Link
                  className="navbar__social-icon"
                  href="https://github.com/cantte"
                  target="_blank"
                  rel="noreferrer"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                >
                  <Github size={24} />
                </Link>

                <ThemeToggle
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                />
              </Row>
            </Row>
          </Col>
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default Navbar
