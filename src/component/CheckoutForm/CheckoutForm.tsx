import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useCheckout } from "../../component/CoffeeCheckOutContext/CheckOutCoffeeContext";
import { useAuth } from "../context/AuthContext";

function CustomerInfoForm() {
  const {
    customerInfo,
    // updateCustomerInfo,
    pickupTime,
    setPickupTime,
    reserved,
    reserveOrder,
    orderConfirmed,
    confirmOrder,
  } = useCheckout();
  const{user}=useAuth()

  return (
    <Box sx={{ mt: 3, maxWidth: 400 }}>
      <Typography variant="h5" gutterBottom>
        Customer Details
      </Typography>

      {/* Display Customer Info */}
      <Typography>Name: {user?.name}</Typography>
      <Typography>Email: {user?.email}</Typography>
      <Typography>ID: {user?.id}</Typography>
      <Typography>Display Name: {user?.displayName}</Typography>

      {/* Input for Pickup Time */}
      <TextField
        label="Pickup Time"
        type="time"
        value={pickupTime}
        onChange={(e) => setPickupTime(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Reserve Button */}
      <Button
        variant="contained"
        color={reserved ? "success" : "primary"}
        onClick={reserveOrder}
        fullWidth
        sx={{ mb: 1 }}
      >
        {reserved ? "Order Reserved" : "Reserve Order"}
      </Button>

      {/* Confirm Button */}
      <Button
        variant="contained"
        color={orderConfirmed ? "success" : "secondary"}
        onClick={confirmOrder}
        fullWidth
        disabled={!reserved}
      >
        {orderConfirmed ? "Order Confirmed" : "Confirm Order"}
      </Button>
    </Box>
  );
}

export default CustomerInfoForm;
