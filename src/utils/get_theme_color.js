import colors from '~/styles/colors'

const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return colors.light
  if (theme === 'dark') return colors.darker
}

export default getThemeColor
