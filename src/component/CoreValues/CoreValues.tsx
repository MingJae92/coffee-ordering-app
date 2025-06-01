import React from 'react';
import { Container, Grid } from '@mui/material';
import {
  CoreValuesWrapper,
  ValueCard,
  ValueTitle,
  ValueDesc,
} from "../../styles/CoreValues/CoreValues.styles"

const values = [
  {
    title: 'Sustainability',
    desc: 'We ensure every bean is ethically sourced and processed with care for the environment.',
  },
  {
    title: 'Craftsmanship',
    desc: 'Our roasts are carefully developed to bring out unique, bold flavor profiles.',
  },
  {
    title: 'Community',
    desc: 'We connect people through the ritual and joy of great coffee, globally and locally.',
  },
];

const CoreValues = () => {
  return (
    <CoreValuesWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {values.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <ValueCard>
                <ValueTitle variant="h6">{item.title}</ValueTitle>
                <ValueDesc variant="body2">{item.desc}</ValueDesc>
              </ValueCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </CoreValuesWrapper>
  );
};

export default CoreValues;
