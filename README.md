# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Feedback Form Application

This project is a simple feedback form application built with React.js. It allows users to submit feedback, rate their experience, and view the submissions. The project includes three main components:

- **FeedbackForm**: A form for collecting user feedback.
- **FeedbackSubmissions**: A table for viewing and managing feedback submissions.
- **ThankYouScreen**: A thank-you message displayed after form submission.

## Features

1. **Feedback Form**:
   - Collects user details (name, email, phone number with country code).
   - Includes multiple rating questions.
   - Validates required fields.
   - Saves feedback data to `localStorage`.

2. **Submissions Management**:
   - Displays all feedback submissions in a table.
   - Allows searching by name, email, or phone number.
   - Supports deleting specific feedback entries.

3. **Thank-You Screen**:
   - Displays a message after successful form submission.

---

## Installation

### Prerequisites
- Node.js and npm installed on your machine.

# Technologies Used
**React.js**: Frontend framework.
**CSS**: Styling the components.
**localStorage**: Storing feedback submissions.
