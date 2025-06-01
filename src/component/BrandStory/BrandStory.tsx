import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import {
  BrandStoryWrapper,
  Overlay,
  ContentWrapper
} from '../../styles/BrandStory/BrandStory.style';

const BrandStory = () => {
  return (
    <BrandStoryWrapper>
      <Overlay />
      <ContentWrapper>
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#fff8f0' }}>
          About Our Coffee Journey
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#ddd' }}>
          From humble beans to bold brews, our passion is crafting unforgettable coffee
          experiences rooted in tradition, community, and quality.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#6f4e37', textTransform: 'none' }}>
          Discover Our Story
        </Button>
      </ContentWrapper>
    </BrandStoryWrapper>
  );
};

export default BrandStory;
