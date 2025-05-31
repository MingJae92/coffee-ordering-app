import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  reviewsContainer,
  reviewCard,
  reviewerName,
  reviewText,
  avatarBox,
} from "../../styles/reviews/reviews.styles";
import reviews from "../../../Data/ReviewData.json";

type Review = {
  id: number;
  name: string;
  avatar: string;
  content: string;
};

const Reviews = () => {
  return (
    <Box sx={reviewsContainer}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        What Our Customers Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review: Review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card sx={reviewCard}>
              <CardContent>
                <Box sx={avatarBox}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 64, height: 64 }}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={reviewerName}
                  align="center"
                >
                  {review.name}
                </Typography>
                <Typography variant="body2" sx={reviewText} align="center">
                  "{review.content}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
