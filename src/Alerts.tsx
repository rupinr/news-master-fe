import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import Typography from '@mui/material/Typography';

export function TooManyEmailSubmitAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            <Typography component="h1" sx={{ mb: 2 }}>
                Oops! It looks like you've tried to create a subscription too many times without confirming it. Please check your email and click on the confirmation link to complete the process. Thanks for understanding!
            </Typography>
        </Alert>
    );
}

export function UnknownErrorAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            <Typography component="h1" sx={{ mb: 2 }}>
                Uh-oh! An unknown error occurred. Please try again. We apologize for any inconvenience caused.
            </Typography>
        </Alert>
    );
}
