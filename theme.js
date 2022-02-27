import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      bg: mode('#fffff', '#202023')(props),
      tag: mode('red', 'teal')(props),
    },
  })
}

const semanticTokens = {
    colors: {
      customRed: {
        default: '#EC615B',
        _dark: '#EC615B'
      },
      customBlue: {
        default: '#2B6CB0',
        _dark: '#2B6CB0'
      },
      customYellow: {
        default: '#de8f2f',
        _dark: '#F6AD55'
      },
    }
  }

const fonts = { 
  heading: 'Quicksand, sans-serif',
  body: 'Quicksand, sans-serif'
}

const theme = extendTheme({ config, fonts, styles, semanticTokens})

export default theme
