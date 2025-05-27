import React from "react";

export default function AddOrderForm({ newOrder, setNewOrder, handleAddOrder }) {
  return (
    <div style={styles.formCard}>
      <h2 style={styles.formTitle}>Add New Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddOrder();
        }}
      >
        <div style={styles.formGrid}>
          <FormInput
            label="Order ID"
            value={newOrder.orderId}
            onChange={(val) => setNewOrder({ ...newOrder, orderId: val })}
          />
          <FormInput
            label="Customer ID"
            value={newOrder.customerId}
            onChange={(val) => setNewOrder({ ...newOrder, customerId: val })}
          />
          <FormInput
            label="Product"
            value={newOrder.product}
            onChange={(val) => setNewOrder({ ...newOrder, product: val })}
          />
          <FormInput
            label="Quantity"
            type="number"
            value={newOrder.quantity}
            onChange={(val) => setNewOrder({ ...newOrder, quantity: val })}
          />
          <FormInput
            label="Order Date"
            type="date"
            value={newOrder.orderDate}
            onChange={(val) => setNewOrder({ ...newOrder, orderDate: val })}
          />
          <div style={{ flex: "1 1 100%", marginTop: "15px", textAlign: "center" }}>
            <button type="submit" style={styles.submitButton}>Add Order</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function FormInput({ label, value, onChange, type = "text" }) {
  return (
    <div style={{ flex: "1 1 48%" }}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}

const styles = {
  formCard: {
    backgroundColor: "#e6ffed",
    border: "1px solid #a7f3d0",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "30px auto",
    marginBottom: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#065f46",
  },
  formGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "space-between",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#065f46",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outlineColor: "#10b981",
  },
  submitButton: {
    padding: "12px 24px",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
};
