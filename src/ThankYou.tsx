import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const ThankYou = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ mb: 2 }} color="primary">
                    Thank You for Your Subscription!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    We're thrilled to have you with us. Your subscription has been successfully activated. Stay tuned for personalized news updates delivered fresh to your inbox!
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Cheers,<br />The QuickBrew Team
                </Typography>
            </Box>
        </Container>
    );
};
