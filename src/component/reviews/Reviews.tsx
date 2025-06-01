import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  reviewsContainer,
  reviewCard,
  reviewerName,
  reviewText,
  avatarBox,
  quoteIcon,
  starRow,
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
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ p: 2, mb: 6, color: "#1f1f1f" }}
      >
        What our newcomers say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review: Review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card sx={reviewCard}>
              <CardContent>
                <FormatQuoteIcon sx={quoteIcon} />
                <Typography variant="body1" sx={reviewText}>
                  {review.content}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0.5}
                  justifyContent="center"
                  sx={starRow}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFB400", fontSize: 20 }} />
                  ))}
                </Stack>

                <Box sx={avatarBox}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography variant="subtitle1" sx={reviewerName}>
                    {review.name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
