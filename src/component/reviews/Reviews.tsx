import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  SvgIcon,
} from "@mui/material";
import reviews from "../../../Data/ReviewData.json";
import { reviewsContainer, reviewCard, reviewerName, reviewText, avatarBox, starIcon } from "../../styles/reviews/reviews.styles";

type Review = {
  id: number;
  name: string;
  avatar: string;
  content: string;
};

const Star = () => (
  <SvgIcon sx={starIcon} viewBox="0 0 24 24" color="warning">
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </SvgIcon>
);

const Reviews = () => {
  return (
    <Box sx={reviewsContainer}>
      <Typography variant="h3" align="center" fontWeight="700" gutterBottom>
        Customer Reviews
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {reviews.map((review: Review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card sx={reviewCard} elevation={8}>
              <CardContent>
                <Box sx={avatarBox}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 80, height: 80, border: "3px solid #ccc" }}
                  />
                </Box>
                <Typography variant="h6" sx={reviewerName} align="center">
                  {review.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={reviewText}
                  align="center"
                  gutterBottom
                >
                  “{review.content}”
                </Typography>

                <Stack direction="row" justifyContent="center" spacing={0.5}>
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
