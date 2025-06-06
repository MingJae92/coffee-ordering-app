import {
  Box,
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

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        }}
        gap={4}
      >
        {reviews.map((review: Review) => (
          <Box key={review.id}>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
