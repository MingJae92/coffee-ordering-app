import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import coffeeMenuStyles from "../../styles/CoffeMenu/CoffeMenu.styles";
import { useEffect, useState } from "react";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";
import axios from "axios";

const CoffeeMenu = () => {
  const [coffeeData, setCoffeeData] = useState<CoffeeTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      setLoading(true);
      try {
        const coffeeDataFetch = await axios.get(
          "https://api.sampleapis.com/coffee/hot"
        );
        setCoffeeData(coffeeDataFetch.data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffeeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong while fetching coffee data.</div>;
  }

  return (
    <Box sx={coffeeMenuStyles.wrapper}>
      <Typography variant="h4" sx={coffeeMenuStyles.title} gutterBottom>
        Coffee Menu
      </Typography>
      <Grid container spacing={4}>
        {coffeeData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={coffeeMenuStyles.card}>
              <CardMedia
                component="img"
                sx={coffeeMenuStyles.media}
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" sx={coffeeMenuStyles.title}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={coffeeMenuStyles.description}
                  gutterBottom
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoffeeMenu;
