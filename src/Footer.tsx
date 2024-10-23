import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FeedbackModal from './FeedbackModal';
import CommentIcon from '@mui/icons-material/Comment';

const Footer: React.FC = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ textAlign: 'center', p: 2, backgroundColor: theme.palette.background.default }}>
            <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                Made with ❤️ by QuickBrewNews. Stay curious!
            </Typography>
            <Button
                onClick={handleOpen}
                variant="contained"
                startIcon={<CommentIcon />}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                Give Feedback
            </Button>
            <FeedbackModal open={open} handleClose={handleClose} />
        </Box>
    );
};

export default Footer;
