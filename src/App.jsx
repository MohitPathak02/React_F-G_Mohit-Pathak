import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import ThankYouScreen from "./components/ThankYouScreen";
import FeedbackSubmissions from "./components/FeedbackSubmissions";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("form");

  const renderScreen = () => {
    switch (currentScreen) {
      case "form":
        return <FeedbackForm onSubmit={() => setCurrentScreen("thankYou")} />;
      case "thankYou":
        return <ThankYouScreen onClose={() => setCurrentScreen("submissions")} />;
      case "submissions":
        return <FeedbackSubmissions />;
      default:
        return <FeedbackForm onSubmit={() => setCurrentScreen("thankYou")} />;
    }
  };

  return <div>{renderScreen()}</div>;
};

export default App;
