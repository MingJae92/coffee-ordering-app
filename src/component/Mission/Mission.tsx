import React from 'react';
import {
  MissionWrapper,
  Overlay,
  MissionContent,
  MissionHeading,
  MissionText,
} from '../../styles/mission/mission.styles';

const Mission = () => {
  return (
    <MissionWrapper>
      <Overlay />
      <MissionContent>
        <MissionHeading component="h1" variant="h2" gutterBottom>
          Our mission statement
        </MissionHeading>
        <MissionText variant="body1" paragraph>
          At the heart of every cup is our commitment to quality, community, and craft. We aim to
          create rich, soulful coffee experiences that bring people together — one sip, one story,
          one connection at a time.
        </MissionText>
      </MissionContent>
    </MissionWrapper>
  );
};

export default Mission;
