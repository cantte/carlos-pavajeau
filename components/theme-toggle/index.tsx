import { Moon, Sun } from 'components/icons'
import { CSS, styled, Tooltip, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { FC } from 'react'

type Props = {
  className?: string
  css?: CSS
}

const StyledButton = styled('button', {
  dflex: 'center',
  size: 'auto',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  '& .theme-selector-icon': {
    color: '$colors$headerIconColor',
  },
  '@xsMax': {
    px: '$2',
  },
})

export const ThemeToggle: FC<Props> = ({ className, css }) => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Tooltip content="Toggle theme" placement="bottom">
      <StyledButton
        aria-label="toggle a light and dark color scheme"
        onClick={handleToggleTheme}
        css={css}
      >
        {isDark ? (
          <Sun filled className="theme-selector-icon" size={20} />
        ) : (
          <Moon filled className="theme-selector-icon" size={20} />
        )}
      </StyledButton>
    </Tooltip>
  )
}

export default ThemeToggle
