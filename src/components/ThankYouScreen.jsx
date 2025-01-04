import React from "react";

const ThankYouScreen = ({ onClose }) => {
  return (
    <div style={{ textAlign: "center", padding: "200px" }}>
       &#x2705;
      <h2>Thank you for providing the feedback</h2>
      <p>We will work towards improving your experience</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ThankYouScreen;
