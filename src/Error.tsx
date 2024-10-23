import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const Error = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography component="h1" sx={{ mb: 2 }} color="error">
                    Oops! Something went wrong.
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    We apologize for the inconvenience, but it seems there was an error processing your request.
                </Typography>
                <Typography component="p">
                    Please make sure you clicked the right link. If clicking doesn't work, try copying and pasting the URL from the email.
                </Typography>
                <Typography component="p">
                    If the issue persists, contact our support team for assistance.
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Link href="/" variant="body2" color="primary">
                        Go to Home Page
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};
