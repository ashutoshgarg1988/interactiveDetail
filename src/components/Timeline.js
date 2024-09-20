import React from "react";
import "./Timeline.css";

const timelineEvents = [
  { id: 1, date: "1869", title: "Birth of Gandhi", icon: "🎂" },
  { id: 2, date: "1888", title: "Studied Law in London", icon: "🎓" },
  { id: 3, date: "1915", title: "Return to India", icon: "🚢" },
  { id: 4, date: "1930", title: "Salt March", icon: "🧂" },
  { id: 5, date: "1947", title: "Indian Independence", icon: "🇮🇳" },
  { id: 6, date: "1948", title: "Assassination", icon: "⚰️" },
];

const Timeline = ({ onClickEvent }) => {
  return (
    <div className="timeline">
      {timelineEvents.map((event) => (
        <div
          key={event.id}
          className="timeline-event"
          onClick={() => onClickEvent(event)}
        >
          <span className="timeline-date">{event.date}</span>
          <div className="timeline-icon">{event.icon}</div>
          <span className="timeline-title">{event.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
