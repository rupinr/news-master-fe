import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScheduleSelector from './ScheduleSelector';
import { ThankYou } from './ThankYou';
import { Congratulations } from './Congratulations';
import { Error } from './Error';
import Email from './Email';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Email />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/error" element={<Error />} />
        <Route path="/preferences" element={<ScheduleSelector />} />
        <Route path="/congratulations" element={<Congratulations />} />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
