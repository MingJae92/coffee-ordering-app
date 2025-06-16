import { Card, CardMedia, Box, Typography } from "@mui/material";
import { useCoffee } from "../CoffeeContext/CoffeeContext";
import { useState } from "react";
import CoffeeModal from "../CoffeeModal/CoffeeModal";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";

const CoffeeMenu = () => {
  const { loading, error, coffeeData, selected, setSelected } = useCoffee();

  const handleClick = (coffee: CoffeeTypes | null) => {
    setSelected(coffee);
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        Failed to fetch coffee data.
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", pb: 8 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          padding: "16px",
          backgroundColor: "#111",
        }}
      >
        {coffeeData
          .filter((coffee) => coffee.image && coffee.image.trim() !== "")
          .map((coffee) => (
            <div
              key={coffee.id}
              onClick={() => handleClick(coffee)}
              style={{
                cursor: "pointer",
                backgroundColor: "#222",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={coffee.image}
                alt={coffee.title || "Coffee image"}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 8,
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
      </div>

      <CoffeeModal
        coffee={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </Box>
  );
};

export default CoffeeMenu;
