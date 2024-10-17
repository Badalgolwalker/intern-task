import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  { id: 1, title: "Movie 1", image: "https://imgs.search.brave.com/8F3U7crYKc1QKgErtLSscpAwQndhUhyxYvM1Ll3290A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UQTVNemcw/TkRZMk5qTmVRVEpl/UVdwd1oxNUJiV1Uz/TURJek56SXdOVGdA/LmpwZw" },
  
  { id: 2, title: "Movie 2", image: "https://imgs.search.brave.com/zW9wQ7djLYgfw_CHOSMAuF7n-1iLIGSy9_SNSgWqsB0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzcvMTcxNjc3/LTEzMS00MUY5MzVE/NC9MZW9uYXJkby1E/aUNhcHJpby1UaXRh/bmljLUthdGUtV2lu/c2xldC1KYW1lcy1D/YW1lcm9uLmpwZz93/PTIwMCZoPTIwMCZj/PWNyb3A" },

  { id: 3, title: "Movie 3", image: "https://imgs.search.brave.com/s2k10PednXKh8nve9-CI1QTaOTiNjMBeRZey0ka8BwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb3Bvc3RlcnMu/ZXUvaW1hZ2UvMzUw/LzE4NTkwOC5qcGc" },

  { id: 4, title: "Movie 4", image: "https://imgs.search.brave.com/MZ-ZEVQ6clqjX8gSmJw4Vm_glCD9stUJyhnkkV_AcdY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zLm1v/dmllaW5zaWRlci5j/b20vaW1hZ2VzL3Av/MTUwLzgxOTAwOF9t/MTcyNjQ4NzAyNS5q/cGc" },

  { id: 5, title: "Movie 5", image: "https://imgs.search.brave.com/8j9fvQyZlZq-Y-yHgDJYhmFaip5x2Eco-PrRFHxg6vk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZW1hZ2luZS1lbnRl/cnRhaW5tZW50LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wOC9UcmFuc2Zv/cm1lcnNPbmUtNjAw/eDg4OC5qcGc" },

  { id: 6, title: "Movie 6", image: "https://imgs.search.brave.com/5Z2ppAHQgYwK4qwIqmxTqfvIH6bz90pg2W_aqC2VN1c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZW1hZ2luZS1lbnRl/cnRhaW5tZW50LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wOC9UaGVXaWxk/Um9ib3QtNjAweDk0/OC5qcGc" },

  { id: 7, title: "Movie 7", image: "https://imgs.search.brave.com/gkNkrQ-me78fftk9K4vLKx5gmz4wm9N5MPZ4ICpBFE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLm1v/dmllaW5zaWRlci5j/b20vaW1hZ2VzL3Av/MTUwLzgxNzc2Nl9t/MTcyNjA4NzQ5NS5q/cGc" },

  { id: 8, title: "Movie 8", image: "https://imgs.search.brave.com/WqyLxXknLx5mvMhWFdBWp1Cu_wpAeOgcVJ-QnGrIa3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/cmdzdGF0aWMuY29t/L2NvbnRlbnQvbW92/aWUvZTkxZmM4Nzgt/NGE2MC00ZWQwLTk4/NDktNGE5OTAxMjdj/ZTBkL3Bvc3Rlci01/MDAuanBn" },

  { id: 9, title: "Movie 9", image: "https://imgs.search.brave.com/UxaR3yRUSTV2izKBVASkPQ76ogUpKZcAGZTHlB3taUE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZW1hZ2luZS1lbnRl/cnRhaW5tZW50LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wOS9tb25zdGVy/LXN1bW1lci1wb3N0/ZXIuanBn" },
  { id: 10, title: "Movie 10", image: "https://via.placeholder.com/150" },
  // Add more movies
];

function MovieList() {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Movie List</h1>
      <div style={styles.grid}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={styles.card}
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={styles.image}
            />
            <h3 style={styles.movieTitle}>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    width: "100vw",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", 
    gap: "17px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: "8px",
    objectFit: "cover",
  },
  movieTitle: {
    marginTop: "15px",
    fontSize: "1.1rem",
    color: "#333",
    fontWeight: "bold",
  },
};


export default MovieList;
