import React, { useState } from "react";
import Timeline from "./components/Timeline";
import FactPopup from "./components/FactPopup";
import Quiz from "./components/Quiz";

function App() {
  const [activeEvent, setActiveEvent] = useState(null); // Track which event is active
  const [showQuiz, setShowQuiz] = useState(false); // Toggle quiz after the fact is learned

  const openEvent = (event) => {
    setActiveEvent(event);
  };

  const closePopup = () => {
    setActiveEvent(null);
    setShowQuiz(true); // Show quiz after closing popup
  };

  return (
    <div className="App">
      <h1>Gandhi's Journey: Interactive History</h1>
      <Timeline onClickEvent={openEvent} />
      {activeEvent && <FactPopup event={activeEvent} onClose={closePopup} />}
      {showQuiz && <Quiz onComplete={() => setShowQuiz(false)} />}{" "}
    </div>
  );
}

export default App;
