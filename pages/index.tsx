import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { Stack, Typography } from '@mui/material'
import Section from 'components/Section'
import TextGradient from 'components/TextGradient'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Carlos Pavajeau</title>
        <meta name="description" content="This is my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Section delay={0.1}>
          <TextGradient variant="h1" sx={{ marginBottom: 10 }}>
            Full-stack developer
          </TextGradient>
        </Section>

        <div className="w-full">
          <Section delay={0.2}>
            <Stack spacing={1}>
              <Typography align="left" variant="h5">
                Carlos Pavajeau
              </Typography>
              <Typography variant="body1" className="indent-4 text-justify">
                Developer with a passion for building web, mobile and desktop
                applications. With knowledge in the field of software
                development, I have a strong background in languages such as
                Java, JavaScript, TypeScript, C#, and Python. Also, I have
                experience with the following technologies: Angular, React,
                Node.js, Asp.Net, Docker, Kubernetes, PosgreSQL, MySQL. I am
                currently learning React Native.
              </Typography>
            </Stack>
          </Section>
        </div>
      </main>
    </div>
  )
}

export default Home
