// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#F22C3E',
        },
        secondary: {
          main: '#048866',
        },
      },
/*   palette: {
    primary: {
      main: '#4caf50', // This is the default green color
    },
    // Add more customizations as needed
  }, */
  component: {
    defaultProps: { },
    valid: {},
    styles: {}
  }
});

export default theme;
