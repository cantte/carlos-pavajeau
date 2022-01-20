import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import Section from 'components/Section'

interface Props {
  title: string
  description: string
  githubUrl: string
}

const ProjectCard = (props: Props) => {
  const { title, description, githubUrl } = props
  return (
    <div className="min-w-full m-4">
      <Section delay={0.2}>
        <div className="w-full p-10 bg-white shadow-lg rounded-xl bg-opacity-5">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <span className="mt-2 text-base font-medium text-gray-400">
            {description}
          </span>
          <div>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <IconButton size="large" color="inherit" className="p-0 mt-3">
                <GitHubIcon />
              </IconButton>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ProjectCard
