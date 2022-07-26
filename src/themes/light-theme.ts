import { createTheme } from '@mui/material/styles';
import { red, } from '@mui/material/colors';


export const lightTheme = createTheme({
  components: {

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
          backgroundColor: 'white'
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed', // aunque haga scroll tendra su posicion fija
      },
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          height: 100
        },
      }
    },
  }
});