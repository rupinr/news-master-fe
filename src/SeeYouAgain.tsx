import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const SeeYouAgain = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ mb: 2 }} color="error">
                    We're Sorry to See You Go!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Your subscription has been successfully cancelled. If you ever change your mind, you know where to find us.
                </Typography>
            </Box>
        </Container>
    );
};
