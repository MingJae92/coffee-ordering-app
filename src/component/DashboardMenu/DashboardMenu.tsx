import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Button,
} from "@mui/material";
import axios from "axios";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";

import {
  containerSx,
  titleSx,
  flexWrapperSx,
  cardSx,
  cardMediaSx,
  cardContentSx,
} from "../../styles/DashboardMenu/DashboardMenu.styles";

const DashboardMenu: React.FC = () => {
  const [coffee, setCoffee] = useState<CoffeeTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coffeeData = await axios.get(
          "http://localhost:7128/api/coffeemenu"
        );

        setCoffee(coffeeData.data.coffee);
        console.log(coffeeData.data);
      } catch (err) {
        setError(true);
        console.error("Error loading coffee data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToBasket = (item: CoffeeTypes): void => {
  setSelectedCoffee((prev) => [...prev, item]);
};


  if (error) return <Typography color="error">Server error!</Typography>;
  if (loading)
    return <Skeleton variant="rectangular" width="100%" height={200} />;

  return (
    <Box sx={containerSx}>
      <Typography variant="h4" sx={titleSx}>
        Coffee Menu
      </Typography>

      <Box sx={flexWrapperSx}>
        {coffee.map((item) => (
          <Card key={item.id} sx={cardSx}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={cardMediaSx}
            />
            <CardContent sx={cardContentSx}>
              <Box sx={{ px: 1 }}>
                {" "}
                {/* Optional: adjust px to match internal spacing */}
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
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block" }}
                ></Typography>
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
