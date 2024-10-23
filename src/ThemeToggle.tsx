import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useMediaQuery } from '@mui/material';

interface ThemeToggleProps {
    onToggle: (isDarkTheme: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('darkTheme');
        return savedTheme !== null ? JSON.parse(savedTheme) : prefersDarkMode;
    };

    const [darkThemeToggle, setDarkThemeToggle] = useState<boolean>(getInitialTheme);

    useEffect(() => {
        localStorage.setItem('darkTheme', JSON.stringify(darkThemeToggle));
        onToggle(darkThemeToggle);
    }, [darkThemeToggle, onToggle]);

    const switchTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkThemeToggle(event.target.checked);
    };

    return (
        <Box sx={{ position: 'absolute', top: 0, right: 0, p: 0.5 }}>
            <FormControlLabel
                control={<Switch color={'secondary'} checked={darkThemeToggle} onChange={switchTheme} name="theme-toggle" />}
                label={darkThemeToggle ? <DarkModeIcon color='secondary' /> : <LightModeIcon color='secondary' />}
            />
        </Box>
    );
};

export default ThemeToggle;
