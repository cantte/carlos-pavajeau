import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="primary"
      sx={{ paddingTop: 2 }}
    >
      <Toolbar variant="dense">
        <Container maxWidth="md">
          <Stack
            direction="row"
            spacing={10}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              <NextLink href="/">Carlos Pavajeau</NextLink>
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                <NextLink href="/projects">Projects</NextLink>
              </Typography>
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                <NextLink href="/about">About</NextLink>
              </Typography>
              <div>
                <a
                  href="https://github.com/cantte"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton size="large" color="inherit">
                    <GitHubIcon />
                  </IconButton>
                </a>
              </div>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
