import React, { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { submitFeedback } from './service/service';

const FeedbackModal: React.FC<{ open: boolean, handleClose: () => void }> = ({ open, handleClose }) => {
    const [feedback, setFeedback] = useState('');
    const theme = useTheme();

    const handleSubmit = () => {
        handleClose();
        submitFeedback({ content: feedback });
        setFeedback('');
    };

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="feedback-modal" aria-describedby="feedback-modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: '80%', sm: 400 }, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
                <Typography id="feedback-modal-title" variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    Contact Us
                </Typography>
                <TextField
                    fullWidth
                    label="How can we help you?"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <Button variant="contained" sx={{ mt: 2, backgroundColor: theme.palette.primary.main }} onClick={handleSubmit}>Send</Button>
            </Box>
        </Modal>
    );
};

export default FeedbackModal;
