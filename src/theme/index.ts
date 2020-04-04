import { createMuiTheme } from '@material-ui/core/styles';
import { Mixins } from '@material-ui/core/styles/createMixins';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

// bordered: {
//   position: React.CSSProperties['position'];
//   borderTop: React.CSSProperties['borderTop'];
//   borderBottom: React.CSSProperties['borderBottom'];
//   borderRadius: React.CSSProperties['borderRadius'];
//   padding: React.CSSProperties['padding'];
//   '&:before': {
//     content: React.CSSProperties['content'];
//     width: React.CSSProperties['width'];
//     height: React.CSSProperties['height'];
//     background: React.CSSProperties['background'];
//     position: React.CSSProperties['position'];
//     right: React.CSSProperties['right'];
//     top: React.CSSProperties['top'];
//   };
//   '&:after': {
//     content: React.CSSProperties['content'];
//     width: React.CSSProperties['width'];
//     height: React.CSSProperties['height'];
//     background: React.CSSProperties['background'];
//     position: React.CSSProperties['position'];
//     right: React.CSSProperties['right'];
//     top: React.CSSProperties['top'];
//   };
// };

declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    bordered: CSSProperties;
  }
  // // allow configuration using `createMuiTheme`
  // interface ThemeOptions {
  //   mixins: {
  //     bordered: {
  //       position: React.CSSProperties['position'];
  //       borderTop: React.CSSProperties['borderTop'];
  //       borderBottom: React.CSSProperties['borderBottom'];
  //       borderRadius: React.CSSProperties['borderRadius'];
  //       padding: React.CSSProperties['padding'];
  //       '&:before': {
  //         content: React.CSSProperties['content'];
  //         width: React.CSSProperties['width'];
  //         height: React.CSSProperties['height'];
  //         background: React.CSSProperties['background'];
  //         position: React.CSSProperties['position'];
  //         right: React.CSSProperties['right'];
  //         top: React.CSSProperties['top'];
  //       };
  //       '&:after': {
  //         content: React.CSSProperties['content'];
  //         width: React.CSSProperties['width'];
  //         height: React.CSSProperties['height'];
  //         background: React.CSSProperties['background'];
  //         position: React.CSSProperties['position'];
  //         right: React.CSSProperties['right'];
  //         top: React.CSSProperties['top'];
  //       };
  //     };
  //   };
  // }
}

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
  mixins: {
    bordered: {
      position: 'relative',
      borderTop: `solid 5px #222`,
      borderBottom: `solid 5px #222`,
      borderRadius: 0,
      '&:before': {
        content: '""',
        width: 5,
        height: '100%',
        background: '#222',
        position: 'absolute',
        right: -5,
        top: 0,
      },
      '&:after': {
        content: '""',
        width: 5,
        height: '100%',
        background: '#222',
        position: 'absolute',
        left: -5,
        top: 0,
      },
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
    h2: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '0.65rem',
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
