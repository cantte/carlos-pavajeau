import { Typography, TypographyProps } from '@mui/material'

type Props = TypographyProps

const TextGradient = (props: Props) => {
  const { children } = props

  return (
    <Typography
      className="text-center text-6xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl xl:text-8xl leading-[1.1]"
      sx={{ lineHeight: '1.1' }}
      {...props}
    >
      <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
        {children}
      </span>
    </Typography>
  )
}

export default TextGradient
