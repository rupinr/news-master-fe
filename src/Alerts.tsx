import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';

import Typography from '@mui/material/Typography';

export function SuccessfullEmailSubmitAlert() {
    return (
        <div>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                <Typography component="h1" sx={{ mb: 2 }}>
                    Thank you for subscribing! Check your email and click the confirmation link to complete your subscription.
                </Typography>
            </Alert>
            <Alert icon={<InfoIcon fontSize="inherit" />} severity="success">
                <Typography component="h1" sx={{ mb: 2 }}>
                    If you are already a subscriber, click on the link to customize your preferences.
                </Typography>
            </Alert >
        </div >
    );
}

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
