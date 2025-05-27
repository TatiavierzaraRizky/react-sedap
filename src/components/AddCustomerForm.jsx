import React from "react";
export default function AddCustomerForm({ newCustomer, setNewCustomer, handleAddCustomer }) {
  return (
    <div style={styles.formCard}>
      <h2 style={styles.formTitle}> Add New Customer</h2>
      <form>
        <div style={styles.formGrid}>
          <FormInput
            label="ID"
            value={newCustomer.id}
            onChange={(val) => setNewCustomer({ ...newCustomer, id: val })}
          />
          <FormInput
            label="Name"
            value={newCustomer.name}
            onChange={(val) => setNewCustomer({ ...newCustomer, name: val })}
          />
          <FormInput
            label="Email"
            type="email"
            value={newCustomer.email}
            onChange={(val) => setNewCustomer({ ...newCustomer, email: val })}
          />
          <FormInput
            label="Phone"
            value={newCustomer.phone}
            onChange={(val) => setNewCustomer({ ...newCustomer, phone: val })}
          />
          <div style={{ flex: "1 1 100%", marginTop: "15px" }}>
            <label style={styles.label}>Loyalty</label>
            <select
              value={newCustomer.loyalty}
              onChange={(e) =>
                setNewCustomer({ ...newCustomer, loyalty: e.target.value })
              }
              style={styles.select}
            >
              <option value=""> Select Loyalty Level</option>
              <option value="Bronze">🥉 Bronze</option>
              <option value="Silver">🥈 Silver</option>
              <option value="Gold">🥇 Gold</option>
            </select>
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
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #a7f3d0", 
    backgroundColor: "#e6ffed",
    color: "#065f46", 
    fontWeight: "500", 
    outlineColor: "#10b981",
    transition: "all 0.3s",
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
