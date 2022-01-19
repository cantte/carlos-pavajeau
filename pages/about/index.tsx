import Section from 'components/Section'
import TextGradient from 'components/TextGradient'
import { Typography } from '@mui/material'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Carlos Pavajeau | About</title>
        <meta name="description" content="This is my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center p-4 items-center">
        <Section delay={0.1}>
          <TextGradient variant="h2" textAlign="center" sx={{ mb: 3 }}>
            About me
          </TextGradient>
          <Typography variant="body1" className="indent-4 text-justify">
            I&apos;m a junior software developer. I&apos;m 20 years old and I
            live in Pueblo Bello, Cesar, Colombia. I&apos;m currently studying
            at the UPC (Universidad Popular del Cesar), Colombia. I&apos;m
            studying engineering in systems.
          </Typography>
        </Section>
      </div>
    </>
  )
}

export default About
