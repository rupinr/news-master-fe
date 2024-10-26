import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Welcome to QuickBrewNews! We’re passionate about delivering fresh and personalized news updates directly to your inbox. Our goal is to keep you informed and engaged with the latest happenings around the world, tailored to your interests and preferences.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Our Mission
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    At QuickBrewNews, our mission is to provide a daily dose of insightful, relevant, and captivating news. We believe in the power of information and its ability to connect and empower individuals. Our dedicated service fetches and sends news from the sources you select, making sure you get the content that matters most to you. And the best part? It's all free!
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Our Team
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    QuickBrewNews is a hobby project run by a one-person team. Driven by a passion for news and technology, I strive to deliver a seamless and enriching news experience.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Join Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Stay updated with QuickBrewNews and join our community of informed readers. Subscribe to our newsletter and follow us on social media to never miss out on the latest news and updates. Our Instagram page is still under construction, but stay tuned for exciting content coming soon!
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
