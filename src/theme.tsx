import { createTheme, Theme } from '@mui/material/styles';

const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288D1',
    },
    secondary: {
      main: '#D32F2F',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#0277BD',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#212121',
    },
    body1: {
      fontSize: '1rem',
      color: '#757575',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#0288D1',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#0277BD',
          },
        },
      },
    },
  },
});

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
    },
    secondary: {
      main: '#03DAC6',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#BB86FC',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#E0E0E0',
    },
    body1: {
      fontSize: '1rem',
      color: '#B0B0B0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#BB86FC',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#3700B3',
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
