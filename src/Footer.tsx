import React, { useState } from 'react';
import { Fab, Typography, Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FeedbackModal from './FeedbackModal';
import CommentIcon from '@mui/icons-material/Comment';

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
                <Fab
                    onClick={handleOpen}
                    color="primary"
                    aria-label="give feedback"
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                    }}
                >
                    <CommentIcon />
                </Fab>
                <FeedbackModal open={open} handleClose={handleClose} />
            </Box>
        </>
    );
};

export default Footer;
