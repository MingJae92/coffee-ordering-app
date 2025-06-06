
import { Container } from '@mui/material';
import {
  CoreValuesWrapper,
  ValuesGrid,
  ValueCard,
  ValueTitle,
  ValueDesc,
} from '../../styles/CoreValues/CoreValues.styles.ts';

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
  {
    title: 'Innovation',
    desc: 'Constantly evolving to brew coffee experiences that surprise and delight.',
  },
];

const CoreValues = () => {
  return (
    <CoreValuesWrapper>
      <Container maxWidth="md">
        <ValuesGrid>
          {values.map((item) => (
            <ValueCard key={item.title}>
              <ValueTitle variant="h6">{item.title}</ValueTitle>
              <ValueDesc variant="body2">{item.desc}</ValueDesc>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </CoreValuesWrapper>
  );
};

export default CoreValues;
