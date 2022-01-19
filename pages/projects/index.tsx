import { NextPage, NextPageContext } from 'next'
import TextGradient from 'components/TextGradient'
import ProjectCard from 'components/ProjectCard'
import axios from 'axios'
import Section from 'components/Section'
import Head from 'next/head'

interface Project {
  title: string
  description: string
  githubUrl: string
}

interface Props {
  projects: Project[]
}

const Projects: NextPage<Props> = ({ projects }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-4 items-center">
      <Head>
        <title>Carlos Pavajeau | Projects</title>
        <meta name="description" content="This is my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section delay={0.1}>
        <TextGradient variant="h1">Projects</TextGradient>
      </Section>

      <div className="mt-7" />

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const response = await axios.get<Project>(
    `${process.env.API_URL}/api/projects`,
  )
  const projects = response.data
  return {
    props: { projects },
  }
}

export default Projects
