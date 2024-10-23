import { createTheme, Theme } from '@mui/material/styles';

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4A90E2', // Soft blue
    },
    secondary: {
      main: '#50E3C2', // Mint green
    },
    background: {
      default: '#F7F8FA', // Light gray
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333', // Dark gray
      secondary: '#757575', // Medium gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#4A90E2',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#333333',
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
          backgroundColor: '#4A90E2',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#4185D2',
          },
        },
      },
    },
  },
});


export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#82B1FF', // Soft light blue
    },
    secondary: {
      main: '#B9F6CA', // Mint green
    },
    background: {
      default: '#121212', // Almost black
      paper: '#1E1E1E', // Dark gray
    },
    text: {
      primary: '#FFFFFF', // White
      secondary: '#B0B0B0', // Light gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#82B1FF',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#FFFFFF',
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
          backgroundColor: '#82B1FF',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#6FA8E5',
          },
        },
      },
    },
  },
});


