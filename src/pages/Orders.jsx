import React, { useState } from "react";
import ordersData from "../data/orders.json";
import AddOrderForm from "../components/AddOrderForm";

export default function Orders() {
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    customerId: "",
    product: "",
    quantity: "",
    orderDate: "",
  });

  const handleAddOrder = () => {
    console.log("New Order Added:", newOrder);
    setNewOrder({
      orderId: "",
      customerId: "",
      product: "",
      quantity: "",
      orderDate: "",
    });
    setShowAddOrder(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📦 Orders List</h1>

      <div style={styles.buttonWrapper}>
        {!showAddOrder && (
          <button onClick={() => setShowAddOrder(true)} style={styles.addButton}>
            Add Order
          </button>
        )}
      </div>

      {showAddOrder ? (
        <AddOrderForm
          newOrder={newOrder}
          setNewOrder={setNewOrder}
          handleAddOrder={handleAddOrder}
        />
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr
                key={order.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0fdf4" : "#e6fffa",
                }}
              >
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.customer}</td>
                <td style={{ ...styles.td, color: getStatusColor(order.status), fontWeight: "bold" }}>
                  {order.status}
                </td>
                <td style={styles.td}>${order.total.toFixed(2)}</td>
                <td style={styles.td}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "#38a169"; // Green
    case "Pending":
      return "#d69e2e"; // Yellow
    case "Cancelled":
      return "#e53e3e"; // Red
    default:
      return "#4a5568"; // Gray
  }
}

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f0fdf4",
    fontFamily: "Segoe UI, sans-serif",
    minHeight: "100vh",
  },
  title: {
    fontSize: "32px",
    textAlign: "center",
    color: "#22543d",
    marginBottom: "30px",
  },
  buttonWrapper: {
    textAlign: "right",
    marginBottom: "20px",
  },
  addButton: {
    padding: "12px 24px",
    background: "linear-gradient(135deg, #38a169, #2f855a)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  th: {
    padding: "14px",
    backgroundColor: "#38a169",
    color: "white",
    textAlign: "left",
    borderBottom: "2px solid #2f855a",
  },
  td: {
    padding: "14px",
    borderBottom: "1px solid #c6f6d5",
    color: "#2f855a",
  },
};
