import React from "react";
import { useLocation } from "react-router-dom";

function BookingConfirmation() {
  const { state } = useLocation(); // Destructure the state passed from the previous page

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Seat Booked Successfully!</h1>
      <div style={styles.detailsContainer}>
        <p style={styles.detailText}><strong>Booking ID:</strong> {state.bookingId}</p>
        <p style={styles.detailText}><strong>Name:</strong> {state.name}</p>
        <p style={styles.detailText}><strong>Email:</strong> {state.email}</p>
        <p style={styles.detailText}><strong>Mobile:</strong> {state.mobile}</p>
      </div>
      <button style={styles.button} onClick={() => window.location.href = "/"}>Go to Home</button>
    </div>
  );
}

// Styles
const styles = {
  container: {
    width: "100vw",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    fontSize: "2rem",
    color: "#28a745",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    width: "300px",
    textAlign: "left",
  },
  detailText: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "10px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    textAlign: "center",
    textDecoration: "none",
    outline: "none",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default BookingConfirmation;
