import React from 'react';
import { Typography, Container } from '@mui/material';
import { MissionWrapper, MissionText } from "../../styles/mission/mission.styles"

const Mission = () => {
  return (
    <MissionWrapper>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <MissionText variant="body1">
          To brew exceptional coffee while supporting sustainability, fair trade, and warm
          café communities across the globe.
        </MissionText>
      </Container>
    </MissionWrapper>
  );
};

export default Mission;
