import React, { useState, useEffect } from "react";

function IPLPointsTable() {
  const [teams, setTeams] = useState([]);

  // Fetching data from the API
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        
        const data = await response.json();
        console.log(data);

        // Sorting data based on NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>IPL 2022 Points Table</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: "20px",
    display: "flex",
    marginLeft: "400px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#333",
  },
  table: {
    borderCollapse: "collapse",
    width: "80%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginLeft: "50px",

  },
  th: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    textAlign: "center",
    fontSize: "1rem",
   
    
  },
  td: {
    padding: "30px",


    textAlign: "center",
    fontSize: "1rem",
    borderBottom: "1px solid #ddd",
  },
  tr: {
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
};

export default IPLPointsTable;
