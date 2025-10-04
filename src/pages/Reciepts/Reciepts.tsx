import React from "react";
import { useCheckout } from "../../component/CoffeeCheckOutContext/CheckOutCoffeeContext";
import { useAuth } from "../../component/context/AuthContext";

function Receipts() {
  const {
    orders, // array of orders
    customerInfo, // { name, email, phone }
    pickupTime, // string or date
    reserved, // array of reserved items
    reserveOrder, // array of reserved orders
    orderConfirmed,
    totalQuantity,
    // boolean
    quantity
  } = useCheckout();
  const {user}=useAuth()

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        maxWidth: 500,
        margin: "2rem auto",
        borderRadius: "8px",
      }}
    >
      <h2>CoffeeHub Receipt</h2>

      {/* Customer Info */}
      <section>
        <h4>Customer Info</h4>
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p><strong>ID</strong>{user?.id}</p>
        
      </section>

      {/* Reserved Items */}
      {/* <section>
        <h4>Reserved Items</h4>
        {reserved.map((item, index) => (
          <p key={index}>
            {item.quantity} × {item.coffeeType} ({item.size})
          </p>
        ))}
      </section> */}

      {/* Orders */}
      <section>
        <h4>All Orders</h4>
        {orders.map((order, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Quantity:</strong> {order.quantity}
            </p>
            <p>
              <strong>Title:</strong> {order.title}
            </p>
            <p>
              <strong>Description:</strong> {order.description}
            </p>
            
          </div>
        ))}
      </section>

      {/* Pickup Time */}
      <section>
        <h4>Pickup Time</h4>
        <p>{pickupTime}</p>
      </section>
      <div>
        Total Quantity:
        {totalQuantity}
      </div>

      {/* Confirmation */}
      <section>
        <h4>Order Status</h4>
        <p>{orderConfirmed ? "✅ Confirmed" : "⏳ Pending"}</p>
      </section>
    </div>
  );
}

export default Receipts;
