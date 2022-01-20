import { TypographyProps } from '@mui/material'

type Props = TypographyProps

const TextGradient = (props: Props) => {
  const { children } = props

  return (
    <h1 className="text-center text-6xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl xl:text-8xl leading-[1.1]">
      <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
        {children}
      </span>
    </h1>
  )
}

export default TextGradient
