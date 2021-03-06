import { styled } from '@nextui-org/react'

export const StyledCardBlur = styled('div', {
  background: '$accents1',
  boxShadow: '$sm',
  borderRadius: '$lg',
  display: 'flex',
  flexDirection: 'column',
  p: '$8',
  bf: 'saturate(180%) blur(14px)',
  bg: 'rgba(255, 255, 255, 0.05)',
})
