import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import Main from 'components/layouts/main'
import { AnimatePresence } from 'framer-motion'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
