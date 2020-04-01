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
      white: '#fafafa',
    },
    text: {
      primary: '#222',
      secondary: '#fafafa',
    },
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
      fontSize: '1.65rem',
    },
    button: {
      fontSize: '0.75rem',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderTop: `solid 5px #222`,
        borderBottom: `solid 5px #222`,
        borderRadius: 0,
        padding: '10px 0',
        '&:before': {
          content: '""',
          width: 5,
          height: '100%',
          background: '#222',
          position: 'absolute',
          right: -5,
        },
        '&:after': {
          content: '""',
          width: 5,
          height: '100%',
          background: '#222',
          position: 'absolute',
          left: -5,
        },
      },
      containedPrimary: {
        backgroundImage: `
        linear-gradient(
          to bottom,
          #E8CFA0 20%,
          #F0D050 20%,
          #F0D050 85%,
          #FDAB3B 85%
          );
        `,
      },
      containedSecondary: {
        backgroundImage: `
        linear-gradient(
          to bottom,
          #e6e6e6 20%,
          #D6D6D6 20%,
          #D6D6D6 85%,
          #B9B9B9 85%
          );
        `,
      },
    },
  },
});

export { theme };
