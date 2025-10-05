import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { useCheckout } from "../../component/CoffeeCheckOutContext/CheckOutCoffeeContext";
import CheckoutForm from "../../component/CheckoutForm/CheckoutForm";
import { useAuth } from "../../component/context/AuthContext";
import axios from "axios";

function Checkout() {
  const { orders, quantity } = useCheckout();
  const { user } = useAuth();

  const handleCheckout = async () => {
    if (!user) {
      alert("You need to be logged in!");
      return;
    }

    const coffeeReqData = {
      userId: user.id,
      basket: orders.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      total: quantity,
    };

    console.log("Coffee checkout payload:", coffeeReqData);

    try {
      await axios.post("http://localhost:7128/api/checkout", coffeeReqData);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("There was an issue placing your order.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Checkout Order
      </Typography>
      

      <Typography variant="h5" gutterBottom>
        Orders
      </Typography>
      <List>
        {orders.map((item) => (
          <React.Fragment key={item.productId}>
            <ListItem alignItems="flex-start">
              <Box sx={{ mr: 2 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <ListItemText
                primary={`${item.title} (x${item.quantity})`}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ingredients: {item.ingredients?.join(", ")}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Total Items: {quantity}
      </Typography>

      <CheckoutForm />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={handleCheckout}
      >
        Confirm Checkout
      </Button>
    </Box>
  );
}

export default Checkout;
