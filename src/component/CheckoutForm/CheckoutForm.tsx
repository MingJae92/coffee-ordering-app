// CustomerInfoForm.tsx
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useCheckout } from "../../component/CoffeeCheckOutContext/CheckOutCoffeeContext";

function CustomerInfoForm() {
  const {
    customerInfo,
    updateCustomerInfo,
    pickupTime,
    setPickupTime,
    reserved,
    reserveOrder,
    orderConfirmed,
    confirmOrder,
  } = useCheckout();

  return (
    <Box sx={{ mt: 3, maxWidth: 400 }}>
      <Typography variant="h5" gutterBottom>
        Customer Details
      </Typography>

      <TextField
        label="Name"
        value={customerInfo.name}
        onChange={(e) => updateCustomerInfo({ name: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Email"
        type="email"
        value={customerInfo.email}
        onChange={(e) => updateCustomerInfo({ email: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Phone"
        type="tel"
        value={customerInfo.phone}
        onChange={(e) => updateCustomerInfo({ phone: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Pickup Time"
        type="time"
        value={pickupTime}
        onChange={(e) => setPickupTime(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color={reserved ? "success" : "primary"}
        onClick={reserveOrder}
        fullWidth
        sx={{ mb: 1 }}
      >
        {reserved ? "Order Reserved" : "Reserve Order"}
      </Button>

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
