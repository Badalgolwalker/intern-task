import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const movieDetails = {
  1: { title: "Movie 1", description: "This is Movie 1's description." },
  2: { title: "Movie 2", description: "This is Movie 2's description." },
 
};

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  
  const movie = movieDetails[id];

  if (!movie) {
    return (
      <div style={styles.container}>
        <h1>Movie Not Found</h1>
        <p>The movie you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{movie.title}</h1>
      <p style={styles.description}>{movie.description}</p>
      <button style={styles.button} onClick={() => navigate(`/book/${id}`)}>
        Book Seat
      </button>
    </div>
  );
}

// Styles
const styles = {
  container: {
    width: "100vw",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "red",  
    color: "#fff", 
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default MovieDetails;
