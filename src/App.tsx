import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Preference } from './ScheduleSelector';
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
      <Header />
      <ThemeToggle onToggle={handleThemeToggle} />
      <Routes>
        <Route path="/" element={<Email />} />
        <Route path="/preferences" element={<Preference />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
