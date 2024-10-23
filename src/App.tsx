import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScheduleSelector } from './ScheduleSelector';
import { ThankYou } from './ThankYou';
import Box from '@mui/material/Box';
import { Error } from './Error';
import Email from './Email';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import React from 'react';

interface AppProps {
  handleThemeToggle: (isDarkTheme: boolean) => void;
  darkTheme: boolean;
}

const App: React.FC<AppProps> = ({ handleThemeToggle, darkTheme }) => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <ThemeToggle onToggle={handleThemeToggle} />
        <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
          <Routes>
            <Route path="/" element={<Email />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/preferences" element={<ScheduleSelector />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
