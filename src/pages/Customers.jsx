import React, { useState } from "react";
import customerData from "../data/customers.json";
import AddCustomerForm from "../components/AddCustomerForm";

export default function Customers() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    loyalty: "",
  });

  const handleAddCustomer = () => {
    console.log("New Customer Added:", newCustomer);
    setNewCustomer({ id: "", name: "", email: "", phone: "", loyalty: "" });
    setShowAddCustomer(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Customer List</h1>
  
      <div style={styles.buttonWrapper}>
        {!showAddCustomer && (
          <button onClick={() => setShowAddCustomer(true)} style={styles.addButton}>
            Add Customer
          </button>
        )}
      </div>
  
      {showAddCustomer ? (
        <AddCustomerForm
          newCustomer={newCustomer}
          setNewCustomer={setNewCustomer}
          handleAddCustomer={handleAddCustomer}
        />
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr
                key={customer.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0fdf4" : "#e6fffa",
                }}
              >
                <td style={styles.td}>{customer.id}</td>
                <td style={styles.td}>{customer.name}</td>
                <td style={styles.td}>{customer.email}</td>
                <td style={styles.td}>{customer.phone}</td>
                <td style={styles.td}>{customer.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f0fdf4",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#22543d",
    fontSize: "32px",
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
    color: "#fff",
    textAlign: "left",
    borderBottom: "2px solid #2f855a",
  },
  td: {
    padding: "14px",
    borderBottom: "1px solid #c6f6d5",
    color: "#2f855a",
  },
};
