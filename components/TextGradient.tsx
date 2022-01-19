import { Typography, TypographyProps } from '@mui/material'

type Props = TypographyProps

const TextGradient = (props: Props) => {
  const { children } = props
  return (
    <Typography
      className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500"
      {...props}
    >
      {children}
    </Typography>
  )
}

export default TextGradient
