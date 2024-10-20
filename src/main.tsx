import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import App from './App';
import { lightTheme, darkTheme } from './theme';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const RootComponent: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkThemeToggle, setDarkThemeToggle] = useState<boolean>(prefersDarkMode);

  const switchTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkThemeToggle(event.target.checked);
  };

  const appliedTheme = darkThemeToggle ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2 }}>
        <FormControlLabel
          control={<Switch checked={darkThemeToggle} onChange={switchTheme} name="theme-toggle" />}
          label={darkThemeToggle ? <DarkModeIcon /> : <LightModeIcon />}
        />
      </Box>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
