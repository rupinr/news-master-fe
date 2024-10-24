import { createTheme, Theme } from '@mui/material/styles';

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3A7CA5', // Softer blue
    },
    secondary: {
      main: '#56C596', // Soft green
    },
    background: {
      default: '#F4F5F7', // Light gray
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E2E2E', // Darker gray
      secondary: '#616161', // Medium gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#3A7CA5',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2E2E2E',
    },
    body1: {
      fontSize: '1rem',
      color: '#616161',
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
          backgroundColor: '#3A7CA5',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#356B8D',
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
      main: '#87CEFA', // Light sky blue
    },
    secondary: {
      main: '#80CBC4', // Light mint green
    },
    background: {
      default: '#121212', // Almost black
      paper: '#1E1E1E', // Dark gray
    },
    text: {
      primary: '#E0E0E0', // Light gray
      secondary: '#BDBDBD', // Slightly darker gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#87CEFA',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#E0E0E0',
    },
    body1: {
      fontSize: '1rem',
      color: '#BDBDBD',
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
          backgroundColor: '#87CEFA',
          color: '#121212',
          '&:hover': {
            backgroundColor: '#76B6D9',
          },
        },
      },
    },
  },
});
