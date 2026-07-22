import React from "react";
import office from "./images/office.jpg";

function App() {
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "WeWork",
      Rent: 70000,
      Address: "Bangalore",
    },
    {
      Name: "SmartWorks",
      Rent: 45000,
      Address: "Hyderabad",
    },
    {
      Name: "Awfis",
      Rent: 80000,
      Address: "Delhi",
    },
  ];

  return (
    <div style={{ marginLeft: "30px" }}>
      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((item, index) => {
        let color = {};

        if (item.Rent <= 60000) {
          color = { color: "red" };
        } else {
          color = { color: "green" };
        }

        return (
          <div key={index} style={{ marginBottom: "40px" }}>
            <img src={office} alt="Office Space" width="250" height="180" />

            <h2>Name: {item.Name}</h2>

            <h3 style={color}>Rent: Rs. {item.Rent}</h3>

            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
