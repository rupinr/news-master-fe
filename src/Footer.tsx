import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FeedbackModal from './FeedbackModal';
import Link from '@mui/material/Link';

const Footer: React.FC = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    paddingBottom: '80px',
                }}
            >
            </Box>
            <Box
                component="footer"
                sx={{
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: theme.palette.background.default,
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    zIndex: 10,
                }}
            >
                <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                    Made with ❤️ by QuickBrewNews.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Link href="/#/privacy" variant="body2" color="primary">Privacy</Link>
                    <Link href="/#/about" variant="body2" color="primary">About</Link>
                    <Link onClick={handleOpen} href="/#/" variant="body2" color="primary">Contact Us</Link>
                </Box>
                <FeedbackModal open={open} handleClose={handleClose} />
            </Box>
        </>
    );
};

export default Footer;
