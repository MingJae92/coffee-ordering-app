// src/component/CoffeeMenu/CoffeeMenu.tsx

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";
import axios from "axios";

const DashboardMenu: React.FC = () => {
  const [coffee, setCoffee] = useState<CoffeeTypes[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const coffeeData = await axios.get(
          "http://localhost:7128/api/coffeemenu"
        );
        const coffeeDataRes = coffeeData.data.coffee;
        console.log(coffeeDataRes);
        setCoffee(coffeeDataRes);
      } catch (error) {
        setError(true);
        console.log("Load error", error);
      } finally {
        setloading(false);
      }
    };
    dataFetch()
  }, []);
  // if (error) {
  //   return <div>Server error!</div>;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Coffee Menu
      </Typography>
      <Grid container spacing={2}>
        {coffee.map((item) => (
          <div key={item.id}>
            {item.title}
            {item.description}
            {item.ingredients}

            <img src={item.image} />
          </div>
        ))}
        Grid
      </Grid>
    </Box>
  );
};

export default DashboardMenu;
