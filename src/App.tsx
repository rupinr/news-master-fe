import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Confirmation from './Confirmation';
import ScheduleSelector from './ScheduleSelector';

import Email from './Email'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Email />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/preferences" element={<ScheduleSelector />} />
      </Routes>
    </Router>
  );
}
