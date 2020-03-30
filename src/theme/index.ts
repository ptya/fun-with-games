import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F0D050',
      dark: '#FDAB3B',
    },
    secondary: {
      main: '#D6D6D6',
      dark: '#8D8D8D',
    },
    success: {
      main: '#3AB54B',
    },
    warning: {
      main: '#E3001D',
    },
    common: {
      black: '#222',
      white: '#fafafa'
    },
    text: {
      primary: '#222',
      secondary: '#fafafa',
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: [
      '"Press Start 2P"',
      'Roboto',
      'cursive',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '1,625rem',
    },
    button: {
      fontSize: '0.75rem',
    },
  },
})

export { theme }