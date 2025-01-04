import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState({});
  const [ratings, setRatings] = useState({});

  const questionsGroup1 = [
    "Please rate the quality of the service you received from your host.",
    "Was our restaurant clean?",
  ];

  const questionsGroup2 = [
    "Please rate the quality of your beverage.",
    "Please rate your overall dining experience.",
  ];

  const countryCodes = [
    { code: "+1", label: "US" },
    { code: "+91", label: "IN" },
    { code: "+44", label: "UK" },
    { code: "+61", label: "AU" },
    { code: "+81", label: "JP" },
    { code: "+49", label: "DE" },
    { code: "+86", label: "CN" },
  ];

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.phone) tempErrors.phone = "Phone number is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const feedback = { ...formData, phone: `${countryCode} ${formData.phone}`, ratings };
      const submissions =
        JSON.parse(localStorage.getItem("submissions")) || [];
      submissions.push(feedback);
      localStorage.setItem("submissions", JSON.stringify(submissions));
      onSubmit();
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Aromatic Bar</h2>
      <div className="container">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="name">Customer Name*</label>
              <input
                type="text"
                id="name"
                placeholder="E.g. Mohit"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone*</label>
              <div className="phone-input">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="country-code-select"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.label} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="9999999999"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>

            {questionsGroup1.map((question, index) => (
              <div key={index} className="question-group">
                <p>{question}*</p>
                <div className="rating-options">
                  {["Excellent", "Good", "Fair", "Bad"].map((rating) => (
                    <label key={rating} className="rating-label">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        onChange={() =>
                          setRatings({ ...ratings, [question]: rating })
                        }
                      />
                      {rating}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="form-column">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="E.g. abc@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            {questionsGroup2.map((question, index) => (
              <div key={index} className="question-group">
                <p>{question}*</p>
                <div className="rating-options">
                  {["Excellent", "Good", "Fair", "Bad"].map((rating) => (
                    <label key={rating} className="rating-label">
                      <input
                        type="radio"
                        name={`question-${questionsGroup1.length + index}`}
                        onChange={() =>
                          setRatings({ ...ratings, [question]: rating })
                        }
                      />
                      {rating}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">
        Submit Review
      </button>
    </form>
  );
};

export default FeedbackForm;
