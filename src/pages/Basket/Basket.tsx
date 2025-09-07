import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useBasket } from "../../component/CoffeeDashboardContext/CoffeeDashboardContext";
import { useNavigate } from "react-router-dom";

function Basket() {
  const navigate = useNavigate()
  const { selectedCoffee, removeFromBasket, clearBasket, quantity } =
    useBasket();

  

  const goToCheckOut = () => {
if (!selectedCoffee || selectedCoffee.length === 0) {
    return <Typography variant="h6">Your basket is empty.</Typography>;
  }
  navigate("/dashboard/checkout")
  };

  return (
    <Box>
      {/* Subtotal quantity */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Subtotal Items: {quantity}
      </Typography>

      {selectedCoffee.map((item) => (
        <Box
          key={item.id}
          sx={{ mb: 2, display: "flex", alignItems: "center", gap: 2 }}
        >
          <img
            src={item.image}
            alt={item.description}
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
          <Box>
            <Typography variant="subtitle1">{item.description}</Typography>
            <Typography variant="body2">Quantity: {item.quantity}</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeFromBasket(item.id)}
              sx={{ mt: 1 }}
            >
              Remove
            </Button>
          </Box>
        </Box>
      ))}

      <Button
        variant="contained"
        color="secondary"
        onClick={clearBasket}
        sx={{ mt: 3 }}
      >
        Clear Basket
      </Button>
      <Button onClick={goToCheckOut}>Checkout</Button>
    </Box>
  );
}

export default Basket;
