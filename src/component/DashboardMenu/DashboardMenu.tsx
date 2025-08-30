import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Button,
} from "@mui/material";

import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";

import {
  containerSx,
  titleSx,
  flexWrapperSx,
  cardSx,
  cardMediaSx,
  cardContentSx,
} from "../../styles/DashboardMenu/DashboardMenu.styles";

import { useBasket } from "../CoffeeDashboardContext/CoffeeDashboardContext";

const DashboardMenu: React.FC = () => {
  const { loading, error, coffeeData, addToBasket } = useBasket();

  if (error) return <Typography color="error">Server error!</Typography>;
  if (loading)
    return <Skeleton variant="rectangular" width="100%" height={200} />;

  return (
    <Box sx={containerSx}>
      <Typography variant="h4" sx={titleSx}>
        Coffee Menu
      </Typography>

      <Box sx={flexWrapperSx}>
        {coffeeData.map((item: CoffeeTypes) => (
          <Card key={item.id} sx={cardSx}>
            {/* Coffee Image */}
            <CardMedia
              component="img"
              image={item.image || ""}
              alt={item.title}
              sx={cardMediaSx}
            />

            <CardContent sx={cardContentSx}>
              <Box sx={{ px: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    mb: 1,
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </Typography>

                {/* Add to Basket Button */}
                <Button sx={{ mt: 1 }} onClick={() => addToBasket(item)}>
                  Add
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardMenu;
