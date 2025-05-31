import { Box, Typography, Button, Stack } from '@mui/material';
import {
  outerWrapperStyle,
  backgroundImageStyle,
  containerStyle,
  descriptionStyle,
  buttonContainedStyle,
  buttonOutlinedStyle,
} from '../../styles/CallToAction/CallToAction.styles';

const CallToAction = () => {
  return (
    <Box sx={outerWrapperStyle}>
      <Box sx={backgroundImageStyle} />
      <Box sx={containerStyle}>
        <Stack spacing={2} alignItems="center" position="relative" zIndex={2}>
          <Typography variant="h4" fontWeight="bold" color="#322e4f">
            Start your order
          </Typography>
          <Typography variant="body1" sx={descriptionStyle}>
            Get your favorites fast—hot or iced, made just how you like. Order ahead for pickup or delivery, right from your phone.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
            <Button variant="contained" size="large" sx={buttonContainedStyle}>
              Order Now
            </Button>
            <Button variant="outlined" size="large" sx={buttonOutlinedStyle}>
              Sign In
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CallToAction;
