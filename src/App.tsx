import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Preference } from './ScheduleSelector';
import { Error } from './Error';
import Email from './Email';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import React from 'react';
import { SeeYouAgain } from './SeeYouAgain'
import { ThankYou } from './ThankYou';
import Privacy from './Privacy';
import About from './About';
import { CheckYourEmail } from './CheckYourEmail';


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
        <Route path="/check-your-email" element={<CheckYourEmail />} />
        <Route path="/preferences" element={<Preference />} />
        <Route path="/goodbye" element={<SeeYouAgain />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
