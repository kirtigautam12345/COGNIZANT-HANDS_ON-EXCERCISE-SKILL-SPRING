import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>You can now book your tickets.</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>Book Now</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>Book Now</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
