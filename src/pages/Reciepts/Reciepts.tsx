import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useCheckout } from "../../component/CoffeeCheckOutContext/CheckOutCoffeeContext";
import { useAuth } from "../../component/context/AuthContext";

function Receipts() {
  const { orders, orderConfirmed, totalQuantity, pickupTime } = useCheckout();
  const { user } = useAuth();

  if (!orderConfirmed || orders.length === 0) {
    return null; // or <Typography align="center">No order placed yet</Typography>
  }

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "2rem auto",
        p: 3,
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        ☕ CoffeeHub Receipt
      </Typography>

      {/* Customer Info */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Customer Info</Typography>
        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell>{user?.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell>{user?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell>{user?.id}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Order Details */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Order Details</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Order Date:</strong> {new Date().toLocaleString()}
        </Typography>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Item</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Pickup & Total */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Summary</Typography>
        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell><strong>Pickup Time</strong></TableCell>
                <TableCell>{pickupTime || "Not set"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Total Quantity</strong></TableCell>
                <TableCell>{totalQuantity}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Confirmation */}
      <Box>
        <Typography variant="h6">Order Status</Typography>
        <Typography variant="body1" color="success.main">
          ✅ Confirmed
        </Typography>
      </Box>
    </Box>
  );
}

export default Receipts;
