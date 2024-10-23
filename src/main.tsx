import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';
import App from './App';
import { lightTheme, darkTheme } from './theme';

const RootComponent: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);

  const handleThemeToggle = (isDarkTheme: boolean) => {
    setTheme(isDarkTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App handleThemeToggle={handleThemeToggle} darkTheme={theme === darkTheme} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
