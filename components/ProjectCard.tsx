import { IconButton, Typography } from '@mui/material'
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
    <div className="min-w-full">
      <Section delay={0.2}>
        <div className="w-full border-white border-2 p-4 rounded-2xl m-4">
          <Typography variant="h5" textAlign="left" sx={{ mb: 3 }}>
            {title}
          </Typography>
          <Typography variant="body1" textAlign="left" sx={{ mb: 3 }}>
            {description}
          </Typography>
          <div>
            <a href={githubUrl} target="_blank"
               rel="noreferrer">
              <IconButton size="large" color="inherit">
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
