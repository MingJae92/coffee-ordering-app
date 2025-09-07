import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { useCheckout } from "../../component/CoffeeCheckOutContext/CheckOutCoffeeContext";
import CheckoutForm from "../../component/CheckoutForm/CheckoutForm";

function Checkout() {
  const { orders } = useCheckout();

  // Calculate subtotal of items
  const subtotalItems = orders.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Checkout Order
      </Typography>

      {/* Orders Section */}
      <Typography variant="h5" gutterBottom>
        Orders
      </Typography>
      <List>
        {orders.map((item) => (
          <React.Fragment key={item.id}>
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
                      Ingredients: {item.ingredients.join(", ")}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>

      {/* Subtotal of items */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total Items: {subtotalItems}
      </Typography>

      {/* Customer Info Section */}
      <CheckoutForm />
    </Box>
  );
}

export default Checkout;
