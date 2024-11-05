import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import InfoIcon from '@mui/icons-material/Info';

export const CheckYourEmail = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ mb: 2 }} color="primary">
                    Check Your Email!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Please check your email and click the confirmation link to complete your subscription.
                </Typography>
                <Alert icon={<InfoIcon fontSize="inherit" />} severity="success">
                    <Typography sx={{ mb: 2 }}>
                        If you are already a subscriber, click the link in the email to customize your preferences.
                    </Typography>
                </Alert>
            </Box>
        </Container>

    );
};
