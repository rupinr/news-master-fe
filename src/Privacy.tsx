import { Container, Typography, Box, Link } from '@mui/material';

const Privacy = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Your privacy is important to us. This privacy statement explains the personal data we collect, how we use it, and your rights to your data.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mt: 4, mb: 2 }}>
                    Information We Collect
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    We only collect your email address and preferred news sources and subscription schedule.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mt: 4, mb: 2 }}>
                    How We Use Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our users. We also use the information to offer you tailored content.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mt: 4, mb: 2 }}>
                    Sharing Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    We do not share your personal information with companies, organizations, or individuals outside of our company except in the following cases: with your consent, for legal reasons, or for external processing.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mt: 4, mb: 2 }}>
                    Your Data Rights
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    You have the right to access, update, and delete your personal information. You can exercise these rights by contacting us.
                </Typography>
                <Typography variant="body1" sx={{ mt: 4 }}>
                    If you have any questions or concerns about our use of your personal information, please reach out to us through our contact form.                </Typography>

            </Box>
        </Container>
    );
};

export default Privacy;
