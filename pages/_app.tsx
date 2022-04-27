import type { AppProps } from 'next/app'
import Main from 'components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { darkTheme, lightTheme } from 'theme/index'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Main router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Main>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
