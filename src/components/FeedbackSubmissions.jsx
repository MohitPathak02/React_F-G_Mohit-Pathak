import React, { useState } from "react";

const FeedbackSubmissions = () => {
  const [submissions, setSubmissions] = useState(
    JSON.parse(localStorage.getItem("submissions")) || []
  );
  const [filteredSubmissions, setFilteredSubmissions] = useState(submissions);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubmissionIndex, setSelectedSubmissionIndex] = useState(null);

  const handleSelectionChange = (index) => {
    setSelectedSubmissionIndex(index === selectedSubmissionIndex ? null : index);
  };

  const deleteFeedback = () => {
    if (selectedSubmissionIndex !== null) {
      const updatedSubmissions = submissions.filter(
        (_, i) => i !== selectedSubmissionIndex
      );

      localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
      setSubmissions(updatedSubmissions);
      setFilteredSubmissions(updatedSubmissions);
      setSelectedSubmissionIndex(null);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = submissions.filter((submission) => {
      return (
        submission.name.toLowerCase().includes(query) ||
        submission.email.toLowerCase().includes(query) ||
        submission.phone.toLowerCase().includes(query)
      );
    });

    setFilteredSubmissions(filtered);
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <h2>Aromatic Bar</h2>


      <div style={{ position: "absolute", right: "20px", top: "35px"  }}>
        <input
          type="text"
          placeholder="Search by name, email, or phone"
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: "90%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {filteredSubmissions.length === 0 ? (
        <p>No submissions available.</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    selectedSubmissionIndex === index ? "#f0f0f0" : "white",
                }}
              >
                <td>
                  <input
                    type="radio"
                    checked={selectedSubmissionIndex === index}
                    onChange={() => handleSelectionChange(index)}
                  />
                </td>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>
                  {Object.entries(submission.ratings)
                    .map(([question, rating]) => `${question}: ${rating}`)
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedSubmissionIndex !== null && (
        <div>
          <button
            onClick={deleteFeedback}
            style={{
              backgroundColor: "red",
              color: "white",
              position: "fixed",
              right: "20px",
              bottom: "20px",
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackSubmissions;
