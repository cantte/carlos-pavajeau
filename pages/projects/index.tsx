import { NextPage } from 'next'
import TextGradient from 'components/TextGradient'
import ProjectCard from 'components/ProjectCard'
import axios from 'axios'
import Section from 'components/Section'

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
      <Section delay={0.1}>
        <TextGradient variant="h2" textAlign="center" sx={{ mb: 7 }}>
          Projects
        </TextGradient>
      </Section>

      {
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
          />
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get<Project>(`${process.env.API_URL}/api/projects`)
  const projects = response.data
  return {
    props: { projects },
  }
}

export default Projects
